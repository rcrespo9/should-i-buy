import React, { useState, useReducer } from "react";
import { Transition } from "react-transition-group";

import nodesData from "../nodes.json";

import Intro from "./Intro";
import NodeItem from "./NodeItem";
import RadioBtn from "./RadioBtn";
import Button from "./Button";

const duration = 200;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`
};

const defaultIntroStyle = {
  ...defaultStyle,
  opacity: 1
};

const defaultNodeItemStyle = {
  ...defaultStyle,
  opacity: 0
};

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 }
};

const initialState = {
  activeNode: null,
  selectedNode: null,
  prevNodes: [0],
  inIntro: true,
  inNode: false
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
    case "SET_IN_INTRO":
      return {
        ...state,
        inIntro: action.payload
      };
    case "SET_IN_NODE":
      return {
        ...state,
        inNode: action.payload
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

  const delayDispatch = dispatchObj => {
    setTimeout(() => dispatch(dispatchObj), duration);
  };

  const toggleNodeAnim = () => {
    dispatch({
      type: "SET_IN_NODE",
      payload: !state.inNode
    });
  };

  const toggleIntroAnim = () => {
    dispatch({
      type: "SET_IN_INTRO",
      payload: !state.inIntro
    });
  };

  const toggleIntroAndNodeAnim = () => {
    toggleNodeAnim();
    toggleIntroAnim();
  };

  const nextNode = () => {
    toggleNodeAnim();

    delayDispatch({
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

    toggleNodeAnim();

    delayDispatch({
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
    delayDispatch({
      type: "ACTIVATE_NODE",
      payload: findNode(1)
    });

    toggleIntroAndNodeAnim();
  };

  const resetSurvey = () => {
    delayDispatch({
      type: "RESET"
    });

    toggleIntroAndNodeAnim();
  };

  return state.activeNode === null ? (
    <Transition in={state.inIntro} timeout={duration}>
      {transState => (
        <div
          style={{
            ...defaultIntroStyle,
            ...transitionStyles[transState]
          }}
        >
          <Intro
            header="Should I Buy This?"
            blurb={
              <>
                <p>
                  Decision support tools are an effective way to help prevent
                  overspending. Whenever you're tempted to pull out your wallet,
                  go through this questionnaire first. By adding this step to
                  your purchasing process, you can retrain yourself to think
                  about every purchase before you make it.
                </p>
                <p>
                  Inspired by{" "}
                  <a
                    href="https://www.smartaboutmoney.org/Topics/Spending-and-Borrowing/Control-Spending/Should-I-Buy-This"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    smartaboutmoney.org
                  </a>.
                </p>
              </>
            }
            actions={<Button onClickEvt={startSurvey}>Get Started</Button>}
          />
        </div>
      )}
    </Transition>
  ) : (
    <Transition in={state.inNode} timeout={duration} onExited={toggleNodeAnim}>
      {transState => (
        <div
          style={{
            ...defaultNodeItemStyle,
            ...transitionStyles[transState]
          }}
        >
          <NodeItem
            header={
              state.activeNode.isFinalDecision
                ? "The verdict"
                : "Should I Buy This?"
            }
            question={state.activeNode.text}
            details={state.activeNode.details}
            isFinalDecision={state.activeNode.isFinalDecision}
            isComment={state.activeNode.isComment}
            choices={
              !state.activeNode.isFinalDecision &&
              !state.activeNode.isComment && (
                <>
                  <RadioBtn
                    label="Yes"
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
                    onChangeEvt={selectNodeHandler}
                    value={state.activeNode.noRoute}
                    isChecked={
                      state.selectedNode
                        ? state.activeNode.noRoute === state.selectedNode.id
                        : false
                    }
                  />
                </>
              )
            }
            prevBtn={
              <Button
                onClickEvt={state.prevNodes.length > 1 ? prevNode : resetSurvey}
              >
                Previous
              </Button>
            }
            nextBtn={
              state.activeNode.isFinalDecision ? (
                <Button onClickEvt={resetSurvey}>Reset</Button>
              ) : (
                <Button
                  onClickEvt={nextNode}
                  isDisabled={
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
        </div>
      )}
    </Transition>
  );
};

export default DecisionTree;
