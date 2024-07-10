//주요기능
//Modules: 하여 관리하고 재사용합니다.
//Enums: 명명된 상수 집합을 정의하여 코드의 가독성을 높입니다.
//Generics: 타입을 파라미터처럼 사용하여 유연하고 재사용 가능한 코드를 작성할 수 있습니다.
//Type Guards: 특정 타입이 확실한 경우 코드의 특정 부분을 실행할 수 있게 합니다.
//Type Assertions: 개발자가 타입스크립트의 타입 추론을 재정의할 수 있게 합니다.// 추가로 공부 필요


// Modules: 코드와 자원을 모듈 단위로 분리하여 재사용

export function number1(){// 함수를 선언하면서 export를 사용
    return 1;
}

// Enums: 상수를 그룹화 하는 방식

enum sex {// 상수를 먼저 그룹화 한다.
    Male,
    Female,
}

let person: sex = sex.Male;// 변수를 선언 할 때 방식은 (enum변수명.변수) 값으로 지정한다.

console.log(sex.Male)// 0 반환
console.log(sex[0])// 'Male' 반환

// Generics: 재사용 가능한 함수나 클래스 작성 가능
// 아래와 같이 T로 들어오는 값을 타입에 상관 없이 받아서 T를 받아온 값의 형식으로 만들어 준다

// T로 반환하거나 T[]배열 형식으로 데이터 반환
function process<T>(arg: T): T | T[] {
    if (typeof arg === "number") {
      return [arg]; // 숫자인 경우 배열로 반환
    }
    return arg; // 그 외의 경우 그대로 반환
  }
  
  console.log(process(10));  // 출력: [10]
  console.log(process("hello"));  // 출력: "hello"
  
// T를 이용해서 interface를 만들었다.
  interface Response<T> {
    status: number;
    type: string;
    data: T;
  }

// 함수에  Generic형태로 인자를 받아서 반환 값을 T로 선언된 interface에 추가된다.
function createResponse<T>(data: T): Response<T> {
    return {
        status: 200,
        type: "success",
        data: data
    };
}

let response = createResponse({name: "Alice", age: 25});
console.log(response);
// 출력 값은 입력 받은 값이 data부분에 추가가 되어서 나오게 된다
// {status: 200, type: "success", data: {name: "Alice", age: 25}}

