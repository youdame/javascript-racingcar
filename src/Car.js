/*
  - 입력 받은 이름으로 자동차를 만든다. - domain -> `Car`
  - 이름은 5자 이하만 가능하다. - domain
 */

const MAX_NAME_LENGTH = 5;

class Car {
  constructor(name) {
    if (name.length > MAX_NAME_LENGTH) {
      throw new Error();
    }
    this.name = name;
    this.position = 0;
  }

  /*
  
  랜덤 값은 모킹 없이 어떻게 테스트하지? -> 모킹을 하기 보다는 분리를 해라
  랜덤값을 뽑아내는 걸 굳이 테스트해야 하는가?
  우린 자동차가 정해진 범위의 숫자를 받으면 전진하는지만 테스트하면 된다
  */
  move(condition) {
    // const random = Math.floor(Math.random() * 10);

    if (condition >= 4) {
      this.position += 1;
    }
  }
}

export default Car;
