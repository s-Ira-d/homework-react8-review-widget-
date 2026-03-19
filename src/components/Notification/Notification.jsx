import React, { Component } from "react";
import { Message } from "./Notification.styled.js";

export default class Notification extends Component {
  render() {
    const { message } = this.props;

    return <Message>{message}</Message>;
  }
}
