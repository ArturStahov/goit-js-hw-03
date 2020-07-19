"use strict";

const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const keys in user) {
  console.log(`keys:${keys}-values:${user[keys]}`);
}

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key} : ${user[key]}`);
}
