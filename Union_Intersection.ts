//Union Types: 두 개 이상의 타입을 하나의 타입으로 결합
type StringOrBoolean = string | boolean;

function printId(id: StringOrNumber) {
  if (typeof id === "string") {
    console.log(`ID: ${id.toUpperCase()}`);
  } else {
    console.log(`boolean`);
  }
}

//Intersection Types: 여러 타입을 모두 만족하는 하나의 타입으로 생성

interface BusinessPartner {
    name: string;
    credit: number;
  }
  
  interface Contact {
    email: string;
    phone: string;
  }
  
  type Customer = BusinessPartner & Contact;