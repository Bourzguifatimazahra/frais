const fs = require('fs');
const path = require('path');

// Load .env file
const envPath = path.join(__dirname, '.env');
const envContent = fs.readFileSync(envPath, 'utf8');
const envVars = {};
envContent.split('\n').forEach(line => {
  const trimmed = line.trim();
  if (trimmed && !trimmed.startsWith('#')) {
    const [key, ...valueParts] = trimmed.split('=');
    if (key && valueParts.length) {
      envVars[key.trim()] = valueParts.join('=').trim().replace(/^["']|["']$/g, '');
    }
  }
});

// Read index.html
const htmlPath = path.join(__dirname, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace Firebase config placeholders
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

// Write to dist/
const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

fs.writeFileSync(path.join(distPath, 'index.html'), html);
console.log('✅ Build complete: dist/index.html generated with Firebase config from .env');
