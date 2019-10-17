import React, { useState } from 'react'
import styled, { ThemeProvider } from "styled-components"
import { modularScale } from 'polished'

import nodesData from '../nodes.json'

import Intro from './Intro'
import NodeItem from './NodeItem'

const Button = styled.button`
  appearance: none;
  min-width: ${modularScale(8)};
  padding: ${modularScale(0)} ${modularScale(2)};
  border: none;
  color: #fff;
  background-color: ${(props) => props.theme.secondaryColor};
  font-size: ${modularScale(0)};
  font-weight: 500;

  + button {
    margin-left: ${modularScale(2)};
  }

  &:hover {
    cursor: pointer;
  }
`;

const DecisionTree = () => {
  const [activeNode, setActiveNode] = useState(null)
  const [selectedNode, setSelectedNode] = useState(null)
  const [nodes] = useState(nodesData)

  const selectNode = (evt, id = null) => {
    const nodeId = id || parseInt(evt.currentTarget.value, 10);
    const foundNode = nodes.find((node) => node.id === nodeId)

    setSelectedNode(foundNode)

    return foundNode
  }

  const activateNode = evt => {
    setActiveNode(selectedNode)
  }

  const nextNode = evt => {
    const nodeId = parseInt(evt.currentTarget.value, 10)
    const foundNode = selectNode(null, nodeId);

    setActiveNode(foundNode)
  }

  return activeNode === null ? (
    <Intro
      actions={
        <Button onClick={nextNode} value={1}>
          Get Started
        </Button>
      }
    />
  ) : (
    <NodeItem
      text={activeNode.text}
      details={activeNode.details}
      isFinalDecision={activeNode.isFinalDecision}
      actions={
        activeNode.isComment ? (
          <Button onClick={nextNode} value={activeNode.commentChildId}>
            Next
          </Button>
        ) : activeNode.isFinalDecision ? (
          <Button onClick={nextNode} value={1}>
            Reset Survey
          </Button>
        ) : (
          <div>
            <label>
              Yes
              <input
                type="radio"
                name="nodeChoice"
                onChange={selectNode}
                checked={selectedNode.id === activeNode.yesChildId}
                value={activeNode.yesChildId}
              />
            </label>
            <label>
              No
              <input
                type="radio"
                name="nodeChoice"
                onChange={selectNode}
                checked={selectedNode.id === activeNode.noChildId}
                value={activeNode.noChildId}
              />
            </label>
            {/* <Button 
                onClick={activateNode}
                value={activeNode.yesChildId}>Previous</Button> */}
            <Button
              onClick={activateNode}
              value={selectedNode.id}
              disabled={activeNode.id === selectedNode.id}
            >
              Next
            </Button>
          </div>
        )
      }
    />
  );
}

export default DecisionTree