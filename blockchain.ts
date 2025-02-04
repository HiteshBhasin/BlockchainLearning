import SHA256 from "sha256";
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
    chain: { index: number; 
        timestamp: number; 
        transactions: { amount: any; sender: any; reciepient: any }[]; 
        nonce: number; 
        hash: string; 
        previousBlockHash: string; 
        }[];

    pendingTransection: { amount: any; 
        sender: any; 
        reciepient: any }[];
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
    generateHash(previousHashBlock, timestamp, pendingHashBlock){
        let hash=""; 
        let nonce =0; 

        while (hash.substring(0,3) ! =="000") {
            nonce++; 
            hash = SHA256 (
                previousHashBlock +
                timestamp+
                JSON.stringify(pendingHashBlock)+
                nonce
            ).toString(); // SHA256 is concatinating the values. 
        }
        return { nonce, hash };
    }
    // a function 
    // that creates our transactions and 
    // adds them to the list of pending transactions

    createNewTransaction(amount, sender, reciepient){
        const newTransaction ={
            amount, 
            sender, 
            reciepient
        };

        this.pendingTransection.push(newTransaction);
    }

    creatNewBlock(){
        const timestamp = Date.now();
        const previousBlockHash = this.getLastBlock().hash;
        const transactions = this.pendingTransection;
        const generateHash = this.generateHash(previousBlockHash, timestamp, transactions);

        const newBlock = {
            index: this.chain.length+1,
            timestamp,
            transactions,
            nonce: generateHash.nonce,
            hash: generateHash.hash,
            previousBlockHash,
        };

        this.pendingTransection =[];
        this.chain.push(newBlock);
    }
// The code above uses the getLastBlock function to access the previous block's hash. It calculates the hash of the current block, adds all the detail of the new block in an object, 
// clears the pendingTransactions array, and pushes the new block into the chain
}