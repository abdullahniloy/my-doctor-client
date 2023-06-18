/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  daisyui: {
    themes: [ "pastel"],
    primary:[ "#19D3AE"
    ],
    secondary:["#19D3AE"]
  },
  plugins: [require("daisyui")],
}

