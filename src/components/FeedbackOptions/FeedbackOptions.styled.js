import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FeedbackButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background-color: #0077cc;
  color: white;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005fa3;
  }
`;
