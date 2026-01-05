# 📤 How to Push vercel.json to GitHub

You have two options. Choose the one that's easier for you:

---

## ✅ Option 1: Using Git Commands (Terminal)

**Use this if:** You're comfortable with terminal/command line

### Step 1: Check if you have a GitHub repository

Do you already have a GitHub repository created? 
- If **YES** → Go to Step 2
- If **NO** → First create one on github.com (click "+" → "New repository")

### Step 2: Initialize Git (if not done)

Open Terminal and run:

```bash
cd "/Users/yassinbouabdellah/cursor F"
git init
```

### Step 3: Add all files

```bash
git add .
```

### Step 4: Make your first commit

```bash
git commit -m "Initial commit - Restaurant Ifrane website"
```

### Step 5: Connect to your GitHub repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**Example:** If your GitHub username is `john` and repo is `restaurant-ifrane`:
```bash
git remote add origin https://github.com/john/restaurant-ifrane.git
git branch -M main
git push -u origin main
```

### Step 6: If you already had files in GitHub

If you already pushed files before, just add and push the new file:

```bash
git add vercel.json
git commit -m "Add Vercel configuration"
git push
```

---

## ✅ Option 2: Using GitHub Desktop (Easier - No commands!)

**Use this if:** You prefer a visual interface (recommended for beginners)

### Step 1: Download GitHub Desktop

1. Go to [desktop.github.com](https://desktop.github.com)
2. Download and install GitHub Desktop
3. Sign in with your GitHub account

### Step 2: Add your local folder

1. Open GitHub Desktop
2. Click **"File"** → **"Add Local Repository"**
3. Click **"Choose..."**
4. Navigate to and select the folder: `/Users/yassinbouabdellah/cursor F`
5. Click **"Add repository"**

### Step 3: If repository doesn't exist on GitHub yet

1. Click **"Publish repository"** button (top right)
2. Make sure **"Keep this code private"** is UNCHECKED (unless you want it private)
3. Click **"Publish repository"**

### Step 4: If repository already exists on GitHub

1. Click **"Repository"** → **"Repository Settings"**
2. Click **"Remote"** tab
3. Enter your GitHub repository URL (e.g., `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git`)
4. Click **"Save"**

### Step 5: Commit and push

1. You should see `vercel.json` in the "Changes" list on the left
2. Write a commit message: "Add Vercel configuration"
3. Click **"Commit to main"**
4. Click **"Push origin"** (or "Publish branch" if it's the first time)

---

## 🎯 Which one should I use?

- **GitHub Desktop**: Easier, visual, no commands to remember
- **Git commands**: Faster if you know them, more control

**My recommendation:** Use **GitHub Desktop** if this is your first time - it's much easier!

---

## ❓ Don't have a GitHub repository yet?

1. Go to [github.com](https://github.com)
2. Click the **"+"** icon (top right) → **"New repository"**
3. Name it: `restaurant-ifrane` (or your choice)
4. Choose **Public**
5. **DON'T** check "Add a README file" (you already have files)
6. Click **"Create repository"**
7. Then follow Option 1 or Option 2 above

---

Need help with a specific step? Let me know!
