const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

console.log(add(1)(2)(3));
