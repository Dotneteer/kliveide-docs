const fs = require('fs');
const path = require('path');

const z80Language = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'z80-assembly.tmLanguage.json'), 'utf8'));

const customTheme = {
  dark: {
    colors: {
      'editor.background': '#1E1E1E',
      'editor.foreground': '#D4D4D4',
    },
    settings: [
      {
        scope: ['comment'],
        settings: {
          foreground: '#6a9955',
        },
      },
      {
        scope: ['string'],
        settings: {
          foreground: '#CE9178',
        },
      },
      {
        scope: ['constant.numeric', 'constant.language.boolean'],
        settings: {
          foreground: '#B5CEA8',
        },
      },
      {
        scope: ['keyword.control.z80-klive', 'keyword.control.statement.z80-klive'],
        settings: {
          foreground: '#569cd6',
          fontStyle: 'bold'
        },
      },
      {
        scope: ['keyword.control.pragma.z80-klive', 'keyword.control.directive.z80-klive'],
        settings: {
            foreground: '#569CD6',
        }
      },
      {
        scope: ['variable.language.register.z80-klive', 'variable.language.condition.z80-klive'],
        settings: {
          foreground: '#9CDCFE',
        },
      },
      {
        scope: ['support.function.z80-klive'],
        settings: {
          foreground: '#DCDCAA',
        },
      },
      {
        scope: ['keyword.operator.z80-klive'],
        settings: {
            foreground: '#D4D4D4'
        }
      },
      {
        scope: ['entity.name.function.z80-klive'],
        settings: {
            foreground: '#4EC9B0'
        }
      },
      {
        scope: ['variable.parameter.macro.z80-klive'],
        settings: {
            foreground: '#c586c0',
            fontStyle: 'italic'
        }
      }
    ],
  },
  light: {
    colors: {
        'editor.background': '#FFFFFF',
        'editor.foreground': '#000000',
    },
    settings: [
        {
            scope: ['comment'],
            settings: {
              foreground: '#008000',
            },
          },
          {
            scope: ['string'],
            settings: {
              foreground: '#A31515',
            },
          },
          {
            scope: ['constant.numeric', 'constant.language.boolean'],
            settings: {
              foreground: '#098658',
            },
          },
          {
            scope: ['keyword.control.z80-klive', 'keyword.control.statement.z80-klive'],
            settings: {
              foreground: '#AF00DB',
              fontStyle: 'bold'
            },
          },
          {
            scope: ['keyword.control.pragma.z80-klive', 'keyword.control.directive.z80-klive'],
            settings: {
                foreground: '#0000FF',
            }
          },
          {
            scope: ['variable.language.register.z80-klive', 'variable.language.condition.z80-klive'],
            settings: {
              foreground: '#267f99',
            },
          },
          {
            scope: ['support.function.z80-klive'],
            settings: {
              foreground: '#795E26',
            },
          },
          {
            scope: ['keyword.operator.z80-klive'],
            settings: {
                foreground: '#000000'
            }
          },
          {
            scope: ['entity.name.function.z80-klive'],
            settings: {
                foreground: '#795E26'
            }
          },
          {
            scope: ['variable.parameter.macro.z80-klive'],
            settings: {
                foreground: '#AF00DB',
                fontStyle: 'italic'
            }
          }
    ],
  },
};

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [],
    rehypePrettyCodeOptions: {
      theme: customTheme,
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
