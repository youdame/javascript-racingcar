/*
  - 입력 받은 이름으로 자동차를 만든다. - domain -> `Car`
  - 이름은 5자 이하만 가능하다. - domain
 */

class Car {
  constructor(name) {
    if (name.length > 5) {
      throw new Error();
    }
    this.name = name;
  }
}

export default Car;
