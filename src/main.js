/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

async function prepareApp() {
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

const app = createApp(App)

registerPlugins(app)

prepareApp().then(() => {
  app.mount('#app')
});
