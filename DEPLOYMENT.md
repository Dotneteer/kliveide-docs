# GitHub Pages Setup Instructions

This repository is configured to automatically deploy to GitHub Pages when changes are merged to the main branch.

## Setup Steps

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository settings
   - Navigate to "Pages" in the left sidebar
   - Under "Source", select "GitHub Actions"

2. **Automatic Deployment:**
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your documentation
   - Every push to the `main` branch triggers a new deployment
   - The site will be available at: https://dotneteer.github.io/kliveide/

## Manual Testing

To test the build locally:

```bash
npm run export
```

This creates the static site in the `out/` directory.

## Configuration Notes

- The site is configured with `basePath: '/kliveide'` for GitHub Pages
- Static export is enabled with `output: 'export'`
- Images are unoptimized for static hosting
- The `.nojekyll` file prevents Jekyll processing

## Troubleshooting

If deployment fails:

1. Check the Actions tab in your GitHub repository for build errors
2. Ensure all MDX files have proper imports for custom components
3. Verify that all images exist in the `public/` directory
4. Test the build locally with `npm run export`
