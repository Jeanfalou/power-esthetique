import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0A66FF",
        brandPink: "#FF4DB8",
      },
    },
  },
  plugins: [],
};
export default config;
