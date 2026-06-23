# 📋 Eqnovia — Notes de Frais

> Application de gestion des notes de frais professionnels pour les employés d'Eqnovia.

![Logo](image.png)

---

## 🚀 Fonctionnalités

| Fonctionnalité | Description |
|----------------|-------------|
| ✏️ **Saisie manuelle** | Enregistrez vos dépenses avec date, montant HT/TTC, catégorie et description |
| 📸 **OCR automatique** | Importez une photo de facture — Tesseract.js extrait la date, le montant et la description |
| 📋 **Historique complet** | Consultez toutes vos dépenses, triables par date, montant ou catégorie |
| 📅 **Vue mensuelle** | Groupez vos dépenses par mois avec totaux et graphiques |
| 📆 **Vue annuelle** | Bilan annuel avec répartition mensuelle et par catégorie |
| 📄 **Export PDF** | Générez un document PDF officiel de vos notes de frais |
| 📊 **Export Excel** | Exportez vos données au format `.xlsx` pour Excel |
| 📑 **Export CSV** | Téléchargez un fichier CSV compatible avec tous les tableurs |
| 🔒 **Stockage sécurisé** | Données sauvegardées sur Firebase Firestore (ou localStorage en mode hors-ligne) |
| 👤 **Profil employé** | Informations personnalisées (nom, prénom, département) |

---

## 🏗️ Architecture

```
note-de-frais/
├── index.html          # Application SPA (Single Page Application)
├── firebase.json       # Configuration Firebase Hosting
├── DEPLOIEMENT.md      # Guide de déploiement en ligne
├── GUIDE_GITHUB_DEPLOIEMENT.md  # Guide GitHub Pages
└── README.md           # Ce fichier
```

L'application est entièrement contenue dans un seul fichier [`index.html`](index.html) :
- **HTML5** — Structure sémantique
- **CSS3** — Design system Eqnovia (tokens, responsive)
- **JavaScript ES6+** — Logique métier, Firebase bridge, exports
- **Firebase SDK** — Base de données Firestore temps réel
- **Tesseract.js** — Reconnaissance optique de caractères (OCR)
- **jsPDF + AutoTable** — Génération de PDF
- **SheetJS (XLSX)** — Export Excel

---

## 📦 Technologies utilisées

| Technologie | Usage |
|-------------|-------|
| [Firebase Firestore](https://firebase.google.com/products/firestore) | Base de données NoSQL temps réel |
| [Tesseract.js](https://tesseract.projectnaptha.com/) | OCR pour lecture de factures |
| [jsPDF](https://github.com/parallax/jsPDF) | Génération de documents PDF |
| [SheetJS](https://sheetjs.com/) | Export de données Excel |
| [Inter](https://rsms.me/inter/) | Police d'interface moderne |

---

## 🔒 Sécurité

L'application intègre plusieurs mesures de protection contre les attaques web :

| Mesure | Description |
|--------|-------------|
| **CSP (Content Security Policy)** | Restreint les sources de scripts, styles, images et connexions |
| **XSS Protection** | Échappement HTML (`esc()`), sanitization des entrées (`sanitizeInput()`) |
| **X-Frame-Options** | Empêche le clickjacking (`DENY`) |
| **X-Content-Type-Options** | Empêche le sniffing de type MIME (`nosniff`) |
| **Referrer Policy** | Politique de référencement stricte |
| **Validation serveur** | Vérification des montants (0 < x ≤ 10 000 000 DH) et dates (passé, ≤ 10 ans) |
| **Sanitization** | Suppression des caractères dangereux `< > " '` dans les entrées utilisateur |

> ⚠️ **Note** : En mode Firebase, les règles de sécurité Firestore doivent également être configurées côté serveur.

## 🎨 Design System

L'application respecte la charte graphique **Eqnovia** :

- **Couleurs principales** : Bleu Eqnovia `#0B4F9E`, Orange `#F7931E`
- **Typographie** : Inter (300–800)
- **Composants** : Panels, badges, modals, toasts, bar charts
- **Responsive** : Adapté mobile, tablette et desktop

---

## 📖 Documentation

| Document | Description |
|----------|-------------|
| [`DEPLOIEMENT.md`](DEPLOIEMENT.md) | Guide de déploiement (Firebase, Netlify, GitHub Pages) |
| [`GUIDE_GITHUB_DEPLOIEMENT.md`](GUIDE_GITHUB_DEPLOIEMENT.md) | Publication sur GitHub & déploiement GitHub Pages |

---

## ⚡ Démarrage rapide

### Option 1 : Ouvrir localement

1. Clonez ou téléchargez le projet
2. Ouvrez [`index.html`](index.html) dans votre navigateur
3. L'application fonctionne en mode **local** (localStorage) sans configuration

### Option 2 : Déployer en ligne

Consultez [`DEPLOIEMENT.md`](DEPLOIEMENT.md) pour les instructions détaillées.

**Résumé des options :**

| Option | Base de données | URL publique | Complexité |
|--------|----------------|--------------|------------|
| Firebase | ✅ Firestore (temps réel) | ✅ `.web.app` | Moyenne |
| Netlify | ❌ localStorage | ✅ Instant | Très facile |
| GitHub Pages | ❌ localStorage | ✅ `.github.io` | Facile |

---

## 📜 Conditions d'utilisation

L'utilisation de cette application est soumise aux conditions suivantes :

- Destinée exclusivement aux employés d'Eqnovia
- Toute dépense doit être justifiée par un justificatif valide
- Les montants saisis doivent être exacts
- L'utilisateur est responsable de l'exactitude des informations
- Les données sont conservées 10 ans (durée légale comptable)

> 📌 Consultez la section **Conditions & Politique** dans l'application pour plus de détails.

---

## 🤝 Contribution

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/ma-fonctionnalite`)
3. Committez vos modifications (`git commit -m "feat: ajout de..."`)
4. Pushez vers la branche (`git push origin feature/ma-fonctionnalite`)
5. Ouvrez une Pull Request

---

## 📄 Licence

© 2025 **Eqnovia** — Tous droits réservés.

Ce projet est la propriété d'Eqnovia. Toute reproduction ou distribution sans autorisation est interdite.

---

## 📞 Contact

| | |
|---|---|
| 📧 Email | [support@eqnovia.ma](mailto:support@eqnovia.ma) |
| 📍 Adresse | Eqnovia, Casablanca, Maroc |
| 🔗 Version | v3.0 · Firebase + Local |

---

<div align="center">

**Eqnovia** · Gestion intelligente des notes de frais

</div>
