import React, { useState, useReducer } from 'react'
import styled from "styled-components"
import { modularScale } from 'polished'

import nodesData from '../nodes.json'

import Intro from './Intro'
import NodeItem from './NodeItem'

const initialState = {
  activeNode: null,
  prevActiveNode: null,
  selectedNode: null
}

const decisionTreeReducer = (state, action) => {
  switch (action.type) {
    case 'activateNode':
      return { ...state, activeNode: action.payload }
    case 'selectNode':
      return { ...state, selectedNode: action.payload }
    case 'setPreviousNode':
      return { ...state, prevActiveNode: action.payload}
    default: throw new Error('unexpected action')      
  }
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

const Label = styled.label``

const RadioInput = styled.input.attrs(prop => ({
  type: 'radio',
  name: 'nodeChoice'
}))``

const DecisionTree = () => {
  const [state, dispatch] = useReducer(decisionTreeReducer, initialState)
  const [nodes] = useState(nodesData)

  const findNode = (id) => {
    const nodeId = parseInt(id, 10)
    const foundNode = nodes.find((node) => node.id === nodeId)

    return foundNode
  }

  const activateNode = evt => {
    const foundNode = findNode(evt.currentTarget.value)

    dispatch({
      type: 'activateNode',
      payload: foundNode
    })

    dispatch({
      type: 'setPreviousNode',
      payload: state.activeNode
    })
  }

  const selectNode = evt => {
    const foundNode = findNode(evt.currentTarget.value)

    dispatch({
      type: 'selectNode',
      payload: foundNode
    })
  }

  return state.activeNode === null ? (
    <Intro
      actions={
        <Button onClick={activateNode} value={1}>
          Get Started
        </Button>
      }
    />
  ) : (
    <NodeItem
      text={state.activeNode.text}
      details={state.activeNode.details}
      isFinalDecision={state.activeNode.isFinalDecision}
      isComment={state.activeNode.isComment}
      choices={
        <div>
          <Label>
            Yes
            <RadioInput
              onChange={selectNode}
              value={state.activeNode.yesChildId}
              checked={state.selectedNode ? state.activeNode.yesChildId === state.selectedNode.id : false}
            />
          </Label>
          <Label>
            No
            <RadioInput
              onChange={selectNode}
              value={state.activeNode.noChildId}
              checked={state.selectedNode ? state.activeNode.noChildId === state.selectedNode.id : false}
            />
          </Label>
        </div>
      }
      actions={
        state.activeNode.isComment ? (
          <Button
            onClick={activateNode}
            value={state.activeNode.commentChildId}
          >
            Next
          </Button>
        ) : state.activeNode.isFinalDecision ? (
          <Button onClick={activateNode} value={1}>
            Reset Survey
          </Button>
        ) : (
          <div>
            {state.prevActiveNode && state.activeNode.id !== 1 && (
              <Button onClick={activateNode} value={state.prevActiveNode.id}>
                Previous
              </Button>
            )}
            <Button
              onClick={activateNode}
              value={state.selectedNode ? state.selectedNode.id : null}
              disabled={state.selectedNode ? false : true}
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