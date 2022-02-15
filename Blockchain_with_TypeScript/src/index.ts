// 인터페이스  -Js에는 관여하지 않음 즉, JS로 컴파일되지 않음 ( 예를 들어 블록체인에서, 한 블록이 가져야하는 모든 세부설명을 inteface에서 정의할 수 있다. )
// 가끔 인터페이스를 JS에 넣고 싶을 때 ->  class
//인터페이스 생성 -Js에는 관여하지 않음 ( 예를 들어 블록체인에서, 한 블록이 가져야하는 모든 세부설명을 inteface에서 정의할 수 있다. )
/* interface Human{
   name : string,
   age :number,
   gender : string;
} 

 class Human{

   // 가져야할 속성과 권한 선언
   public name : string;
   public age : number;
   public gender : string; // private라면 클래스 내에서만 사용 가능, 밖에서 호출해도 컴파일 되지 않는다.

   constructor (name:string, age:number, gender: string){      // 생성자 == 메소드 == 클래스가 시작할 때마다 호출 생성자 (인자 (arguement))
      this.name = name;  //같은 속성의 이름을 argument로 설정
      this.age = age;
      this.gender = gender;
   }
}

const su = new Human("su" ,20 ,"female");

// '?'붙이는 순간 gender parameter는 선택적인 것이 됨
const sayHi = (person: Human):string => {
   return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
}; 

console.log(sayHi(su));
*/

// 블록체인 작업
// 블록 구조를 만든다. 
class Block{
   public index! : number;
   public hash! : String;
   public previousHash! : string;
   public data! : string;
   public timestamp!: number;
   constructor{
         index: number;
         hash: string,
         previousHash : string,
         data : string,
         timestamp: number
   };
};


export{};  // 이 파일이 모듈이 된다는것을 이해할 수 있도록 혹시 버그 나면 해결