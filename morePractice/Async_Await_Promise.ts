// Async/Await: 비동기 코드를 동기적으로 보이게 만들어서 처리하는 문법입니다.

async function name1():Promise<number> {
    return 42;
}

async function name2() {
    let number = await name1();
}

// promise 여러 방식과 async, await에 관한 개념 추가 필요