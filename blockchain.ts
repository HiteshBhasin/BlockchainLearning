class blockshain {
    /**
     * Represents the blockchain, which is an array of block objects.
     * Each block contains the following properties:
     * - `index`: The position of the block in the blockchain.
     * - `timestamp`: The time at which the block was created.
     * - `transactions`: An array of transactions included in the block.
     * - `nonce`: A number used once for cryptographic purposes, typically in mining.
     * - `hash`: The hash of the block, ensuring data integrity.
     * - `previousBlockHash`: The hash of the previous block in the chain, linking the blocks together.
     */
    chain: { index: number; timestamp: number; transactions: never[]; nonce: number; hash: string; previousBlockHash: string; }[];
    pendingTransection: never[];
    // The constructor function is used 
    // to initialize the chain and pendingTransactions 
    // array
    constructor() {
      this.chain = [this.createGenesisBlock()];
      this.pendingTransection = [];  
    }

    createGenesisBlock(){
        // The function will only execute once because the constructor function runs 
        // only once – at the beginning of the program
        return{
            index:1, 
            timestamp: Date.now(),
            transactions:[],
            nonce : 0,
            hash:"hash",
            previousBlockHash:"previousBlockHash"
        }// returning an object. 
    };

    getLastBlock(){
        return this.chain[this.chain.length-1];
    }

}