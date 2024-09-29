const bcrypt = require("bcrypt");
const salt = 0;
class BlockChain {
  chain = [];
  constructor(difficultyTarget) {
    this.difficultyTarget = difficultyTarget;

    const genesis = new Block(0, "0", Date.now(), "first block!!!");

    genesis.currentHash = mineBlock(genesis, difficultyTarget);

    console.log("here");
    this.chain.push(genesis);
    console.log(this.chain[this.chain.length - 1]);
    console.log(this.chain[this.chain.length - 1].previousHash);
  }
}

class Block {
  currentHash;
  constructor(index, previousHash, timeStamp, data) {
    (this.index = index),
      (this.previousHash = previousHash),
      (this.timeStamp = timeStamp),
      (this.data = data);
  }
}

function createNewBlock(data) {
  console.log(chain.chain);

  const newBlock = new Block(
    chain.chain.length + 1,
    chain.chain[chain.chain.length - 1].currentHash,
    Date.now(),
    data
  );

  newBlock.currentHash = mineBlock(newBlock, chain.difficultyTarget);
  chain.chain.push(newBlock);
}

function mineBlock(block, difficultyTarget) {
  //   console.log(block.index);

  const difficultyZero = "0".repeat(difficultyTarget);
  let nonce = 0;
  let currentHash = bcrypt.hashSync(
    JSON.stringify(
      block.index,
      block.previousHash,
      block.timeStamp,
      block.data,
      nonce
    ),
    salt
  );

  console.log(difficultyZero);

  while (!currentHash.startsWith(difficultyZero)) {
    nonce++;
    currentHash = bcrypt
      .hashSync(
        JSON.stringify(
          block.index,
          block.previousHash,
          block.timeStamp,
          block.data,
          nonce
        ),
        salt
      )
      .slice(7);
    // console.log(currentHash.startsWith(difficultyZero));
    console.log(currentHash);
  }
  console.log(currentHash);
  //   return new Promise(currentHash);
  return currentHash;
}

const chain = new BlockChain(1);
// createNewBlock("new block");
createNewBlock("New block by Ashwin");
console.log(chain);
