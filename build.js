const fs = require('fs');
const path = require('path');

// Load .env file (if it exists)
const envPath = path.join(__dirname, '.env');
let envVars = {};

if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf8');
  envContent.split('\n').forEach(line => {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key && valueParts.length) {
        envVars[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
      }
    }
  });
  console.log('✅ .env file loaded');
} else {
  console.log('⚠️  .env file not found, using defaults');
}

// Read index.html
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace Firebase config placeholders (individual values)
const replacements = {
  'VITE_FIREBASE_API_KEY': 'apiKey',
  'VITE_FIREBASE_AUTH_DOMAIN': 'authDomain',
  'VITE_FIREBASE_PROJECT_ID': 'projectId',
  'VITE_FIREBASE_STORAGE_BUCKET': 'storageBucket',
  'VITE_FIREBASE_MESSAGING_SENDER_ID': 'messagingSenderId',
  'VITE_FIREBASE_APP_ID': 'appId'
};

Object.entries(replacements).forEach(([envKey, configKey]) => {
  const value = envVars[envKey];
  if (value) {
    const regex = new RegExp(`("${configKey}":\\s*")[^"]*(")`, 'g');
    html = html.replace(regex, `$1${value}$2`);
  }
});

// Replace entire firebaseConfig object if VITE_FIREBASE_CONFIG is provided
if (envVars['VITE_FIREBASE_CONFIG']) {
  try {
    const configObj = JSON.parse(envVars['VITE_FIREBASE_CONFIG']);
    const configStr = JSON.stringify(configObj, null, 6);
    const configRegex = /const firebaseConfig = \{[^}]+\}/s;
    html = html.replace(configRegex, `const firebaseConfig = ${configStr}`);
  } catch (e) {
    console.warn('⚠️  VITE_FIREBASE_CONFIG is not valid JSON, using individual values instead');
  }
}

// Replace user password placeholders
const userPasswordReplacements = {
  '__ADMIN_PASSWORD__': envVars['VITE_USER_ADMIN_PASSWORD'],
  '__USER1_PASSWORD__': envVars['VITE_USER_USER1_PASSWORD'],
  '__USER2_PASSWORD__': envVars['VITE_USER_USER2_PASSWORD'],
  '__USER3_PASSWORD__': envVars['VITE_USER_USER3_PASSWORD'],
  '__USER4_PASSWORD__': envVars['VITE_USER_USER4_PASSWORD']
};

Object.entries(userPasswordReplacements).forEach(([placeholder, password]) => {
  if (password) {
    html = html.replace(new RegExp(placeholder, 'g'), password);
  }
});

// Write to dist/
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(path.join(distPath, 'index.html'), html);

// Also copy to root for direct browser access
fs.writeFileSync(path.join(__dirname, 'index.html'), html);

// Copy PWA files
const pwaFiles = ['manifest.json', 'sw.js', 'icon-192.png', 'icon-512.png'];
pwaFiles.forEach((file) => {
  const src = path.join(__dirname, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(distPath, file));
  }
});

console.log('✅ Build complete: dist/index.html generated with Firebase config from .env');
