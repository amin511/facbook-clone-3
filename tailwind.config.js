import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        "fb-greyBg": "#f0f2f5",
        "fb-btnBlue": "#1877f2",
        "fb-icon": "#BCC0Cf"
      },
      boxShadow: {
        "fb-shadow": "0px 10px 15px 6px rgba(0,0,0,0.1)"
      }
    },
  },

  plugins: [

  ],
}


