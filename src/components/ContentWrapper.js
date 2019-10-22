import React from "react"
import styled from "styled-components"
import { modularScale } from "polished"

const StyledContentWrapper = styled.article`
`

const ContentWrapper = (props) => {
  const { content } = props
  return (
    <StyledContentWrapper>
      { content }
    </StyledContentWrapper>
  )
}

export default ContentWrapper;