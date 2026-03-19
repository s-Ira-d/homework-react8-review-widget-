import React, { Component } from "react";
import { StatsWrapper } from "./Statistics.styled.js";

export default class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <StatsWrapper>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
      </StatsWrapper>
    );
  }
}
