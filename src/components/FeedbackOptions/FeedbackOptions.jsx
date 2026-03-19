import React, { Component } from "react";
import { ButtonsWrapper, FeedbackButton } from "./FeedbackOptions.styled.js";

export default class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

    return (
      <ButtonsWrapper>
        {options.map((option) => (
          <FeedbackButton key={option} onClick={() => onLeaveFeedback(option)}>
            {option}
          </FeedbackButton>
        ))}
      </ButtonsWrapper>
    );
  }
}
