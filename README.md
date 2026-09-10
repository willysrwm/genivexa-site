# GeniVexa - Site d'affiliation Outils IA

## 🚀 Déploiement rapide

### Étape 1 : Créer le repo GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur "New repository"
3. Nom : `genivexa-site`
4. Visibilité : Public
5. Cliquez "Create repository"

### Étape 2 : Uploader les fichiers

1. Sur la page du repo, cliquez "uploading an existing file"
2. Glissez-déposez tous les fichiers du projet
3. Cliquez "Commit changes"

### Étape 3 : Déployer sur Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez "Add New Project"
4. Sélectionnez `genivexa-site`
5. Cliquez "Deploy"
6. Votre site sera en ligne sur `genivexa-site.vercel.app`

### Étape 4 : Domaine personnalisé (plus tard)

1. Achetez un domaine (Cloudflare, Namecheap...)
2. Dans Vercel : Settings > Domains
3. Ajoutez votre domaine et suivez les instructions DNS

## 📁 Structure

- `/src/components` : Composants réutilisables
- `/src/pages` : Pages du site
- `/src/data/tools.js` : Liste des outils (modifiez les liens affiliés ici)

## 🔗 Ajouter vos liens d'affiliation

Ouvrez `src/data/tools.js` et remplacez les `affiliateLink` par vos vrais liens.

## 📝 Ajouter un article de blog

Modifiez `src/pages/Blog.jsx` et ajoutez vos articles dans le tableau `articles` .
