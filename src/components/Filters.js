import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: none;
`

const Filters = () => (
  <Wrapper>
    <svg
      width="200"
      height="200"
      viewBox="0 0 220 220"
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter
        id="filter3"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="1 1.5"
          numOctaves="1"
          seed="1"
          stitchTiles="stitch"
          result="turbulence"
        />
      </filter>
    </svg>
  </Wrapper>
)

export default Filters
