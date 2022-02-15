// 어떤 종류의 변수와 데이터인지 설정을 해줘야한다.
const name = "jang" ,
    age = 25 ,
    gender  = "female";

                        // '?'붙이는 순간 gender parameter는 선택적인 것이 됨
const sayHi = (name: string, age: number, gender?: undefined) => {
    console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
}

sayHi(name, age);

export{};  // 이 파일이 모듈이 된다는것을 이해할 수 있도록 혹시 버그 나면 해결