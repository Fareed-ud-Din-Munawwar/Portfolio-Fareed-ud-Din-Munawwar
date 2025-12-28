# Deployment Guide for Portfolio

This guide will help you deploy your portfolio application to GitHub.

## Option 1: Deploy to GitHub Pages (Recommended for Static Frontend)

GitHub Pages is perfect for hosting your React portfolio frontend. The deployment is automated via GitHub Actions.

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `portfolio` or `fareed-portfolio`)
3. **Do NOT** initialize with README, .gitignore, or license (since you already have these)
4. Copy the repository URL

### Step 2: Add GitHub Remote

Run these commands in your terminal:

```bash
# Add GitHub as a remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Or if you want to replace the existing remote:
git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### Step 3: Commit and Push Your Code

```bash
# Add all changes
git add .

# Commit your changes
git commit -m "Initial commit: Portfolio application"

# Push to GitHub
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically deploy your site on the next push

### Step 5: Access Your Portfolio

After the GitHub Actions workflow completes (check the **Actions** tab), your portfolio will be available at:
- `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

Or if you're using a custom domain or repository name matching your username:
- `https://YOUR_USERNAME.github.io/`

## Option 2: Deploy Full-Stack Application

If you need the backend server functionality, consider these alternatives:

### Option 2a: Vercel (Full-Stack)

1. Push your code to GitHub (follow Steps 1-3 above)
2. Go to [Vercel](https://vercel.com) and sign in with GitHub
3. Import your repository
4. Vercel will automatically detect your project structure
5. Configure build settings if needed
6. Deploy!

### Option 2b: Netlify (Full-Stack)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Select your repository
5. Configure build command: `npm run build`
6. Deploy!

### Option 2c: Railway or Render (Backend Hosting)

For hosting the full-stack app with backend:
1. Push your code to GitHub
2. Sign up at [Railway](https://railway.app) or [Render](https://render.com)
3. Connect your GitHub repository
4. Configure environment variables (database, etc.)
5. Deploy!

## Manual Build and Test

To test the build locally before deploying:

```bash
# Build only the client (for GitHub Pages)
npm run build:client

# The built files will be in dist/public/
# You can test them with a static server:
npx serve dist/public
```

## Troubleshooting

### GitHub Pages Shows 404
- Check that GitHub Actions workflow completed successfully
- Verify the build output is in `dist/public`
- Ensure GitHub Pages is set to use "GitHub Actions" as the source

### Assets Not Loading
- If deploying to a subdirectory (e.g., `/portfolio`), update `vite.config.ts` base path
- Check that all asset paths are relative

### Build Fails
- Check Node.js version matches (project uses Node 20)
- Ensure all dependencies are in `package.json`
- Review GitHub Actions logs for specific errors

## Updating Your Portfolio

After making changes:
```bash
git add .
git commit -m "Update portfolio"
git push
```

The GitHub Actions workflow will automatically rebuild and deploy!

