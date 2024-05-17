function hello(name0, name1) {
  console.log(name0);
}
hello("ervin", "handi");

const sum = (num1, num2, num3) => {
  const result = num1 + num2 + num3;
  return result;
  //console.log(result);
};

// const tambah = sum(10, 20, 30);
// console.log(tambah);
const bagi = (pembagi) => {
  const angka = sum(10, 20, 30);
  const result = angka / pembagi;
  return result;
};

console.log(bagi(2));
