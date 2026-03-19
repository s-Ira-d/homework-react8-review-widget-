import React, { Component } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Section from "./components/Section/Section.jsx";
import Notification from "./components/Notification/Notification.jsx";

export default class App extends Component {
  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  handleLeaveFeedback = (type) => {
    this.setState((prevState) => ({
      feedback: {
        ...prevState.feedback,
        [type]: prevState.feedback[type] + 1,
      },
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state.feedback;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    } else {
      return Math.round((this.state.feedback.good / total) * 100);
    }
  };

  render() {
    const options = Object.keys(this.state.feedback);
    const total = this.countTotalFeedback();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.feedback.good}
              neutral={this.state.feedback.neutral}
              bad={this.state.feedback.bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
