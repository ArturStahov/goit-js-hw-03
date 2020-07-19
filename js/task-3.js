"use strict";

const findBestEmployee = function(employees) {
  const arrayEmployeesValues = Object.values(employees);
  const sortArray = arrayEmployeesValues.sort(function(a, b) {
    return a - b;
  });
  const maxValues = sortArray[sortArray.length - 1];
  for (const keys in employees) {
    if (employees[keys] === Number(maxValues)) {
      return keys;
    }
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38
  })
); // lux
