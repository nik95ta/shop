module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./features/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-50": "#E0E0E0",
        "gray-100": "#f4f4f4",
        primary: "#1A43D3",
        "gray-200": "#757575",
        "gray-300": "#E1E1E9",
        "gray-400": "#A0A0B3",
        error: "#B02626",
      },
      width: {
        "315": "20rem",
      },
      borderRadius: {
        large: "20px",
      },
    },
  },
  plugins: [],
};
