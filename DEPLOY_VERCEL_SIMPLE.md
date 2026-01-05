# 🚀 Déployer sur Vercel - Solutions Simples

## ⚠️ Situation actuelle

Vercel privilégie maintenant les dépôts Git. Pour déployer vos fichiers locaux, voici les meilleures options :

---

## ✅ Solution 1 : Netlify (RECOMMANDÉ - Plus Simple)

Netlify a un drag & drop direct, plus simple pour les fichiers locaux :

1. Allez sur **[netlify.com](https://www.netlify.com)**
2. Créez un compte (gratuit)
3. Cliquez sur **"Add new site"** → **"Deploy manually"**
4. **Glissez-déposez** le dossier entier ou tous les fichiers
5. C'est tout ! Votre site sera en ligne en quelques secondes

**Avantages** : Aucune installation nécessaire, drag & drop direct

---

## ✅ Solution 2 : Vercel via GitHub (Gratuit - 5 minutes)

Créez un dépôt GitHub et importez-le dans Vercel :

### Étape 1 : Créer un compte GitHub
1. Allez sur [github.com](https://github.com) et créez un compte (gratuit)

### Étape 2 : Créer un nouveau dépôt
1. Cliquez sur **"+"** en haut à droite → **"New repository"**
2. Nom : `restaurant-ifrane` (ou votre choix)
3. Cochez **"Public"**
4. **NE cochez PAS** "Add README" (vos fichiers le remplaceront)
5. Cliquez sur **"Create repository"**

### Étape 3 : Téléverser vos fichiers
1. Sur la page du nouveau dépôt, vous verrez des instructions
2. Ou utilisez GitHub Desktop (plus facile) :
   - Téléchargez [GitHub Desktop](https://desktop.github.com)
   - Installez-le
   - Cliquez sur **"File"** → **"Add Local Repository"**
   - Sélectionnez votre dossier
   - Cliquez sur **"Publish repository"**

### Étape 4 : Importer dans Vercel
1. Retournez sur Vercel (page "New Project")
2. Cliquez sur **"Continue with GitHub"**
3. Autorisez Vercel à accéder à GitHub
4. Sélectionnez votre dépôt `restaurant-ifrane`
5. Cliquez sur **"Import"**
6. Laissez les paramètres par défaut
7. Cliquez sur **"Deploy"**

**Avantage** : Déploiement automatique à chaque mise à jour

---

## ✅ Solution 3 : Vercel CLI (Si vous installez Node.js)

Si vous voulez absolument utiliser Vercel CLI :

### Installer Node.js
1. Allez sur [nodejs.org](https://nodejs.org)
2. Téléchargez la version LTS (recommandée)
3. Installez (double-clic sur le fichier .pkg)
4. Redémarrez le terminal

### Puis utilisez Vercel CLI
```bash
# Installer Vercel CLI
npm install -g vercel

# Aller dans le dossier
cd "/Users/yassinbouabdellah/cursor F"

# Déployer
vercel
```

---

## 🎯 Ma Recommandation

**Pour un déploiement rapide maintenant** → Utilisez **Netlify** (Solution 1)
- Drag & drop direct
- Aucune installation
- Fonctionne immédiatement

**Pour une solution à long terme** → Utilisez **GitHub + Vercel** (Solution 2)
- Déploiement automatique
- Version control
- Plus professionnel

---

Besoin d'aide avec une de ces méthodes ? Dites-moi laquelle vous préférez !
