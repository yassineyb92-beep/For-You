# Restaurant Ifrane - Commande par Téléphone IA

Application web professionnelle pour un restaurant à Ifrane, Maroc, permettant aux clients de passer des commandes par téléphone via un agent IA multilingue (Darija & Français) utilisant SAWT IA.

## 🎯 Fonctionnalités

- **Interface moderne et responsive** (desktop + mobile)
- **Intégration SAWT IA** - Widget de commande vocale en Darija/Français
- **Sections complètes** :
  - Page d'accueil avec CTA
  - Comment ça marche
  - Menu complet (Plats, Sandwichs, Boissons)
  - Avantages de la commande par téléphone IA
  - Contact & Localisation
- **Design professionnel** avec animations subtiles
- **Multilingue** : Français + Darija

## 🚀 Déploiement

### Option 1 : Netlify (Recommandé - Gratuit)

1. **Via l'interface Netlify** :
   - Allez sur [netlify.com](https://www.netlify.com)
   - Créez un compte (gratuit)
   - Cliquez sur "Add new site" → "Deploy manually"
   - Glissez-déposez le dossier du projet
   - Votre site sera déployé en quelques secondes

2. **Via Netlify CLI** :
   ```bash
   # Installer Netlify CLI
   npm install -g netlify-cli
   
   # Se connecter
   netlify login
   
   # Déployer
   netlify deploy --prod
   ```

### Option 2 : Vercel (Gratuit)

1. **Via l'interface Vercel** :
   - Allez sur [vercel.com](https://www.vercel.com)
   - Créez un compte (gratuit)
   - Cliquez sur "Add New Project"
   - Importez votre dépôt Git ou glissez-déposez les fichiers
   - Vercel détectera automatiquement que c'est un site statique

2. **Via Vercel CLI** :
   ```bash
   # Installer Vercel CLI
   npm install -g vercel
   
   # Déployer
   vercel
   ```

### Option 3 : Hébergement partagé (cPanel, FTP, etc.)

1. **Via FTP** :
   - Connectez-vous à votre serveur FTP
   - Téléversez tous les fichiers dans le répertoire `public_html` ou `www`
   - Assurez-vous que `index.html` est à la racine
   - Accédez à votre domaine

2. **Via cPanel File Manager** :
   - Connectez-vous à cPanel
   - Ouvrez "File Manager"
   - Naviguez vers `public_html`
   - Téléversez tous les fichiers
   - Vérifiez que `index.html` est présent

### Option 4 : GitHub Pages (Gratuit)

1. Créez un dépôt GitHub
2. Poussez vos fichiers :
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/votre-username/votre-repo.git
   git push -u origin main
   ```
3. Allez dans Settings → Pages
4. Sélectionnez la branche `main` et le dossier `/ (root)`
5. Votre site sera disponible à `https://votre-username.github.io/votre-repo`

## 📁 Structure du Projet

```
restaurant-ifrane/
├── index.html          # Page principale HTML
├── styles.css          # Styles CSS
├── script.js           # JavaScript pour interactions
└── README.md           # Documentation
```

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS, Grid, Flexbox
- **JavaScript (Vanilla)** - Interactions et animations
- **SAWT IA Widget** - Agent vocal pour commandes

## ✨ Personnalisation

### Modifier le Menu

Éditez la section `<section id="menu">` dans `index.html` pour modifier les plats, prix et descriptions.

### Changer les Couleurs

Modifiez les variables CSS dans `styles.css` (section `:root`) :
```css
--primary-color: #d4a574;      /* Couleur principale */
--secondary-color: #2c3e50;    /* Couleur secondaire */
--accent-color: #e74c3c;       /* Couleur d'accent */
```

### Modifier le Nom du Restaurant

Remplacez "Restaurant Ifrane" dans `index.html` (rechercher et remplacer).

### Changer l'Agent ID SAWT IA

Si vous voulez utiliser un autre agent IA, modifiez l'`agent-id` dans la balise `<sawtia-widget>` :
```html
<sawtia-widget agent-id="VOTRE_AGENT_ID_ICI"></sawtia-widget>
```

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- Desktop (1200px+)
- Tablette (768px - 1199px)
- Mobile (< 768px)

## 🔍 SEO & Performance

- Meta tags optimisés
- Structure HTML sémantique
- Images optimisées (emojis légers)
- CSS minifié (optionnel pour production)
- Chargement rapide

## 🌐 Compatibilité Navigateurs

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📞 Support

Pour toute question concernant l'intégration SAWT IA, consultez la documentation officielle de SAWT IA.

## 📄 Licence

Ce projet est fourni tel quel pour utilisation dans un restaurant. Modifiez-le selon vos besoins.

---

**Fait avec ❤️ pour Restaurant Ifrane**
