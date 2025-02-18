import Car from "../src/Car.js";

test("입력받은 이름으로 자동차를 만든다", () => {
  // given

  const name = "소심이";
  // when

  const car = new Car(name);

  // then

  expect(car.name).toBe(name);
});

test("이름은 5자 이하만 가능하다", () => {
  const name = "당당이 버럭이";

  expect(() => {
    new Car(name);
  }).toThrow();
});
