import Car from "../src/Car.js";

test("자동차는 이름을 가져야한다.", () => {
  // given

  const name = "담이";

  // when
  const car = new Car(name);
  // then
  expect(car.name).toBe(name);
});

test.each(["아주 긴 자동차"])("자동차 이름은 5자 이하여야한다.", (name) => {
  // 0, 1, 2, 3, 4, 5, 6 중 보통은 경계값을 검증한다.
  // given
  // when

  // then

  expect(() => {
    const car = new Car();
  }).toThrow();
});
