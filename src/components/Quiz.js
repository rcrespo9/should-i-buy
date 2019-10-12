import React, { useState } from 'react';

import Intro from './Intro'
import Question from './Question'

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(null)

  return (
    <div>
      <Intro />
    </div>
  )
}

export default Quiz