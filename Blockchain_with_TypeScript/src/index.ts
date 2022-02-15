//인터페이스 생성 -Js에는 관여하지 않음 ( 예를 들어 블록체인에서, 한 블록이 가져야하는 모든 세부설명을 inteface에서 정의할 수 있다. )
interface Human{
   name : string,
   age :number,
   gender : string;
}

const person = {
   name: "suyeon",
   gender:"female",
   age : 28

};

// '?'붙이는 순간 gender parameter는 선택적인 것이 됨
const sayHi = (person: Human):string => {
   return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));



export{};  // 이 파일이 모듈이 된다는것을 이해할 수 있도록 혹시 버그 나면 해결