import React, { useState } from 'react'
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

  return (
    activeNode === null ?
    ( <Intro actions={
        <Button 
          onClick={activateNode} 
          value={1}>Get Started</Button>
      } />
    )
    : <NodeItem 
        text={activeNode.text} 
        details={activeNode.details} 
        isFinalDecision={activeNode.isFinalDecision}
        actions={
          activeNode.isComment ? 
          ( <Button 
              onClick={activateNode}
              value={activeNode.commentChildId}>Next</Button>
          )
          : activeNode.isFinalDecision ? 
          ( <Button 
              onClick={activateNode}
              value={1}>Reset Survey</Button>
          )
          : <div>
              <Button 
                onClick={activateNode}
                value={activeNode.yesChildId}>Yes</Button>
              <Button 
                onClick={activateNode}
                value={activeNode.noChildId}>No</Button>
            </div>
        }
      />
  )
}

export default DecisionTree