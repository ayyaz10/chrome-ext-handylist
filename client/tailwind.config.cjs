module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        border: "rgba(var(--border))",
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        text: "rgba(var(--text))",
        hoverText: "rgba(var(--hover-text))",
        hoverBackground: "rgba(var(--hover-background))",
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
      },
    },
  },
  plugins: [],
};
