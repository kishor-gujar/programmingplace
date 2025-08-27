# Programming Place - Developer Website

A responsive developer website showcasing Android applications and developer information.

## Features

- **Responsive Design**: Optimized for mobile and desktop devices
- **Modern UI**: Clean, professional design with smooth animations
- **App Showcase**: Featured Android app with Google Play Store integration
- **About Section**: Developer information and skills
- **Smooth Navigation**: Sticky header with smooth scrolling

## Files Structure

```
programmingplace/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── app-ads.txt         # Google AdMob configuration
├── README.md           # This file
└── favicon.ico         # Website icon (optional)
```

## Deployment to GitHub Pages

### Method 1: Using GitHub Desktop

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and sign in
   - Click the "+" icon in the top right corner
   - Select "New repository"
   - Name it `programmingplace` (or your preferred name)
   - Make it public
   - Don't initialize with README (since we already have one)
   - Click "Create repository"

2. **Upload Files**:
   - Download and install [GitHub Desktop](https://desktop.github.com/)
   - Clone your repository to your local machine
   - Copy all the website files to the repository folder
   - In GitHub Desktop, you'll see the changes
   - Add a commit message like "Initial website commit"
   - Click "Commit to main"
   - Click "Push origin"

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click "Settings" tab
   - Scroll down to "Pages" section
   - Under "Source", select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
   - Your site will be available at `https://yourusername.github.io/programmingplace`

### Method 2: Using Command Line

1. **Initialize Git Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial website commit"
   ```

2. **Create GitHub Repository** (same as Method 1, step 1)

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/yourusername/programmingplace.git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages** (same as Method 1, step 3)

### Method 3: Direct Upload

1. **Create GitHub Repository** (same as Method 1, step 1)

2. **Upload Files**:
   - Go to your repository on GitHub
   - Click "Add file" → "Upload files"
   - Drag and drop all website files
   - Add commit message
   - Click "Commit changes"

3. **Enable GitHub Pages** (same as Method 1, step 3)

## Customization

### Update App Information
- Edit `index.html` to change app details, description, and features
- Replace the placeholder app icon URL with your actual app icon
- Update the Google Play Store link if needed

### Update Personal Information
- Modify the "About Me" section in `index.html`
- Update skills and technologies in the skills section
- Change the developer name "Programming Place" to your preferred name

### Styling
- Edit `styles.css` to customize colors, fonts, and layout
- The website uses the Inter font family for a modern look
- Color scheme uses purple gradients - you can change these to match your brand

### Add More Apps
- Duplicate the `.app-card` section in `index.html`
- Update the app details, icon, and download link
- Consider adding a grid layout in CSS for multiple apps

## Technical Details

- **HTML5**: Semantic markup with proper accessibility
- **CSS3**: Modern styling with Flexbox and Grid
- **JavaScript**: Vanilla JS for interactivity
- **Responsive**: Mobile-first design approach
- **Performance**: Optimized for fast loading
- **SEO**: Proper meta tags and structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

© 2025 Programming Place. All rights reserved.

---

**Note**: After deployment, it may take a few minutes for your website to be available. The URL will be in the format: `https://yourusername.github.io/repositoryname`
