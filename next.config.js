const fs = require('fs');
const path = require('path');

const z80Language = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'z80-assembly.tmLanguage.json'), 'utf8'));

const customTheme = {
  dark: {
    colors: {
      'editor.background': '#1E1E1E',
      'editor.foreground': '#a4a4a4',
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
          foreground: '#DC143C',
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
            foreground: '#a4a4a4'
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
      },
      // JavaScript and general syntax highlighting
      {
        scope: ['keyword.control', 'keyword.operator', 'keyword.other', 'keyword.declaration', 'storage.type'],
        settings: {
          foreground: '#4A9EFF',
          fontStyle: 'bold'
        }
      },
      {
        scope: ['variable.language', 'variable.other.constant'],
        settings: {
          foreground: '#4A9EFF'
        }
      },
      {
        scope: ['entity.name.function', 'support.function'],
        settings: {
          foreground: '#FF8C42'
        }
      },
      {
        scope: ['entity.name.type', 'entity.name.class'],
        settings: {
          foreground: '#4EC9B0'
        }
      },
      {
        scope: ['variable.parameter', 'variable.other.readwrite'],
        settings: {
          foreground: '#9CDCFE'
        }
      },
      {
        scope: ['punctuation.definition.template-expression'],
        settings: {
          foreground: '#4A9EFF'
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
              foreground: '#8B0000',
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
          },
          // JavaScript and general syntax highlighting
          {
            scope: ['keyword.control', 'keyword.operator', 'keyword.other', 'keyword.declaration', 'storage.type'],
            settings: {
              foreground: '#7C3AED',
              fontStyle: 'bold'
            }
          },
          {
            scope: ['variable.language', 'variable.other.constant'],
            settings: {
              foreground: '#0066CC'
            }
          },
          {
            scope: ['entity.name.function', 'support.function'],
            settings: {
              foreground: '#D2691E'
            }
          },
          {
            scope: ['entity.name.type', 'entity.name.class'],
            settings: {
              foreground: '#267f99'
            }
          },
          {
            scope: ['variable.parameter', 'variable.other.readwrite'],
            settings: {
              foreground: '#001080'
            }
          },
          {
            scope: ['punctuation.definition.template-expression'],
            settings: {
              foreground: '#7C3AED'
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
            'javascript',
            'typescript',
            'json',
            'markdown',
            'html',
            'css',
            'bash',
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
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/kliveide' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/kliveide/' : '',
})

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
