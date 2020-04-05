import React from "react";
import {
  BlockListContainer,
  getBlocks as fetchBlocks,
  BtnContainer,
  getLatestBlock
} from "../global";
import { updateBlocks } from '../../../ducks';

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Pagination, AppPrimaryBtn, AppSuccessBtn } from '../../../common';

const PagedData = ({ items = [] }) => {
  return (<ul>
    {items.map(({ hash }, idx) => (
      <li key={idx}>
        <Link to={`/blockDetails/${hash}`}>{hash.substring(hash.length - 3, hash.length)}</Link>
      </li>
    ))}
  </ul>)
};

export const BlockList = ({ blocks = [], updateBlocks }) => {
  const getBlocks = async () => {
    const resultList = await fetchBlocks();
    updateBlocks(resultList);

  };
  const getLatest = async () => {
    const result = await getLatestBlock();
    updateBlocks(result);
  }
  return (
    <BlockListContainer>
      <BtnContainer>
        <AppPrimaryBtn onClick={getBlocks}>
          All Blocks
        </AppPrimaryBtn>
        <AppSuccessBtn onClick={getLatest}>
          Latest block
        </AppSuccessBtn>
      </BtnContainer>
      {blocks.length > 0 && <Pagination data={blocks} itemsPerPage={20}>
        <PagedData />
      </Pagination>}
    </BlockListContainer>
  );
};

export const stateToProps = state => ({
  blocks: state.blocks
});

export default connect(stateToProps, { updateBlocks: updateBlocks })(BlockList);
