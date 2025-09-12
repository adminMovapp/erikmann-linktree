// Configuración del sitio en JavaScript (en lugar de JSON)
export const siteConfig = {
   site: {
      name: 'Erik Mann',
      title: '',
      description: ' ',
      keywords: 'linktree, erikmann ',
      author: 'LinkTree - ErikMann',
      locale: 'es_MX',
      language: 'es',
   },

   assets: {
      logo: '/images/img-erikmann.jpg',
      favicon: '/images/ico-movapp.ico',
   },
   url: 'https://linktree-erikmann-netlify.app', // URL única aquí

   links: [
      { name: 'Youtube', url: 'https://www.youtube.com/@erikmanndp' },
      { name: 'Instagram', url: 'https://www.instagram.com/erikmanndp' },
      { name: 'Facebook', url: 'https://www.facebook.com/erikmanndp' },
      { name: 'TikTok', url: 'https://www.tiktok.com/@erikmannoficial' },
      // { name: 'Spotify', url: 'https://open.spotify.com/show/0rd9N6Xcs0MgDE2YyTKvzZ' },
   ],

   spotify: {
      url: 'https://open.spotify.com/show/0rd9N6Xcs0MgDE2YyTKvzZ',
   },
};
