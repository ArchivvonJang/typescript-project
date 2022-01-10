type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text' ;

function combine(
    input1: Combinable, 
    input2: Combinable, 
    resultConversion: ConversionDescriptor // union type과 literal type(string, number과 같은 core type) 결합
){
//combine으로 바꾸면 n1, n2에 대해 숫자와 문자열 둘 다 가능해진다.
    //const result = input1 + input2; //숫자를 얻게 되기도 하고 문자열을 얻게 되기도 한다. 숫자와 문자열 둘다 써야하는 유연한 애플리케이션이 있기도 하므로 
   
    let result;
   if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
        result = +input1 + +input2; //+를 붙이면 input은 number로 전환디고 결합하기 전에 number라고 명시된다.
   }else{
       result = input1.toString() + input2.toString();
   }
   return result;
/*    if(resultConversion==='as-number'){
       return +result;
   }else{
       return result.toString();
   } */
}

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combinedNames = combine('Jang', 'Lazy', 'as-text'); // number로 지정되어있기 때문에 ERROR! 그래서 union 타입으로 변경해준다. 
console.log(combinedNames);