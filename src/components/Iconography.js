import React from 'react'
import styled from 'styled-components'

const SVGContainer = styled.svg.attrs(props => ({
  "aria-hidden": "true",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}))`
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
`;

const Iconography = () => {
  return (
    <SVGContainer>
      <defs>
        <symbol id="icon-radio_button_checked" viewBox="0 0 24 24">
          <title>radio_button_checked</title>
          <path d="M12 20.016c4.406 0 8.016-3.609 8.016-8.016s-3.609-8.016-8.016-8.016-8.016 3.609-8.016 8.016 3.609 8.016 8.016 8.016zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984zM12 6.984c2.766 0 5.016 2.25 5.016 5.016s-2.25 5.016-5.016 5.016-5.016-2.25-5.016-5.016 2.25-5.016 5.016-5.016z"></path>
        </symbol>
        <symbol id="icon-radio_button_unchecked" viewBox="0 0 24 24">
          <title>radio_button_unchecked</title>
          <path d="M12 20.016c4.406 0 8.016-3.609 8.016-8.016s-3.609-8.016-8.016-8.016-8.016 3.609-8.016 8.016 3.609 8.016 8.016 8.016zM12 2.016c5.531 0 9.984 4.453 9.984 9.984s-4.453 9.984-9.984 9.984-9.984-4.453-9.984-9.984 4.453-9.984 9.984-9.984z"></path>
        </symbol>
        <symbol id="icon-navigate_next" viewBox="0 0 24 24">
          <title>navigate_next</title>
          <path d="M9.984 6l6 6-6 6-1.406-1.406 4.594-4.594-4.594-4.594z"></path>
        </symbol>
        <symbol id="icon-navigate_before" viewBox="0 0 24 24">
          <title>navigate_before</title>
          <path d="M15.422 7.406l-4.594 4.594 4.594 4.594-1.406 1.406-6-6 6-6z"></path>
        </symbol>
      </defs>
    </SVGContainer>
  );
}

export default Iconography