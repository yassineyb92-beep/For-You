# 🚀 Déploiement sur Vercel - Guide Rapide

## Méthode 1 : Via l'Interface Web (Recommandé - Plus Simple)

### Étapes :

1. **Créer un compte Vercel**
   - Allez sur [vercel.com](https://vercel.com)
   - Cliquez sur "Sign Up" (gratuit)
   - Connectez-vous avec GitHub, GitLab, Bitbucket ou email

2. **Déployer votre projet**
   - Une fois connecté, cliquez sur **"Add New..."** → **"Project"**
   - Cliquez sur **"Browse"** ou **"Drag and Drop"**
   - Sélectionnez le dossier du projet (ou glissez-déposez tous les fichiers)
   - Vercel détectera automatiquement que c'est un site statique

3. **Configuration (optionnelle)**
   - **Project Name** : restaurant-ifrane (ou votre choix)
   - **Framework Preset** : "Other" (Vercel détectera automatiquement)
   - **Root Directory** : `./` (laisser par défaut)
   - **Build Command** : laisser vide (pas de build nécessaire)
   - **Output Directory** : laisser vide

4. **Déployer**
   - Cliquez sur **"Deploy"**
   - Attendez quelques secondes
   - Votre site sera en ligne !

5. **Obtenir l'URL**
   - Après le déploiement, Vercel vous donnera une URL comme :
     `https://restaurant-ifrane.vercel.app`
   - Cette URL est automatique et permanente

## Méthode 2 : Via Vercel CLI (Si vous avez Node.js)

Si vous installez Node.js plus tard, vous pouvez utiliser :

```bash
# Installer Vercel CLI globalement
npm install -g vercel

# Aller dans le dossier du projet
cd "/Users/yassinbouabdellah/cursor F"

# Déployer
vercel

# Pour déployer en production
vercel --prod
```

## ⚙️ Configuration Optionnelle

Vercel n'a pas besoin de configuration spéciale pour ce projet, mais vous pouvez créer un fichier `vercel.json` si vous voulez des redirections ou headers personnalisés.

## 🔄 Mises à jour Futures

Pour mettre à jour le site :
- **Via Interface Web** : Re-téléversez les fichiers modifiés
- **Via CLI** : Exécutez `vercel --prod` depuis le dossier

## 📝 Notes

- Vercel est **gratuit** pour les sites statiques
- Le déploiement est **instantané**
- Votre site aura une URL HTTPS automatique
- Vous pouvez ajouter un domaine personnalisé plus tard dans les paramètres du projet

---

**Astuce** : Pour des mises à jour futures, il est recommandé de connecter un dépôt Git (GitHub, GitLab, etc.) pour un déploiement automatique à chaque commit.
