class blockshain {
    // The constructor function is used 
    // to initialize the chain and pendingTransactions 
    // array
    constructor() {
      this.chain = [this.createGenesisBlock()];
      this.pendingTransection = [];  
    }

    createGenesisBlock(){
        return{
            index:1, 
            timestamp: Date.now(),
            transactions:[],
            nonce : 0,
            hash:"hash",
            previousBlockHash:"previousBlockHash"
        }// returning an object. 
    };
}