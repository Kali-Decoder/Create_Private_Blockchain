class Block {
  constructor({timestamp, prevHash, hash, data}) {
    this.timestamp = timestamp;
    this.prevHash = prevHash;
    this.hash = hash;
    this.data = data;
  }
}

let block1 = new Block({
  timestamp: "31-3-2020",
  prevHash: "0xab",
  hash: "0xabcde",
  data: "Hello World",
});

console.log(block1)
