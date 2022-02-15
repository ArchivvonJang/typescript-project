let userInput: unknown; 
// 아직 사용자가 어떤 값을 입력할지 모르기 때문에 unknown type
// 에러없이 어떤 값이든 변수에 담을 수 있다. 
// any랑 작동방식이 다르지만 위와같은 특징은 같다.
// string 또는 number를 쓸거라면 union type을 쓰는 것(let userInput: string | number)이 낫지만, 
// unknown type은 타입을 미리 확인, 할수없는 것을 미리 알려준다.

let userName1: string;

userInput = 5;
userInput = 'Jang';

//userName = userInput; // ERROR!
// type unknown은 type string에 할당할 수 없기 때문이다.
// userInput :any; 로 변경하면 에러가 사라진다.
// any는 가장 폭넓게 쓰이는 type이고 type 확인이 필요없다.


if(typeof userInput === 'string'){ //여기서 먼저 userInput은 string이라고 정의했기 때문에 에러가 발생하지 않는다. 
    userName1 = userInput;
}

//never
// 이 함수는 반환값이 없기 때문에 void type이라고 볼 수 있지만, 실제로 아무것도 반환하는 것이 아니다.
// never를 반환하며, 값은 생성하지 않는다.
// 이 함수는 항상 스크립트에 부딪힐 것이고 try를 사용해도 마찬가지이기 때문에 아무것도 return하지 않는다.
// 그렇지만 함수의 type은 void이면서 never <- 어떤 것도 반환하지 않을 의도 
function generateError(message: string, code: number):never{ //오류를 생성하는 유틸리티 함수를 만든다.
  
    throw {message: message, errorCode: code};
    //while(true){}
}

const result = generateError('An error occured!' , 500); 
console.log(result);


