const userName = 'Jang';

console.log(userName);

//watch mode : 파일을 감시하도록 지시할 수 있으며, 파일이 변경될 때마다 다시 컴파일된다.
//terminal에 tsc app.ts --w or --watch

let age: number;
age = 30;

const button = document.querySelector('button')!;

// a comment
button.addEventListener('click', ()=>{ 
    console.log('Clicked!');
});

//const map = new Map();

