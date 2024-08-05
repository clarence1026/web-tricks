import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/web-tricks/",
  title: "Web Tricks",
  description: "A VitePress Site",
  head: [["link", { ref: "icon", href: "/favicon.ico" }]],
  themeConfig: {
    logo: "logo.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/list" },
    ],

    sidebar: [
      {
        text: "案例汇总",
        items: [{ text: "按钮", link: "/button" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/clarence1026" }],
  },
});
