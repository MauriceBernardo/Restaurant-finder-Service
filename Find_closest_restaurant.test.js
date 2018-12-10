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

describe('Find restaurant in neighbourhood function', () => {
  it('should return the right closest restaurants', () => {
    expect(closestRestaurant.find_closest_restaurant_in_neighbourhood(0, 0)).toEqual(['A0CR']);
    expect(closestRestaurant.find_closest_restaurant_in_neighbourhood(0.25, 0.25)).toEqual(['A0CR', 'A0MR']);
    expect(closestRestaurant.find_closest_restaurant_in_neighbourhood(5.75, 5.75)).toEqual(['F5MR']);
  });

  it('should return the right farthest restaurants', () => {
    expect(closestRestaurant.find_farthest_restaurant_in_neighbourhood(0, 0)).toEqual(['A0MR']);
    expect(closestRestaurant.find_farthest_restaurant_in_neighbourhood(0.25, 0.25)).toEqual(['A0CR', 'A0MR']);
    expect(closestRestaurant.find_farthest_restaurant_in_neighbourhood(5.75, 5.75)).toEqual(['F5CR']);
  });
});

describe('All neighbourhood coordinates function', () => {
  const allCoordinates = [
    [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0],
    [0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [5, 1], [6, 1], [7, 1], [8, 1], [9, 1],
    [0, 2], [1, 2], [2, 2], [3, 2], [4, 2], [5, 2], [6, 2], [7, 2], [8, 2], [9, 2],
    [0, 3], [1, 3], [2, 3], [3, 3], [4, 3], [5, 3], [6, 3], [7, 3], [8, 3], [9, 3],
    [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [5, 4], [6, 4], [7, 4], [8, 4], [9, 4],
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5], [6, 5], [7, 5], [8, 5], [9, 5],
    [0, 6], [1, 6], [2, 6], [3, 6], [4, 6], [5, 6], [6, 6], [7, 6], [8, 6], [9, 6],
    [0, 7], [1, 7], [2, 7], [3, 7], [4, 7], [5, 7], [6, 7], [7, 7], [8, 7], [9, 7],
    [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [6, 8], [7, 8], [8, 8], [9, 8],
    [0, 9], [1, 9], [2, 9], [3, 9], [4, 9], [5, 9], [6, 9], [7, 9], [8, 9], [9, 9]];
  it('should return the right array', () => {
    expect(closestRestaurant.all_neighbourhood_coordinate()).toEqual(allCoordinates);
  });
});


describe("find closest restaurant function", () => {
  it("should return the right restaurant in sorted format", () => {
    expect(closestRestaurant.find_closest_restaurant(0.75,0.75)).toEqual(["A0MR","B1CR"]);
    expect(closestRestaurant.find_closest_restaurant(0.8,0.75)).toEqual(["B1CR"]);
    expect(closestRestaurant.find_closest_restaurant(9,9.5)).toEqual(["J8MR", "J9CR", "J9MR"]);
  });

  it("should return the closest restaurant on each path", () => {
    expect(closestRestaurant.find_closest_restaurant_on_path([[0,0],[1,1]])).toEqual([["A0CR"],["B1CR"]])
  })
})



