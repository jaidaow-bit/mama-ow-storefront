module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        pbj: {
          beige: "#E6C188",
          nutty: "#93551E",
          deep: "#7B221A",
          grey: "#D8D8D1",
          white: "#FEFEF7"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
}
