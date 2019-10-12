import React, { useState, useEffect } from 'react'
import nodesData from '../nodes.json'

import Intro from './Intro'
import NodeItem from './NodeItem'

const DecisionTree = () => {
  const [activeNode, setActiveNode] = useState(null)
  const [nodes, setNodes] = useState(null)

  useEffect(() => {
    setNodes(nodesData)
  })

  return (
    <div>
      <Intro />
    </div>
  )
}

export default DecisionTree