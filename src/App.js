import React, { useState } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Section from "./components/Section/Section.jsx";
import Notification from "./components/Notification/Notification.jsx";

export default function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const countTotalFeedback = () =>
    feedback.good + feedback.neutral + feedback.bad;

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((feedback.good / total) * 100);
  };

  const options = Object.keys(feedback);
  const total = countTotalFeedback();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </div>
  );
}
