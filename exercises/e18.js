import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  function findMax(obj) {
    const arrayOfKeys = Object.keys(obj);
    const arrayOfValues = Object.values(obj);
    let maxValue = 0;
    let maxYear = "";
    for (let i = 0; i < arrayOfKeys.length; i++) {
      if (arrayOfValues[i] > maxValue) {
        maxValue = arrayOfValues[i];
        maxYear = arrayOfKeys[i];
      }
    }
    return Number(maxYear);
  }

  const listByYear = data.asteroids.reduce((allAsteroids, asteroid) => {
    const currCount = allAsteroids[asteroid.discoveryYear] ?? 0;
    return {
      ...allAsteroids,
      [asteroid.discoveryYear]: currCount + 1,
    };
  }, {});

  const result = findMax(listByYear);
  return result;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
