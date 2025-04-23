interface Person {
    name:string;
    age:number;
}

interface Employee extends Person {
    salary:number;
    options?:{
        incentive?:number;
        bonus?:number;
    }
}
const employee:Employee = {
    name:"John",
    age:20,
    salary:10000,
    options:{
        incentive:1000,
    }
}
// readonly는 런타임 단계에서는 값을 변경해도 이상이 없지만 컴파일 단계에서 값을 변경하려고 하면 에러를 반환해줌
interface Post {
    readonly id: number; // primary key는 변경 금지
    title: string;
  }

interface Oner extends Person {
    company:string;
}

type Company = Oner & Employee;

const company:Company = {
    name:"John",
    age:20,
    company:"Apple",
    salary:10000,
}

interface Todo {
    title:string;
    description:string;
}
// Partial은 인터페이스의 모든 속성을 선택적으로 만들어줌
// 주로 어떤 객체를 update하는 함수에서 사용
function getTodo(todo:Todo, update:Partial<Todo>):Todo{
    return {
        ...todo,
        ...update,
    }
}
    
// Record는 키와 값의 타입을 지정해주면서 딕셔너리 형태로 만들어줌
const animal: Record<string, number> = {
    cat:1,
    dog:2,
}

// 제내릭
