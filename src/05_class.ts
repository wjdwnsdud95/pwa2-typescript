// ---------------------------
// Class: 객체를 정의하기 위한 집합, 타입으로 사용 가능
// 클래스명은 파스칼케이스로 작성(첫 글자는 대문자로 작성)
// 파일명은 클래스명과 동일하게 작성
// 기본적으로 한 시스템 내에서 클래스명은 중복x

class Animal {
    // ---------------------------
    // Field 정의
    // ---------------------------
    // 인스턴스 필드
    public name: string = '동물';
    // 정적(static) 필드
    public static sName: string = '스테틱 이름';

    // ---------------------------
    // 메소드 정의
    // ---------------------------
    // 인스턴스 메소드
    public getName(): string {
        return '인스턴스 메소드';
    }

    // 정적 메소드
    public static getSName(): string {
        return '정적 메소드';
    }
}

// 정적 필드 접근 방식(클래스명을 통해 바로 접근)
Animal.sName;
Animal.getSName();

// 인스턴스 필드 접근 방식(새로 생성된 객체를 변수에 저장)
const animal: Animal = new Animal();
animal.name;
animal.getName();

// ---------------------------
// 생성자 메소드: 객체가 생성될 때 자동으로 호출되는 특수한 메소드
// ---------------------------
class Whale {
    // public name: string;
    // 생성자 메소드
    // 객체의 인스턴스 생성 시 실행되어야 하는 작업들을 위해서 사용
    // constructor(name: string) {
    //     this.name = name;
    // }

    // 생성자 단축 속성(Parameter Propertise)
    // 생성자 파라미터 앞에 접근 제한자를 붙이면 필드 선언과 초기화를 한번에 가능
    constructor(public name: string) {
        this.name = name;
    }
}
const whale1: Whale = new Whale('라분');
const whale2: Whale = new Whale('상쾡이');