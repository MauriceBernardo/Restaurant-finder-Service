//  Initialize the grid of the neighbourhood
const neighbourhood = [];
for (const row of ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']) {
  const temp = [];
  for (let i = 0; i < 11; i++) {
    temp.push(row + String(i));
  }
  neighbourhood.push(temp);
}

export function find_my_neighbourhood(x, y) {
  /**
    * Function that takes 2 float as coordinate and
    * return the neighbourhood of the coordinate
    */
  try {
    return neighbourhood[Math.floor(Number(y))][Math.floor(Number(x))];
  } catch (e) {
    throw new e();
  }
}


export function find_all_restaurants_in_neighbourhood(x, y) {
  /**
    *  Function that takes 2 float as coordinate and
    *  return the restaurants in the neighbourhood of the coordinate.
    */
  const target = find_my_neighbourhood(x, y);
  return [`${target}CR`, `${target}MR`];
}

export function mrlocation(x, y) {
  /**
    * Function that takes 2 float as coordinate and return the array
    * of the coordinate of middle restaurant in that coordinate neighbourhood
    */
  const mrloc = [Math.floor(Number(x)) + 0.5, Math.floor(Number(y)) + 0.5];
  return mrloc;
}

export function crlocation(x, y) {
  /**
    * Function that takes 2 float as coordinate and return the array
    * of the coordinate of corner restaurant in that coordinate neighbourhood
    */
  const crloc = [Math.floor(Number(x)), Math.floor(Number(y))];
  return crloc;
}

export function distance(point1, point2) {
  /**
    * Function that takes 2 array coordinate and return the Euclidian distance
    * between them
    */
  return Math.sqrt((point1[0] - point2[0]) ** 2 + (point1[1] - point2[1]) ** 2);
}

export function find_closest_restaurant_in_neighbourhood(x, y) {
  /**
    * Function that takes 2 float as coordinate and return the closest
    * restaurant to the coordinate in the coordinate neighbourhood
    */
  const restaurant = find_all_restaurants_in_neighbourhood(x, y);

  // Calculating the distance between MR and CR restaurant to the coordinate
  const mrdist = distance(mrlocation(x, y), [x, y]);
  const crdist = distance(crlocation(x, y), [x, y]);
  const closest = [];

  // Append the closest restaurant and return it
  if (crdist <= mrdist) {
    closest.push(restaurant[0]);
  }
  if (mrdist <= crdist) {
    closest.push(restaurant[1]);
  }
  return closest.sort();
}

export function find_farthest_restaurant_in_neighbourhood(x, y) {
  /**
    * Function that takes 2 float as coordinate and return the farthest
    * restaurant to the coordinate in the coordinate neighbourhood
    *
    */

  const restaurant = find_all_restaurants_in_neighbourhood(x, y);

  //  Calculating the distance between MR and CR restaurant to the coordinate
  const mrdist = distance(mrlocation(x, y), [x, y]);
  const crdist = distance(crlocation(x, y), [x, y]);
  const farthest = [];

  //  Append the farthest restaurant and return it
  if (crdist >= mrdist) {
    farthest.push(restaurant[0]);
  }
  if (mrdist >= crdist) {
    farthest.push(restaurant[1]);
  }
  return farthest.sort();
}


export function all_neighbourhood_coordinate() {
  /**
    * Function that produce all neighbourhood in terms of coordinates and return
    * it in form of list
    */

  const possiblegrid = [];

  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      possiblegrid.push([x, y]);
    }
  }

  return possiblegrid;
}

export function find_closest_restaurant(x, y) {
  /**
     * Function that takes 2 float as coordinate and
     * return the closest restaurant in Gridbourne to the coordinate
     *
     */

  const possiblelist = [];
  const closestresto = [];
  const possiblegrid = all_neighbourhood_coordinate();

  //  Find the distance from the coordinate to all restaurants in Gridbourne
  for (const axis of possiblegrid) {
    const restaurant = find_all_restaurants_in_neighbourhood(axis[0], axis[1]);
    const crdist = distance(crlocation(axis[0], axis[1]), [x, y]);
    const mrdist = distance(mrlocation(axis[0], axis[1]), [x, y]);
    possiblelist.push([restaurant[0], crdist]);
    possiblelist.push([restaurant[1], mrdist]);
  }

  //  Find the distance of closest restaurants in Gridbourne to the coordinate
  let mindist = possiblelist[0][1];
  for (const dist of possiblelist) {
    if (dist[1] < mindist) {
      mindist = dist[1];
    }
  }

  //  Append and return the restaurants with the closest distance
  for (const resto of possiblelist) {
    if (mindist === resto[1]) {
      closestresto.push(resto[0]);
    }
  }
  return closestresto.sort();
}

export function find_closest_restaurant_on_path(list_of_stops) {
  /**
    * Function that takes lists of coordinates and return the closest restaurant
    * to each coordinates in the list in form of list of list
    */
  const pathlist = [];

  //  Append the closest restaurants of each coordinates
  for (let arr of list_of_stops) {
    const closest = find_closest_restaurant(arr[0], arr[1]);
    pathlist.push(closest);
  }
  return pathlist;
}
