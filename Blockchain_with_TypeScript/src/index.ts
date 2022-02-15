// 블록체인 작업
// 블록 구조를 만든다. 
class Block{

   public index : number;
   public hash : String;
   public previousHash : string;
   public data : string;
   public timestamp: number;

   constructor(
      index: number,
      hash: string,
      previousHash : string,
      data : string,
      timestamp: number
   ){
      this.index = index;
      this.hash = hash;
      this.previousHash = previousHash;
      this.data = data;
      this.timestamp = timestamp;
   };
}

// 첫번째 블록 생성
const genesisBlock:Block = new Block(0, "202020202020", "", "Hello" , 123456);


// 블록 체인 생성 (블록체인은 무엇인가요? 블록의 연결! )
let blockchain : [Block] = [genesisBlock]; // array of blocks!

console.log(blockchain);

// typescript는 블록만 블록체인에 추가하도록 체크한다.
// blockchain.push("stuff"); <- 블록이 아니므로 작동하지 않음


export{};  // 이 파일이 모듈이 된다는것을 이해할 수 있도록 혹시 버그 나면 해결