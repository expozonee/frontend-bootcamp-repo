// 1

function summation(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0] + summation(arr.slice(1));
}

console.log(summation([3, 5, 7, 2]));

// 2

function total(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0].length + total(arr.slice(1));
}

console.log(total([["Paris", "London"], ["Rome", "Florence"], ["New York"]]));

// 3

function find(obj, item) {
  if (Object.values(obj).includes(item)) {
    return true;
  }

  for (const value of Object.values(obj)) {
    if (typeof value === "object" && value !== null) {
      if (find(value, item)) {
        return true;
      }
    }
  }

  return false;
}

console.log(
  find(
    { Europe: { France: "Paris", Italy: "Rome" }, USA: { NY: "New York" } },
    "Rome"
  )
);

// 4

// do average recursively

function average(arr, index = 0, sum = 0) {
  if (index === arr.length) {
    return sum / arr.length;
  }

  return average(arr, index + 1, sum + arr[index]);
}

console.log(average([200, 150, 400, 100]));

// 5

function total(arr) {
  if (arr.length === 0) {
    return 0;
  }

  return arr[0].reduce((a, n) => a + n) + total(arr.slice(1));
}

console.log(total([[100, 200], [150, 300], [50]]));

// 6

function largest(arr, max = 0) {
  if (arr.length === 0) {
    return max;
  }

  if (arr[0] > max) {
    max = arr[0];
  }

  return largest(arr.slice(1), max);
}

console.log(largest([10, 20, 15, 25]));

// 7

function sortArray(arr, index = 0, sortedArr = []) {
  if (index === arr.length) {
    return sortedArr.sort();
  }

  sortedArr.push(...arr[index]);

  return sortArray(arr, index + 1, sortedArr);
}

console.log(
  sortArray([["Paris", "London"], ["Rome", "Florence"], ["New York"]])
);

// 8

function mostExpensive(arr, index = 0, subIndex = 0, max = 0) {
  if (index === arr.length) {
    return max;
  }

  if (arr[index][subIndex] > max) {
    max = arr[index][subIndex];
  }

  if (subIndex === arr[index].length - 1) {
    return mostExpensive(arr, index + 1, 0, max);
  }

  return mostExpensive(arr, index, subIndex + 1, max);
}

console.log(mostExpensive([[500, 300], [800, 200], [1000]]));

// 9

function transferCounter(obj) {
  let counter = 0;

  for (const value of Object.values(obj)) {
    if (value !== null && typeof value === "object") {
      if (value.transfer) {
        counter++;
      }
      counter += transferCounter(value);
    }
  }

  return counter;
}

console.log(
  transferCounter({
    flight1: {
      transfer: "London",
      flight2: { transfer: "New York", flight3: null },
    },
  })
);

// 10

function flatArray(arr, index = 0, subIndex = 0, flatedArray = []) {
  if (index === arr.length) {
    return flatedArray;
  }

  if (Array.isArray(arr[index][subIndex])) {
    flatedArray.push(...arr[index][subIndex]);
  } else {
    flatedArray.push(arr[index][subIndex]);
  }

  if (subIndex === arr[index].length - 1) {
    return flatArray(arr, index + 1, 0, flatedArray);
  }

  return flatArray(arr, index, subIndex + 1, flatedArray);
}
console.log(
  flatArray([["Paris"], ["Rome", ["Florence", "Venice"]], ["New York"]])
);

// 11

function totalMoney(arr, index = 0, sum = 0) {
  if (index === arr.length) {
    return sum;
  }

  Object.values(arr[index]).forEach((value) => {
    if (typeof value === "number") {
      sum += value;
    }
  });

  return totalMoney(arr, index + 1, sum);
}

console.log(
  totalMoney([
    { hotel: 200, food: 100 },
    { hotel: 300, food: 150 },
    { hotel: 250, food: 120 },
  ])
);
