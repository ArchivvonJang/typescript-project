//core type
function add(n1: number, n2 :number, showResult: boolean, phrase: string){
   // if(typeof n1 !== 'number' && typeof n2 !== 'number'){
   //     throw new Error('Incorrect input!');
   // } //<- 자바스크립트로만 입력을 확인하는 방법 이렇게 쓰면 에러날수있음

   const result = n1 + n2;
   if(showResult){
       console.log(phrase + result); 
   }else{
       return result;
   }

} 

//const number1='5'; //String 

let number1: number ;
number1 = 5; //즉, 위의 함수와 같은 결과를 미리 설정  하지만 초기값이 있는경우엔 미리 설정하는건 굳이 좋진 않다. let numer1:number;
const number2=2.8;
const printResult = true;
let resultPhrase = 'Result is : ';
//resultPhrase = 0; <- string type이 아니므로 에러남

//const result = add(number1, number2, printResult);
add(number1, number2, printResult, resultPhrase); //이 줄에서 굳이 result를 적지 않고 바로 add 해도 된다 이미 위에서 printResult가 true로 설정되어 있기 때문이다.<- 무슨말일까?


// 브라우저에는 Typescript 지원기능이 내장되어 있지 않기 때문에 자바스크립트로 컴파일하기전에만 유용하지만 매우 유용함! 온전성 검사를 해주기 때문이다.

