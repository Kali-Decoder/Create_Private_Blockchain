const Block = require("./block");

class Blockchain {
  constructor() {
    this.chain = [Block.genesis()];
  }

  addBlock({ data }) {
    const newBlock = Block.mineBlock({
      prevBlock: this.chain[this.chain.length - 1],
      data: data,
    });
    this.chain.push(newBlock);
  }
  printBlockChain() {
    console.log(this.chain);
  }
}
const blockchain = new Blockchain();

blockchain.addBlock({ data: "This is My First Block" });
blockchain.addBlock({ data: "This is My Second Block" });
blockchain.printBlockChain()

module.exports = Blockchain;
