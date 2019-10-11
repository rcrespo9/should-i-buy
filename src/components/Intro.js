import React from "react";

import ContentWrapper from './ContentWrapper'
import LargeHeader from './typography/LargeHeader'
import Paragraph from './typography/Paragraph'
import Button from './Button'

const Intro = () => {
  return (
    <ContentWrapper>
      <LargeHeader text="Should I Buy This?" />
      <Paragraph>
        Some text.
      </Paragraph>
      <Button text="Get Started" />
    </ContentWrapper>
  )
}

export default Intro