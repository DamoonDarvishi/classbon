import type { Preview } from "@storybook/react";

import "../src/app/globals.css";

const preview: Preview = {
  // https://storybook.js.org/addons/storybook-tailwind-dark-mode
  // globalTypes: {  
  //   darkMode: {
  //     defaultValue: true, // Enable dark mode by default on all stories
  //   },
  //   // Optional (Default: 'dark')
  //   className: {
  //     defaultValue: 'dark', // Set your custom dark mode class name
  //   },
  // },
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
