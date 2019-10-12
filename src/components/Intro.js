import React from "react";

import ContentWrapper from './ContentWrapper'
import ActionsWrapper from './ActionsWrapper'
import LargeHeader from './typography/LargeHeader'
import Paragraph from './typography/Paragraph'
import Button from './Button'

const Intro = () => {
  return (
    <ContentWrapper>
      <LargeHeader tag="h1">Should I Buy This?</LargeHeader>
      <Paragraph>
        Decision support tools are an effective way to help prevent overspending. Whenever you're tempted to pull out your wallet, go through this questionnaire first. By adding this step to your purchasing process, you can retrain yourself to think about every purchase before you make it.
      </Paragraph>
      <ActionsWrapper>
        <Button>Get Started</Button>
      </ActionsWrapper>
    </ContentWrapper>
  )
}

export default Intro