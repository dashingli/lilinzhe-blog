import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  { text: "主页", icon: "zhuye", link: "/" },
  { text: "笔记", icon: "biji", link: "/posts/笔记" },
  {
    text: "项目",
    icon: "xiangmu",
    children: ["/posts/项目/医疗系统"],
  },
  {
    text: "关于我",
    icon: "gerenzhongxin-zhihui",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
