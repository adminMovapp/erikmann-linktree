// Configuración del sitio en JavaScript (en lugar de JSON)
export const siteConfig = {
   site: {
      name: 'Erik Mann',
      title: '',
      description: 'Lider de Movapp, Creador de contenido',
      description2: 'Y de El Hack vs Montadeudas.',
      description3: 'Animal lover y TechFan.',

      keywords: 'linktree, erikmann ',
      author: 'LinkTree - ErikMann',
      locale: 'es_MX',
      language: 'es',
   },

   assets: {
      logo: '/images/img-erikmann.jpg',
      rostro: '/images/Erik-Perfil-2.png',

      favicon: '/images/ico-erikmann.ico',
      background: '/images/Fondo_linktree.jpg',
   },
   url: 'https://linktree.erikmann.mx',
   links: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/erikmann-movapp', icon: 'FaLinkedin' },
      { name: 'Youtube', url: 'https://www.youtube.com/@erikmanndp', icon: 'FaYoutube' },
      { name: 'Instagram', url: 'https://www.instagram.com/erikmanndp', icon: 'FaInstagram' },
      { name: 'Facebook', url: 'https://www.facebook.com/erikmanndp', icon: 'FaFacebook' },
      { name: 'TikTok', url: 'https://www.tiktok.com/@erikmannoficial', icon: 'FaTiktok' },
      { name: 'Twitch', url: 'https://www.twitch.tv/erikmann89', icon: 'FaTwitch' },
      { name: 'Threads', url: 'https://www.threads.net/@erikmanndp', icon: 'SiThreads' },
      { name: 'X', url: 'https://x.com/erikmanndp', icon: 'SiX' },
      // { name: 'Spotify', url: 'https://open.spotify.com/show/0rd9N6Xcs0MgDE2YyTKvzZ', icon: 'FaSpotify' },
   ],

   apps: [
      {
         store: 'Google Play',
         label: 'Disponible en',
         url: 'https://play.google.com/store/apps/details?id=com.movapp.mobile&hl=es_MX&referrer=utm_source%3Dwebsite%26utm_medium%3Dorganic%26utm_campaign%3Dsite_download',
         icon: 'FaGooglePlay',
      },
      {
         store: 'App Store',
         label: 'Descárgala en',
         url: 'https://apps.apple.com/mx/app/movapp-by-erik-mann/id6755009066?ct=website_download',
         icon: 'FaApple',
      },
   ],

   website: {
      name: 'Web',
      url: 'https://movapp.org/',
   },

   spotify: {
      url: 'https://open.spotify.com/show/0rd9N6Xcs0MgDE2YyTKvzZ',
   },
};
