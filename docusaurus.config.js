module.exports = {
  title: 'ARK Wiki Admin',
  tagline: 'Commandes admin ARK en français',
  url: 'https://ark-wiki-admin-ad.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.png',
  organizationName: 'adlns',
  projectName: 'ark-wiki-admin_AD',
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        routeBasePath: '/'
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      }
    }]
  ]
};