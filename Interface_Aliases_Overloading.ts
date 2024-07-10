// Interfaces: 타입의 구조를 정의하는 방법으로, 객체의 형태를 명시적으로 선언할 때 사용합니다.

interface User {// 명시적으로 선언을 해둔다
    id: number;
    name?: string;// '?'를 통해서 name을 추가하지 않아도 생성이 가능함
    greet(): void;  // 메소드 선언
}

let user: User = {// 변수 타입에 interface를 적용시킨다
    id: 1,
    // name: "John Doe",
    greet() {// 변수 선언 시 메소드를 구현 해야함
        console.log(`HI ${this.id}`);
    },
};

interface Employee extends User {
    // extends를 통해서 User interface값에서 추가를 할 수 있다.
    department: string;
    role: string;
}

interface SearchFunction {
    // 이 방식처럼 함수 파라미터와 반환 타입만 지정해서 정의 할 수 있음
    (source: string, subString: string): boolean;
}

//Type Aliases: 복잡한 타입을 간단한 이름으로 참조할 수 있게 해주는 기능

//type을 이용해서 타입이나, 함수의 별칭을 적을 수 있다., union이나 intersection에도 사용 가능

type Point = {
    x: number;
    y: number;
};
const pt: Point = { x: 10, y: 20 };

// 유니언, 인터섹션, 제네 타입 별칭

type StringOrNumber = string | number;
type Employeee = Person & { employeeId: number };

type Person = {
    name: string;
    age: number;
};
const employee: Employeee = {
    name: "John",
    age: 30,
    employeeId: 12345
};

type Container<T> = { value: T };

const numberContainer: Container<number> = { value: 123 };
const stringContainer: Container<string> = { value: "Hello World" };

//Function Overloading: 같은 이름의 함수에 대해 다양한 매개변수 타입과 반환 타입을 정의할 수 있습니다.

// 함수를 number과 string으로 이름을 똑같게 만들어서 먼저 선언
function getItems(id: number): Array<string>;
function getItems(name: string): Array<number>;

//유니온 방식으로 두 가지 상황에 맞게 함수 선언 
function getItems(param: number | string): Array<string> | Array<number> {
    if (typeof param === "number") {
        console.log("Fetching by id");
        return ["item1", "item2"];
    } else {
        console.log("Fetching by name");
        return [1, 2, 3];
    }
}

// TypeScript 컴파일러는 호출 시점에서 적절한 함수 선언을 선택하여, 함수의 사용이 더욱 타입-안전하게 되며, 코드의 가독성과 유지 보수성도 개선된다.
// 즉, 맨 위의 두줄로 Overloading을 선언을 해서 가독성과 유지보수성을 높여준 것이다. 