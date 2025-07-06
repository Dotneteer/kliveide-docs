import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <img src="/logo.svg" alt="KliveIDE" height="32" />
      <span style={{marginLeft: 12, fontWeight: "bold", fontSize: "2em"}}>Klive IDE</span>
    </div>
  ),
  project: {
    link: 'https://github.com/dotneteer/klive',
  },
  docsRepositoryBase: 'https://github.com/dotneteer/klive',
  footer: {
    text: 'KliveIDE Documentation © 2025',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – KliveIDE'
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="KliveIDE Documentation" />
      <meta property="og:description" content="The comprehensive guide to KliveIDE" />
    </>
  ),
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  toc: {
    backToTop: true
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  search: {
    placeholder: 'Search documentation...'
  },
  primaryHue: 200,
  primarySaturation: 100,
}

export default config
