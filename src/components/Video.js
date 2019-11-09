import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: ${props => props.theme.colorLight};
`

const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const Video = ({ type, url }) => {
  return (
    <Wrapper className="video">
      {type === "youtube" && (
        <VideoFrame
          src={`https://www.youtube-nocookie.com/embed/${url}`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          allowFullScreen
        />
      )}
    </Wrapper>
  )
}
export default Video
