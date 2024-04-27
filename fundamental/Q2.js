// Write a JavaScript program to target a given value in a nested JSON object based on the given key.

const searchFunc = (obj, target) => {
  // target in obj
  //   ? obj[target]
  //   : Object.values(obj).reduce((acc, val) => {
  //       if (acc !== undefined) return acc;
  //       if (typeof val === "object") {
  //         return searchFunc(val, target);
  //       }
  //     }, undefined);
  console.log(
    Object.values(obj).reduce((acc, val) => {
      return acc;
      // if (typeof val === "object") {
      //   return searchFunc(val, target);
      // }
    }, undefined)
  );
};

const data = {
  level1: {
    level2: {
      level3: "some data",
    },
  },
};
searchFunc(data, "level3");
// console.log(searchFunc(data, "level3"));
