const { PI } = Math;

module.exports.circleArea = (r) => {
  const area = PI * r ** 2;
  console.log(`The area of a circle with radius ${r} is ${area}`);
};

module.exports.circleCircumference = (r) => {
  const circumference = 2 * PI * r;
  console.log(
    `The circumference of a circle with radius ${r} is ${circumference}`
  );
};
