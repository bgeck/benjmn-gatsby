import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  display: block;
`

const VideoFrame = styled.iframe`
  display: block;
`

const Video = ({ url, title }) => (
  <Wrapper className="video">
    <VideoFrame
      src={url}
      title={title}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </Wrapper>
)
export default Video
