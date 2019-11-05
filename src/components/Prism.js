import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Highlight, { defaultProps } from "prism-react-renderer"
import theme from "prism-react-renderer/themes/nightOwlLight"

const LineNumber = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

const Pre = styled.span`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  white-space: pre;
  display: block;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`

const Line = styled.span`
  display: block;
`

const Prism = ({ children, className }) => {
  const language = className.replace(/language-/, "")

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        const multiline = tokens.length > 1
        multiline && tokens.pop()

        return (
          <Pre
            className={`${className}`}
            style={{ ...style, padding: "0.655rem" }}
          >
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                {multiline && <LineNumber>{i + 1}</LineNumber>}
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </Line>
            ))}
          </Pre>
        )
      }}
    </Highlight>
  )
}

Prism.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
}

Prism.defaultProps = {
  className: "js",
}

export default Prism
