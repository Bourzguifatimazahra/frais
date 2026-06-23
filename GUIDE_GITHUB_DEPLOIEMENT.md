# 🚀 Guide — Publier sur GitHub & Déployer en ligne

## ✅ Ce qui a été ajouté
- **Bouton ✏️ Modifier** sur chaque ligne de dépense (dans tous les tableaux).
- **Modal de modification** : vous pouvez modifier la date, le montant, la description, la catégorie et le justificatif.
- **Mise à jour Firebase** : Votre configuration Firebase réelle a été injectée et configurée dans `index.html`. L'application enregistre et modifie désormais les dépenses directement sur Firestore.

---

## 1️⃣ Créer un dépôt GitHub
1. Allez sur [github.com](https://github.com) et connectez-vous.
2. Cliquez sur le bouton vert **"New"** (ou **"New repository"**).
3. Nommez le dépôt : `note-de-frais`.
4. Laissez-le en **Public** (requis pour la version gratuite de GitHub Pages).
5. **Ne cochez pas** "Add a README file" ou d'autres options d'initialisation.
6. Cliquez sur **"Create repository"**.

---

## 2️⃣ Initialiser Git et envoyer le code
Ouvrez votre terminal (PowerShell sur Windows) et exécutez ces commandes :

```powershell
# Accédez au dossier de votre projet
cd "c:\Users\hp\Desktop\note-de-frais"

# Initialiser le dépôt Git local
git init

# Ajouter tous les fichiers au suivi Git
git add .

# Enregistrer les modifications
git commit -m "feat: ajout de la modification et config Firebase réelle"

# Renommer la branche par défaut en main
git branch -M main

# Lier votre dossier local au dépôt GitHub (remplacez VOTRE_USERNAME)
git remote add origin https://github.com/VOTRE_USERNAME/note-de-frais.git

# Envoyer le code sur GitHub
git push -u origin main
```
*(Remplacez `VOTRE_USERNAME` par votre identifiant GitHub réel)*

---

## 3️⃣ Déployer gratuitement avec GitHub Pages
Une fois le code sur GitHub, vous pouvez le mettre en ligne très facilement :
1. Sur la page de votre dépôt sur GitHub, allez dans l'onglet **Settings** (Paramètres).
2. Dans la barre latérale gauche, cliquez sur **Pages**.
3. Dans la section **Build and deployment** :
   - Sous **Source**, sélectionnez **Deploy from a branch**.
   - Sous **Branch**, sélectionnez **main** et le dossier **/ (root)**.
4. Cliquez sur **Save**.

Une fois activé (attendez 1 à 2 minutes), votre application sera disponible publiquement à l'adresse suivante :
👉 `https://VOTRE_USERNAME.github.io/note-de-frais/`

---

## 4️⃣ Comment mettre à jour le site après une modification ?
Chaque fois que vous modifiez le code localement et voulez le mettre à jour en ligne :
```powershell
git add .
git commit -m "Description des changements"
git push
```
Le site se mettra à jour automatiquement en quelques instants !
