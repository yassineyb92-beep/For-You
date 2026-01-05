# 📤 Push to GitHub using GitHub Desktop - Step by Step

## ✅ Step 1: Download GitHub Desktop

1. Go to: **https://desktop.github.com**
2. Click **"Download for macOS"**
3. Open the downloaded file (GitHubDesktop.dmg)
4. Drag GitHub Desktop to Applications folder
5. Open GitHub Desktop from Applications

---

## ✅ Step 2: Sign In to GitHub

1. When GitHub Desktop opens, click **"Sign in to GitHub.com"**
2. Enter your GitHub credentials:
   - Username: `yassineyb92-beep`
   - Password: (your GitHub password)
3. Click **"Sign in"**
4. Authorize GitHub Desktop if prompted

---

## ✅ Step 3: Add Your Local Repository

1. In GitHub Desktop, click **"File"** (top menu) → **"Add Local Repository"**
2. Click the **"Choose..."** button
3. Navigate to and select this folder:
   ```
   /Users/yassinbouabdellah/cursor F
   ```
   *(I've opened this folder in Finder for you - you can drag it into the dialog)*
4. You should see: **"This directory appears to be a Git repository"**
5. Click **"Add repository"**

---

## ✅ Step 4: Push to GitHub

1. You should now see all your files in GitHub Desktop
2. At the top, you'll see:
   - **"Publish repository"** button (if it's the first time)
   - OR **"Push origin"** button (if already connected)
3. Click **"Push origin"** (or "Publish repository")
4. Wait a few seconds - it will push all files including `vercel.json`

---

## ✅ Step 5: Verify on GitHub

1. Go to: **https://github.com/yassineyb92-beep/For-You**
2. You should see all your files:
   - ✅ `index.html`
   - ✅ `styles.css`
   - ✅ `script.js`
   - ✅ `vercel.json` ← **This is the important one!**
   - ✅ `README.md`
   - And other files

---

## ✅ Step 6: Vercel Will Auto-Redeploy

Once the files are pushed to GitHub:
1. Vercel will automatically detect the changes
2. It will start a new deployment (you'll see it in Vercel dashboard)
3. Wait 1-2 minutes for deployment to complete
4. Your site should work! 🎉

---

## 🎯 What to Check After Deployment

1. Go to your Vercel dashboard
2. Check the new deployment
3. Click on the deployment URL
4. Your restaurant website should load correctly (no more 404!)

---

## ❓ Troubleshooting

**If you see "Repository already exists":**
- The folder is already connected. Just click **"Push origin"** button.

**If authentication fails:**
- Make sure you're signed in to GitHub Desktop
- Check your GitHub account settings → Applications → Authorized apps

**If push fails:**
- Make sure you have write access to the repository
- Check your internet connection

---

**Need help?** Let me know what step you're on!
