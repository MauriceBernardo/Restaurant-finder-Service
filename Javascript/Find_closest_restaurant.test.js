import * as closestRestaurant from './Find_closest_restaurant';

describe('find my neighbourhood', () => {
  function findFail() {
    closestRestaurant.find_my_neighbourhood(10, 10);
  }

  it('should return the right neighbourhood based on index', () => {
    expect(closestRestaurant.find_my_neighbourhood(0, 0)).toEqual('A0');
    expect(closestRestaurant.find_my_neighbourhood(9, 9)).toEqual('J9');
    expect(closestRestaurant.find_my_neighbourhood(5, 2)).toEqual('C5');
  });

  it("should throw error when it's accessed with invalid index", () => {
    expect(findFail).toThrowError(Error);
  });
});

describe('find all restaurant in neighbourhood', () => {
  it('should return an array of center and middle restaurant', () => {
    expect(closestRestaurant.find_all_restaurants_in_neighbourhood(0, 0)).toEqual(['A0CR', 'A0MR']);
    expect(closestRestaurant.find_all_restaurants_in_neighbourhood(9, 9)).toEqual(['J9CR', 'J9MR']);
  });
});

describe('Restaurant Coordinate function', () => {
  it('should return the right middle coordinate value', () => {
    expect(closestRestaurant.mrlocation(0, 0)).toEqual([0.5, 0.5]);
    expect(closestRestaurant.mrlocation(4.3, 0.6)).toEqual([4.5, 0.5]);
  });

  it('should return the right corner coordinate value', () => {
    expect(closestRestaurant.crlocation(0.7, 0.9)).toEqual([0, 0]);
    expect(closestRestaurant.crlocation(7.9, 5)).toEqual([7, 5]);
  });
});

describe('Euclidian distance function', () => {
  it('should return the right value', () => {
    expect(closestRestaurant.distance([0, 0], [0, 0])).toEqual(0);
    expect(closestRestaurant.distance([0, 5], [7, 8])).toEqual(Math.sqrt(58));
    expect(closestRestaurant.distance([0.5, 1], [2.7, 0.1])).toEqual(Math.sqrt(2.2 ** 2 + 0.9 ** 2));
  });
});

