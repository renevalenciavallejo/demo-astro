const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", ...defaultTheme.fontFamily.sans],
        open_sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        cobalt_blue_600: "#0054ff",
        cobalt_blue_500: "#3e7dff",
        cobalt_blue_400: "#518aff",
        cobalt_blue_300: "#95b8ff",
        cobalt_blue_200: "#d6eeff",
        cobalt_blue_100: "#ebf7ff",
        cobalt_gray_000: "#edf2f5",
        shadow_gray_800: "#161616",
        shadow_gray_500: "#414141",
        shadow_gray_300: "#777777",
        shadow_gray_100: "#eeeeee",
        glory_green_600: "#b2e100",
        glory_green_400: "#caff00",
        glory_green_000: "#efffb4",
        customYellow: "#caff00",
        customPink: "#ffc3f5",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")],
};
