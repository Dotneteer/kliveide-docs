const fs = require('fs');
const path = require('path');

const z80Language = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'z80-assembly.tmLanguage.json'), 'utf8'));

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
    rehypePrettyCodeOptions: {
      getHighlighter: (options) => {
        return require('shiki').getHighlighter({
          ...options,
          langs: [
            {
              id: 'z80-klive',
              scopeName: 'source.z80-klive',
              grammar: z80Language,
              aliases: ['z80'],
            },
          ],
        });
      },
    },
  },
})

module.exports = withNextra({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
