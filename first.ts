//Ÿ�Խ�ũ��Ʈ�� �������� �ϸ� javascript �ڵ尡 �Ǵ� ����̴�.

import { AgentArn } from "aws-sdk/clients/datasync";

let a ="hello"
// a = 1 typescript���� ���� �߷��ؼ� �ٸ� ������ ������ ��ȯ�� �� �ǰ� �������

let b : number = 1;
let c : boolean = true;
let d : string = "li";
// :type �� ����� ���������� �������� �˷��ִ� typescript�� ����̴�(TypeChecker)

//�迭�� Ÿ���� ����
let list = []

let e : number[] = [1, 2];
let f : boolean[] = [true, false];
let g : string[] = ["li" ,"ul"];

//�ִ��� typescript�� �߷��ϰ� ����� ����� �� ����

const player1 = {
    name: "jungmin"
}

player1.name = "only String"

// object�� Ÿ�� �����ϱ�
const player2 : {
    name: string,
    age?: number
} = {
    name: "jungmin",
}
//�⺻ ���·� �ۼ��ϸ� require���������� ?�� ����ؼ� �����ϸ� age�� ��� number or undefined���°� �ȴ�

// if(player2.age < 20){} �� �ڵ尡 �� �Ǵ� ������ undefined ������ �� �ֱ� �����̴�.
// if(player2.age < 20 && player2.age){} �� �ڵ尡 �� �Ǵ� ������ &&�� �۵� ����� ���� ���� true�̾�� �ڿ� ������ �Ѿ�� �����ΰ� ����

if(player2.age && player2.age < 20){}

//���� ����� ���ŷӱ� ������ ������ Alias�� �����ϴ�
type Age = number

type Player = {
    readonly name: string,
    age?: Age
}

const player3 : Player = {
    name: "jungmin",
}

function playerMaker1(name:string) : Player {
    return {
        name: name
    }
}

//�Լ��δ� name�� ���� ���̰� �Լ��� �����ϴ� ���� ������ �ִ� ��ĵ� �ٸ� ���� ���� ��İ� �Ȱ���.

const player4 = playerMaker1("jj")

player4.age = 12
// �� ���� ��� Player������ �������� ������ ������ �������� Player������ ���ָ鼭 ������ �������

function playerMaker2(name:string){
    return {
        name: name
    }
}

const player5 = playerMaker2("jj")
//player5.age ������ �����

//ȭ��ǥ �Լ�
const playerMaker3 = (name:string) : Player => ({
    name:name
})

const player6 = playerMaker1("jungminLee")
player6.age = 20

// player6.name = "k"
// readonly�� ���� �����ϰ� �ٲ��� ���ϰ� �����
// list�� ����ϸ� ���� push ���� �ʴ´�.
//��, �������� �ο��Ѵٰ� �����ϸ� �ȴ�

const player7: [string, number, boolean] = ["nico", 1, true]// Tuple

// �� �ڵ�� readonly�� ��� ����

let h : undefined = undefined
let i : null = null

//any�� typeScript���� ���������� ������ ����ϴ� ����̴�.

const arr: any[] = [1,2,3,4]
const bool: any = true

arr+bool// �׷��� ���� �� �Ǵ� ������ ����������

// unknown�� ��� Ÿ���̵� �Ҵ��� �����ϴ�.
let value: unknown = 'type';
value = 10;
value = true;

// ������ Ÿ�� üũ�� ���� ������ �����Ϸ� ������ ���ܼ� ����� �Ұ����ϴ�
if(typeof value === "string") {
    console.log(value)
}

// console.log(value) ��� �Ұ���

//void�� �Լ����� ��ȯ ���� ���ٴ� ���� ǥ�� �� �� ����ϴ� ��
function voidPrac(param: string): void {
    console.log(param);
}

//never

// �� �Լ��� ���� ���������� ������� �ʽ��ϴ�.
function error(message: string): never {
    throw new Error(message); // ���ܸ� �߻���Ű�� ����˴ϴ�.
  }
  
  function infiniteLoop(): never {
    while (true) {
      // ���� ������ ���� �Լ��� ���� ������� �ʽ��ϴ�.
    }
  }

  // �ʿ伺
  // �ڵ��� Ư�� �κ��� ������� �ʵ��� ����� ��쿡 Ÿ�� �������� �����ϴ� �� �ſ� �߿��ϴ�.
  // ��, ����ġ �� �� ���̳� ���¿� ���� ó���� ���� �� �ʿ䰡 ����.
  