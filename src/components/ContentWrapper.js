import React from "react";

const ContentWrapper = (props) => {
  const { children } = props
  return (
    <article>
      {children}
    </article>
  )
}

export default ContentWrapper;