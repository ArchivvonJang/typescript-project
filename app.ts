//function and type
function add(n1: number, n2: number): number{ //return type과 맞는 type을 지정해준다. 그렇지만 굳이 적어줄 필요는 없다.
    //return n1.toString() + n2.toString(); <--이렇게 지정하면 add 함수도 타입을 string으로 인식
    return n1 + n2;
}

function printResult(num: number): void{ // 이 함수의 type은 void == return statement x, 이 함수는 아무것도 return하지 않는다.  
    console.log('Result: '+ num);
    // void for demo purposes
    //void가 기술적으로는 undefined라고 return 하는데,
    //typescript에서는 undefined도 type <- 꼭 써야하는 상황이고 확신할 수 있을 때만 쓰기!
    //함수 타입을 undefined로 정하면 return; 이 있어야한다. void 일때 return;을 써도 에러가 나지 않고 어지간해서는 void를 쓴다.
}

                                            // 콜백함수 만들고 타입 지정하기 
function addAndHandler(n1: number, n2: number, cb: (num: number)=> void){
    const result = n1 + n2;
    cb(result);
}

console.log(printResult(add(5, 12)));

//let someValue: undefined; // 이것도 타입! 

//return 하는 value가 없을 땐 void가 대부분 경우에 쓰이는 기준

//let combineValues; // 이 변수의 타입은 any여서 number를 써도 complie된다. 변수가 함수를 취급할 것이라고 분명히 해주기
//let combineValues: Function; // type 
let combineValues: (a: number, b: number) => number; // 정해진 두개의 파리미터 타입이 number 반환값도 number인 함수로 타입지정

combineValues = add;
//combineValues = printResult; //함수를 두개 쓰니까 undefined가 뜬다 더 구체적으로 타입 정해주기
//combineValues = 5; ERROR!

console.log(combineValues(8,8));

addAndHandler(10, 20, (result)=>{ //callback 함수
    console.log(result);
});
