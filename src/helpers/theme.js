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
    fontSmall: "0.78rem",
  },

  dark: {
    colorDark: "#f7f7f7",
    colorLight: "#f7f7f7",
    background: "#16161d",
    backgroundHeader: "#16161d",
    backgroundContent: "#16161d",
    backgroundFooter: "#16161d",
  },

  light: {
    colorDark: "#16161d",
    colorLight: "#16161d",
    background:
      "linear-gradient(11deg,#f7f7f7 84%,#5a30304d 90%),linear-gradient(-10deg,#7c4480 84%,#3bb7ff 91%)",
    backgroundHeader:
      "linear-gradient(80deg, #f7f7f7 23vw, rgba(0,0,0,0) 86.5vw)",
    backgroundContent: "transparent",
    backgroundFooter: "transparent",
  },

  evening: {
    colorDark: "#16161d",
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
