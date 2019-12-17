import React from 'react'
import styled from 'styled-components'

const ImageStyled = styled.Image`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 10;
`

function Image ({ image, ...rest }) {
  let source

  if (image && image.url) {
    source = { uri: image.url }
  } else {
    source = require('../../assets/images/placeholder.png')
  }

  return <ImageStyled source={source} {...rest} />
}

export default Image
