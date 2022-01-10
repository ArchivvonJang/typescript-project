/* const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // tuple type
} = {
    name: 'Jang',
    age: 30 ,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author'] // Tuple 첫번째는 숫자 두번는 문자열
}; */

/* const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2; 이렇게 해도 되지만 enum이 더 쉽게 도와준다 */

//enum Role {ADMIN, READ_ONLY, AUTHOR}; //각각 0,1,2라는 숫자가 부여된다
enum Role {ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR = 'AUTHOR'}; //0부터가 아닌 다른 숫자를 부여하고 싶은 경우 혹은 지정 유형을 설정하는 경우

const person = {
    name: 'Jang',
    age: 30 ,
    hobbies: ['Sports', 'Cooking'],
    role : Role.ADMIN //enum 호출
};

// person.role.push('admin'); push는 실제로 tuple에서 허용되므로 typescript에서 잡을 수 없다 하지만 잘못된 타입이 할당되지는 않는다.
// person.role[1] = 10; //사용할 수 있는 종류가 무엇인지만 정했기 때문에 숫자도 두번째에 할당될 수 있다.
// 그렇기 때문에 tuple을 사용하여 역할 type을 명시적으로 설정하여 어떤 type이어야하는지 지정
// 튜플 타입으로 지정 후 에러 발생한다.

// person.role = [0, 'admin', 'user'];  ERROR! 작업중인 배열을 더 정확하게 지정해줄수있다.

 let favoriteActivities: any[]; //any for mixed array
//let favoriteActivities: string[]; 
favoriteActivities = ['sports'];

console.log(person.name);

for(const hobby of person.hobbies){ //이렇게입력해도 hobbies가 string array라고 인식함
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());ERROR! 배열에는 쓸 수 있지만 문자열에서는 쓸 수 없다 
}

//if(person.role === 'READ_ONLY'){ 위에서 선언한 role과 다르게 특수문자가 있다
//    console.log('is read only'); 그래서 컴파일 안된다
//} -> 문자식별자의 단점!

if(person.role === Role.AUTHOR){ 
    console.log('is read only'); 
} 