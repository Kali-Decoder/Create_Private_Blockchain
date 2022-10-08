const { Genesis_data } = require("./config");
const { returnHash } = require("./crypt.hash");
class Block {
  constructor({ timestamp, prevHash, hash, data }) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }

  static genesis() {
    return new this(Genesis_data);
  }
  static mineBlock({ prevBlock, data }) {
    const timestamp = Date.now();
    const prevHash = prevBlock.hash;
    const hash = returnHash(timestamp, prevHash, data);
    return new this({ timestamp, prevHash, hash, data });
  }
}

let block1 = new Block({
  timestamp: "31-3-2020",
  prevHash: "0xab",
  hash: "0xabcde",
  data: "Hello World",
});

let genesisBlock = Block.genesis();
console.log(genesisBlock);

let result1 = Block.mineBlock({ prevBlock: genesisBlock, data: "Block2" });
let result2 = Block.mineBlock({ prevBlock: result1, data: "Block3" });

console.log(result1, result2);
