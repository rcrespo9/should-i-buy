// TODO: decouple value from button, set to state instead

import React, { useState, useReducer } from "react";
import styled from "styled-components";
import { modularScale, rgba } from "polished";

import nodesData from "../nodes.json";

import Intro from "./Intro";
import NodeItem from "./NodeItem";
import RadioBtn from "./RadioBtn";

const Button = styled.button`
  appearance: none;
  min-width: ${modularScale(8)};
  padding: ${modularScale(0)} ${modularScale(2)};
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  color: #fff;
  background-color: ${props => props.theme.secondaryColor};
  font-size: ${modularScale(0)};
  font-weight: 500;

  &:disabled {
    opacity: 0.85;
  }

  &:hover {
    cursor: pointer;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;

const initialState = {
  activeNode: null,
  selectedNode: null,
  prevNodes: [0]
};

const decisionTreeReducer = (state, action) => {
  switch (action.type) {
    case "ACTIVATE_NODE":
      return { ...state, activeNode: action.payload };
    case "SELECT_NODE":
      return { ...state, selectedNode: action.payload };
    case "ADD_PREV_NODE":
      return { ...state, prevNodes: [...state.prevNodes, action.payload] };
    case "REMOVE_PREV_NODE":
      return {
        ...state,
        prevNodes: state.prevNodes.filter(nodeId => nodeId !== action.payload)
      };
    case "RESET":
      return { ...initialState };
    default:
      throw new Error("unexpected action");
  }
};

const DecisionTree = () => {
  const [state, dispatch] = useReducer(decisionTreeReducer, initialState);
  const [nodes] = useState(nodesData);

  const findNode = id => {
    const nodeId = parseInt(id, 10);
    const foundNode = nodes.find(node => node.id === nodeId);

    return foundNode;
  };

  const selectNodeHandler = evt => {
    const foundNode = findNode(evt.currentTarget.value);

    dispatch({
      type: "SELECT_NODE",
      payload: foundNode
    });
  };

  const nextNode = () => {
    dispatch({
      type: "ACTIVATE_NODE",
      payload: state.activeNode.isComment
        ? findNode(state.activeNode.commentRoute)
        : state.selectedNode
    });

    if (state.activeNode) {
      dispatch({
        type: "ADD_PREV_NODE",
        payload: state.activeNode.id
      });
    }
  };

  const prevNode = () => {
    const prevNodeItem = state.prevNodes[state.prevNodes.length - 1];

    dispatch({
      type: "ACTIVATE_NODE",
      payload: findNode(prevNodeItem)
    });

    dispatch({
      type: "SELECT_NODE",
      payload: state.activeNode
    });

    dispatch({
      type: "REMOVE_PREV_NODE",
      payload: prevNodeItem
    });
  };

  const startSurvey = () => {
    dispatch({
      type: "ACTIVATE_NODE",
      payload: findNode(1)
    });
  };

  const resetSurvey = () => {
    dispatch({
      type: "RESET"
    });
  };

  return state.activeNode === null ? (
    <Intro actions={<Button onClick={startSurvey}>Get Started</Button>} />
  ) : (
    <NodeItem
      text={state.activeNode.text}
      details={state.activeNode.details}
      isFinalDecision={state.activeNode.isFinalDecision}
      isComment={state.activeNode.isComment}
      choices={
        <>
          <RadioBtn
            label="Yes"
            id="yesChoice"
            onChangeEvt={selectNodeHandler}
            value={state.activeNode.yesRoute}
            isChecked={
              state.selectedNode
                ? state.activeNode.yesRoute === state.selectedNode.id
                : false
            }
          />
          <RadioBtn
            label="No"
            id="noChoice"
            onChangeEvt={selectNodeHandler}
            value={state.activeNode.noRoute}
            isChecked={
              state.selectedNode
                ? state.activeNode.noRoute === state.selectedNode.id
                : false
            }
          />
        </>
      }
      prevBtn={
        <Button onClick={state.prevNodes.length > 1 ? prevNode : resetSurvey}>
          Previous
        </Button>
      }
      nextBtn={
        state.activeNode.isFinalDecision ? (
          <Button onClick={resetSurvey}>Reset Survey</Button>
        ) : (
          <Button
            onClick={nextNode}
            disabled={
              state.activeNode.isComment
                ? false
                : state.selectedNode
                ? state.selectedNode.id === state.activeNode.id
                : true
            }
          >
            Next
          </Button>
        )
      }
    />
  );
};

export default DecisionTree;
