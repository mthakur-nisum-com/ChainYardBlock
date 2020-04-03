import axios from "axios";
import { BLOCK_LIST_LIMiT, BLOCK_REQUETS_URL } from "../../../ducks";

export const generateBlockRequest = async (blockListRequests = []) =>
  await axios.all([...blockListRequests]);
export const getBlocks = async (blocksLimit = BLOCK_LIST_LIMiT) => {
  try {
    const listRequests = [];
    for (let i = 1; i <= blocksLimit; i++) {
      listRequests.push(axios.get(`${BLOCK_REQUETS_URL}/${i}`));
    }
    console.log(generateBlockRequest(listRequests));
  } catch (e) {
    console.log(e);
  }
};
