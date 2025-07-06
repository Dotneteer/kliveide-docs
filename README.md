# KliveIDE Documentation

This is the official documentation site for KliveIDE, built with [Nextra](https://nextra.site/).

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

### Project Structure

```
kliveide-docs/
├── pages/              # Documentation pages
│   ├── index.mdx       # Homepage
│   ├── getting-started.mdx
│   ├── user-guide/     # User guide section
│   ├── development/    # Development section
│   └── api-reference/  # API documentation
├── theme.config.tsx    # Nextra theme configuration
├── next.config.js      # Next.js configuration
└── package.json        # Dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## Deployment

This site can be deployed to:
- [Vercel](https://vercel.com) (recommended)
- [Netlify](https://netlify.com)
- Any static hosting service

For Vercel deployment, simply connect your GitHub repository and it will automatically build and deploy on every commit.

## License

MIT License - see the [LICENSE](LICENSE) file for details.
