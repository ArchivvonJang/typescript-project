//분석 데이터를 서버로 보낸다는 가정하에 만든 파일
//index.html에 파일추가
console.log('Sending...');

//terminal > tsc --init 특정파일을 지정하지 않고 이렇게만 적으면 이 프로젝트가 타입스크립트 프로젝트입을 규정
// tsconfig.json 파일이 생성되었다.
// 이 파일이 있는 프로젝트의 타입스크립트에 대한 표시이며 이 프로젝트이 하위폴더에서 관리

function sendAnalystics(data){
    console.log(data);
}

sendAnalystics('The data');                                                                                                                                                                                                                                                                                            