# BlockchainLearning
BlockchainLearning

// A blockchain is a connection of many blocks. 
// So it begins with one block called the genesis block. 
// Among other things, a block contains a hash, the previous block hash, 
// and at least one transaction.
// Every block in the blockchain keeps a record of its hash and the previous 
// block’s hash to keep the network safe from hackers
// This implies that for a hacker to gain access and break the network, 
// they need to generate the hashes and match them to 
// the right block without breaking other blocks.
// The whole process of adding a new block is known as mining. 
The hash of a block gets generated when mining. The process of calculating the hash is known as proof of work
For example, a blockchain may specify that the only acceptable hash must contain three zeros at the beginning.

To calculate the hash, we need to add a number known as a nonce to the string being hashed. The nonce usually starts from zero and is incremented every time the hash is generated until a hash beginning with three zeros is found. Then the hash and the nonce will be stored for reference purposes.