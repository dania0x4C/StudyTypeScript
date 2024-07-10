// in 키워드와 함께 타입 키를 반복적으로 사

type Keys = 'option1' | 'option2';

type Flags = {
  [K in Keys]: boolean
};

// 위의 방식과 같이 option이라는 두가지 문자열을 가진 Keys가 boolean 타입이 되는 것이다.

interface Person1 {
    name: string;
    age: number;
}

// 모든 프로퍼티를 선택적으로 만드는 Mapped Type
type PartialPerson = {
    [P in keyof Person1]?: Person[P]
};

// 모든 프로퍼티를 읽기 전용으로 만드는 Mapped Type
type ReadonlyPerson = {
    readonly [P in keyof Person1]: Person[P]
};

// 모든 프로퍼티의 타입을 문자열로 변환하는 Mapped Type
type StringifiedPerson = {
    [P in keyof Person1]: string
};

// 위와 같이 Person이라는 값으로 만들거나 두 변수의 형태가 string 형태가 되게 만드는 것을 의미
