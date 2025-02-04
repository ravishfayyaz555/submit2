import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      
      colors:{
        accent:"#EC2D9E",
      },
      container:{
        center:true,
        padding:"15px",
      },
    },
  },
  plugins: [],
} satisfies Config;
