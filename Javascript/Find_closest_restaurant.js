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
  let closest = [];

  // Append the closest restaurant and return it
  if (crdist <= mrdist) {
    closest.push(restaurant[0]);
  }
  if (mrdist <= crdist) {
    closest.push(restaurant[1]);
  }
  return closest.sort();
}

// def find_farthest_restaurant_in_neighbourhood(x, y):
//     """
//     Function that takes 2 float as coordinate and return the farthest
//     restaurant to the coordinate in the coordinate neighbourhood
//     """
//     restaurant = find_all_restaurants_in_neighbourhood(x, y)

//     # Calculating the distance between MR and CR restaurant to the coordinate
//     mrdist = distance(mrlocation(x, y), (x, y))
//     crdist = distance(crlocation(x, y), (x, y))
//     farthest = []

//     # Append the farthest restaurant and return it
//     if crdist >= mrdist:
//         farthest.append(restaurant[0])
//     if mrdist >= crdist:
//         farthest.append(restaurant[1])
//     return sorted(farthest)


// def all_neighbourhood_coordinate():
//     """
//     Function that produce all neighbourhood in terms of coordinates and return
//     it in form of list
//     """
//     possiblegrid = []
//     for y in range(0, 10):
//         for x in range(0, 10):
//             possiblegrid.append((x, y))
//     return possiblegrid

// def find_closest_restaurant(x, y):
//     """
//     Function that takes 2 float as coordinate and
//     return the closest restaurant in Gridbourne to the coordinate
//     """
//     possiblelist = []
//     closestresto = []
//     possiblegrid = all_neighbourhood_coordinate()

//     # Find the distance from the coordinate to all restaurants in Gridbourne
//     for axis in possiblegrid:
//         restaurant = find_all_restaurants_in_neighbourhood(axis[0], axis[1])
//         crdist = distance(crlocation(axis[0], axis[1]), (x, y))
//         mrdist = distance(mrlocation(axis[0], axis[1]), (x, y))
//         possiblelist.append([restaurant[0], crdist])
//         possiblelist.append([restaurant[1], mrdist])

//     # Find the distance of closest restaurants in Gridbourne to the coordinate
//     mindist = possiblelist[0][1]
//     for dist in possiblelist:
//         if dist[1] < mindist:
//             mindist = dist[1]

//     # Append and return the restaurants with the closest distance
//     for resto in possiblelist:
//         if mindist == resto[1]:
//             closestresto.append(resto[0])
//     return sorted(closestresto)

// def find_closest_restaurant_on_path(list_of_stops):
//     """
//     Function that takes lists of coordinates and return the closest restaurant
//     to each coordinates in the list in form of list of list
//     """
//     pathlist = []

//     # Append the closest restaurants of each coordinates
//     for lis in list_of_stops:
//         closest = find_closest_restaurant(lis[0], lis[1])
//         pathlist.append(closest)
//     return pathlist
