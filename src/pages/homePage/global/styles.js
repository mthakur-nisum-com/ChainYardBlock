import styled from "styled-components";

export const HomePageContainer = styled.section`
  width: 100%;
  height: 100%;
`;

export const Heading2 = styled.h2`
  font-size: 28px;
  font-weight: 600px;
`;

export const BlockListContainer = styled.section`
  ul {
    width: 80%;
    margin: 0 auto;
    li {
      list-style: none;
      padding: 20px;
      background-color: #afb0b1;
      color: #fff;
      cursor: pointer;
      border-radius: 4px;
      display: inline-block;
      margin-right: 20px;
      margin-bottom: 20px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;
