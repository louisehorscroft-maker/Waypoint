// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  output: 'static',
  // BEFORE LAUNCH: set this to the live address, e.g. 'https://www.waypoint.example'. It turns on
  // canonical links, og:url, the social sharing image and the URL in the structured data.
  // site: 'https://',
});
