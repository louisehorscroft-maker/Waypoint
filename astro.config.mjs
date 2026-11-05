// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  output: 'static',
  // The live address. It turns on canonical links, og:url, the social sharing image and the URL
  // in the structured data. If the site ends up on www, change it to 'https://www.waypoint-ap.co.uk'.
  site: 'https://waypoint-ap.co.uk',
});
