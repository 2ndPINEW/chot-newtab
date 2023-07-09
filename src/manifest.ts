import { defineManifest } from '@crxjs/vite-plugin';
import { version } from '../package.json';

// NOTE: do not include src/ in paths,
// vite root folder: src, public folder: public (based on the project root)
// @see ../vite.config.ts#L16

const manifest = defineManifest(async (env) => ({
  manifest_version: 3,
  name: `${env.mode === 'development' ? '[Dev] ' : ''}Chot NewTab`,
  description: 'Chot NewTab',
  version,
  host_permissions: ['https://contributes.obake.land/*', 'https://api.open-meteo.com/*'],
  options_ui: {
    page: 'options/options.html',
    open_in_tab: true,
  },
  web_accessible_resources: [
    {
      resources: ['options/options.html'],
      matches: ['<all_urls>'],
    },
  ],
  icons: {
    '128': 'images/128.png',
  },
  permissions: ['storage'],
  chrome_url_overrides: {
    newtab: 'newtab/newtab.html',
  },
}));

export default manifest;
