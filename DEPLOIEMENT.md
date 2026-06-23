# 🌐 Déploiement en ligne — Eqnovia Notes de Frais

## Option A : Firebase Hosting (Recommandé - Gratuit)

### Étape 1 — Créer un projet Firebase
1. Allez sur https://console.firebase.google.com
2. Cliquez **"Ajouter un projet"**
3. Nom du projet : `eqnovia-expenses`
4. Désactivez Google Analytics (optionnel)
5. Cliquez **"Créer le projet"**

### Étape 2 — Activer Firestore (base de données)
1. Dans le projet Firebase → **Firestore Database**
2. Cliquez **"Créer une base de données"**
3. Mode : **"Démarrer en mode test"** (pendant 30 jours)
4. Région : **europe-west1** (Paris)

### Étape 3 — Récupérer la configuration
1. Icône ⚙️ → **Paramètres du projet**
2. Scroll jusqu'à **"Vos applications"** → cliquez **"Web"** (</>)
3. Nom : `note-de-frais`
4. **Copiez** la config qui ressemble à ceci :
```js
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "eqnovia-expenses.firebaseapp.com",
  projectId: "eqnovia-expenses",
  storageBucket: "eqnovia-expenses.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123:web:abc"
};
```

### Étape 4 — Coller la config dans index.html
Ouvrez `index.html` et remplacez le bloc `firebaseConfig` (lignes ~20-28)
par votre vraie configuration.

### Étape 5 — Déployer
```powershell
cd "C:\Users\hp\.gemini\antigravity-ide\scratch\note-de-frais"
firebase login
firebase init hosting   # choisir le projet eqnovia-expenses
firebase deploy
```

→ **URL publique** : `https://eqnovia-expenses.web.app`

---

## Option B : Netlify Drop (Le plus simple - 0 config)

1. Allez sur https://app.netlify.com/drop
2. **Glissez** le fichier `index.html` dans la zone
3. Une URL publique est générée en 10 secondes !
   Ex : `https://amazing-curie-123.netlify.app`

> ⚠️ Avec Netlify, les données sont dans le localStorage du navigateur
> (pas de base de données partagée). Pour une vraie DB, utilisez Firebase.

---

## Option C : GitHub Pages (Gratuit + Versionné)

```bash
# 1. Créer un repo GitHub "eqnovia-expenses"
# 2. Pusher le fichier
git init
git add index.html
git commit -m "Initial commit"
git remote add origin https://github.com/VOTRE_USER/eqnovia-expenses.git
git push -u origin main

# 3. Settings → Pages → Branch: main
# URL : https://VOTRE_USER.github.io/eqnovia-expenses/
```

---

## 📊 Résumé des options

| Option | Base de données | URL publique | Complexité |
|--------|----------------|--------------|------------|
| Firebase | ✅ Firestore (temps réel) | ✅ .web.app | Moyenne |
| Netlify | ❌ localStorage | ✅ Instant | Très facile |
| GitHub Pages | ❌ localStorage | ✅ .github.io | Facile |
