import Car from "../src/Car.js";
import findWinner from "../src/findWinner.js";

test("우승자를 판단할 수 있다. (가장 멀리 간 자동차)", () => {
  const car1 = new Car("마빈맨");
  const car2 = new Car("상추신");

  car2.move(5);
  car2.move(5);
  const winner = findWinner([car1, car2]);

  expect(winner[0]).toBe(car2);
});
