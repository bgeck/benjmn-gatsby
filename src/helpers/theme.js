const theme = {
  common: {
    padding: "0.665rem",

    shadowDown: "0 1px 3px 0 rgba(0, 0, 0, .04), 0 0 0 1px rgba(0, 0, 0, .04)",
    shadowUp: "0 5px 3px 0 rgba(0, 0, 0, .16), 0 0 0 1px rgba(0, 0, 0, .04)",

    /**
     * Typography
     */
    font: "sans-serif",
    letterSpacing: "0.0063rem",
    fontH1: "2rem",
    fontH2: "1.5rem",
    fontH3: "1.25rem",
    fontH4: "1rem",
    fontH5: "1rem",
    fontH6: "1rem",
    fontSmall: "0.68rem",
  },

  dark: {
    colorDark: "#f7f7f7",
    colorMid: "#d5d5d6",
    colorLight: "#f7f7f7",
    background: "#16161d",
    backgroundHeader: "#16161d",
    backgroundContent: "#16161d",
    backgroundFooter: "#16161d",
  },

  light: {
    colorDark: "#16161d",
    colorMid: "#d5d5d6",
    colorLight: "#f7f7f7",
    background: "transparent",
    backgroundHeader:
      "linear-gradient(80deg,#fff7e06b 13vw,rgba(255,255,255,0) 86.5vw)",
    backgroundContent: "transparent",
    backgroundFooter: "transparent",
  },

  evening: {
    colorDark: "#16161d",
    colorMid: "#d5d5d6",
    colorLight: "#fff",
    backgroundHeader:
      "linear-gradient(80deg, rgba(163, 200, 255, .86), rgba(217, 95, 115, .76), rgba(101, 53, 119, .86))",
    backgroundContent:
      "linear-gradient(80deg, rgba(163, 200, 255, .96), rgba(217, 95, 115, .96), rgba(101, 53, 119, .96))",
    backgroundFooter:
      "linear-gradient(80deg, rgba(163, 200, 255, .88), rgba(217, 95, 115, .78), rgba(101, 53, 119, .75)), rgba(0,0,0,0.375)",
  },
}

export default theme
