// TypeGuards: 특정 조건 내에서 변수의 타입을 보장하는 기능

// 1. typeof를 이용한 타입 가드

function printValue(value: number | string) {// 문자열이 들어오거나 숫자가 들어온다.
    if (typeof value === "string") {// 문자열인지 typeof를 통해서 확인
      console.log(value.toUpperCase());  // 문자열인 경우 대문자로 변환
    } else {
      console.log(value.toFixed(2));     // 숫자인 경우 소수점 두 자리로 포맷
    }
  }

printValue("hello");
printValue(123.456);


// 2. 사용자 정의 타입 가드 (parameter is Type)

interface Bird {
    fly: () => void;
    layEggs: () => void;
  }
  
  interface Fish {
    swim: () => void;
    layEggs: () => void;
  }
  
  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }
  
  function getPetActions(pet: Fish | Bird) {
    if (isFish(pet)) {
      pet.swim();
    } else {
      pet.fly();
    }
    pet.layEggs();
  }
  
  const fish: Fish = {
    swim: () => console.log("swimming"),
    layEggs: () => console.log("laying eggs")
  };
  
  const bird: Bird = {
    fly: () => console.log("flying"),
    layEggs: () => console.log("laying eggs")
  };
  
  getPetActions(fish);  // 실행 결과: swimming, laying eggs
  getPetActions(bird);  // 실행 결과: flying, laying eggs
  

// 다음에 추가로 공부할 개념
// 2. 사용자 정의 타입 가드 (parameter is Type)
