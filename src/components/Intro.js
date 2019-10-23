import React from "react";

import ContentWrapper from "./ContentWrapper";
import ActionsWrapper from "./ActionsWrapper";
import LargeHeader from "./typography/LargeHeader";
import Paragraph from "./typography/Paragraph";

const Intro = props => {
  const { header, blurb, actions } = props;

  return (
    <ContentWrapper
      content={
        <>
          <LargeHeader tag="h1">{header}</LargeHeader>
          <Paragraph>{blurb}</Paragraph>
          <ActionsWrapper>{actions}</ActionsWrapper>
        </>
      }
    />
  );
};

export default Intro;
