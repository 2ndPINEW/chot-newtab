import { defineManifest } from '@crxjs/vite-plugin';
import { version } from '../package.json';

// NOTE: do not include src/ in paths,
// vite root folder: src, public folder: public (based on the project root)
// @see ../vite.config.ts#L16

const manifest = defineManifest(async (env) => ({
  manifest_version: 3,
  name: `${env.mode === 'development' ? '[Dev] ' : ''}Browser Extension TypeScript & React Starter`,
  description: 'Browser Extension, TypeScript, React',
  version,
  host_permissions: ['<all_urls>'],
  options_ui: {
    page: 'options/options.html',
    open_in_tab: true,
  },
  icons: {
    '128': 'images/128.png',
  },
  permissions: ['storage'],
  chrome_url_overrides: {
    newtab: 'newtab/newtab.html',
  },
}));

export default manifest;
