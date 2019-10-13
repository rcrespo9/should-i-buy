import React, { useState, useEffect } from 'react'
import styled from "styled-components";

import nodesData from '../nodes.json'

import Intro from './Intro'
import NodeItem from './NodeItem'

const Button = styled.button`
`

const DecisionTree = () => {
  const [activeNode, setActiveNode] = useState(null)
  const [nodes] = useState(nodesData)

  const activateNode = evt => {
    const nodeId = parseInt(evt.currentTarget.value, 10);
    const foundNode = nodes.find((node) => node.id === nodeId)

    setActiveNode(foundNode)
  }

  if (activeNode === null) {
    return (
      <Intro actions={
        <Button 
          onClick={activateNode} 
          value={1}>Get Started</Button>
      } />
    )
  } else {
    return (
      <NodeItem 
        text={activeNode.text} 
        details={activeNode.details} 
        isFinalDecision={activeNode.isFinalDecision}
      />
    )
  }
}

export default DecisionTree