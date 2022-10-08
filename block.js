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
  static  mineBlock({ prevBlock, data }) {
    const timestamp = Date.now();
    const prevHash = prevBlock.hash;
    const hash = returnHash(timestamp, prevHash, data);
    return new this({ timestamp, prevHash, hash, data });
  }
}


module.exports=Block;