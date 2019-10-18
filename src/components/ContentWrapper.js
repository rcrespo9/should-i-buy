import React from "react"
import styled from "styled-components"
import { modularScale } from "polished"

const StyledContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 75% 25%;
  column-gap: ${modularScale(0)};
  align-items: center;
`

const Figure = styled.figure`
  margin: 0;
`

const ContentWrapper = (props) => {
  const { content, icon } = props
  return (
    <StyledContentWrapper>
      <article>
        { content }
      </article>
      <Figure>{ icon }</Figure>
    </StyledContentWrapper>
  )
}

export default ContentWrapper;