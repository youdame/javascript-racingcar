const findWinner = (cars) => {
  const winningPosition = Math.max(...cars.map((car) => car.position));
  return cars.filter((car) => car.position === winningPosition);
};

export default findWinner;
