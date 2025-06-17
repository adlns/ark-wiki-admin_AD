module.exports = {
  title: 'ARK Wiki Admin',
  tagline: 'Commandes ARK en français',
  url: 'https://ark-wiki-admin.vercel.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/logo.png',
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        routeBasePath: '/',
        sidebarPath: require.resolve('./sidebars.js')
      },
    }],
  ],
};