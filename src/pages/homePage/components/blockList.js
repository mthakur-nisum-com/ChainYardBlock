import React, { useEffect } from "react";
import {
  blocks,
  BlockListContainer,
  getBlocks as fetchBlocks
} from "../global";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export const BlockList = ({ blocks = [] }) => {
  const getBlocks = async () => {
    const result = await fetchBlocks();
    console.log(result);
  };
  useEffect(() => {
    getBlocks();
  }, [blocks]);
  return (
    <BlockListContainer>
      <ul>
        {blocks.map(({ name }, idx) => (
          <li key={idx}>
            <Link to={`/blockDetails/${idx}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </BlockListContainer>
  );
};

export const stateToProps = state => ({
  blocks: state.blocks
});

export default connect(stateToProps)(BlockList);
