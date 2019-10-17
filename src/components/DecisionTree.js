import React, { useState, useEffect, useRef } from 'react'
import styled from "styled-components"
import { modularScale } from 'polished'

import nodesData from '../nodes.json'

import Intro from './Intro'
import NodeItem from './NodeItem'

const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
}

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
  const prevActiveNode = usePrevious(activeNode)
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

  const goToNode = evt => {
    const nodeId = parseInt(evt.currentTarget.value, 10)
    const foundNode = selectNode(null, nodeId);

    setActiveNode(foundNode)
  }

  return activeNode === null ? (
    <Intro
      actions={
        <Button onClick={goToNode} value={1}>
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
          <Button onClick={goToNode} value={activeNode.commentChildId}>
            Next
          </Button>
        ) : activeNode.isFinalDecision ? (
          <Button onClick={goToNode} value={1}>
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
            {prevActiveNode !== null && activeNode.id !== 1 && activeNode.id !== prevActiveNode.id && (
              <Button onClick={goToNode} value={prevActiveNode.id}>
                Previous
              </Button>
            )}
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