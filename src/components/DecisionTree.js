import React, { useState } from 'react';

import Intro from './Intro'
import NodeItem from './NodeItem'

const DecisionTree = () => {
  const [activeNode, setActiveNode] = useState(null)
  const [nodes, setNodes] = useState(null)

  return (
    <div>
      <Intro />
    </div>
  )
}

export default DecisionTree