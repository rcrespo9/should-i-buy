import React, { useState } from 'react';

import Intro from './Intro'
import Question from './Question'

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0)

  return (
    <div>
      <Intro />
    </div>
  )
}

export default Quiz