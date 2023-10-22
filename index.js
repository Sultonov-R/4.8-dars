// function reverse(n) {
//     if (n == 0) {
//         return;
//     }
//     console.log(n);
//     reverse(n-1);
// }
// console.log(reverse(10));

// let person = {
//     name: "John",
//     surname: "Doe",
//     age: 30,
//     phone: [
//         "123", "457", "546"
//     ],
//     family: {
//         dad: 'Alex',
//         mom: 'Sara',
//         brother: 'Jack'
//     },

//     about() {
//         console.log("salom bolalar")
//     }
// };

// person.age = 40;
// delete person.phone;
// person.email = "test@gmail.com";
// console.log(person);
// person.about(2)

//  1) fibonachi sonlar

// let n = +prompt("sonni kiriting: ");
// let res = fibonnaciNumber(n);
// function fibonnaciNumber(n) {
//   if (n <= 1) {
//     return n;
//   } else {
//     return fibonnaciNumber(n - 1) + fibonnaciNumber(n - 2);
//   }
// }
// console.log(res);

// 2)

// let user1 = {
//     name : 'Rozali',
//     surname : 'Sultonov',
//     age : 20
// };

// let user2 = {
//     name : 'Muhammaddiyor',
//     surname : 'Karimov',
//     age : 20
// }

// let user3 = {
//     name : 'Sirojiddin',
//     surname : 'Mamirov',
//     age : 20
// }

// let user = [user1, user2, user3];
// let res = (user1.age + user2.age + user3.age )/3;
// console.log(res);

// 3)

// let a = +prompt('1-sonni kiriting: ');
// let result;

// function method() {
//     if (a % 2 === 1) {
//         result = Math.pow(a, 3);
//     } else {
//         result = Math.pow(a, 2);
//     }
// }

// method(a);
// localStorage.setItem('son', result.toString());

// 4)
//  function User(name, surname, age, hobby ){
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.hobby = hobby;
//  }

//   const user1 = new User("Ali", "Aliyev", 25, "Playing Football")  ;

//   User();

//   console.log(user1.name);

// 9)

// const object1 = {
//   name: "Ali",
//   surname: "Aliyev",
//   age: 20,
// };

// function getAllValues(obj) {
//   let value = [];

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)){
//         value.push(obj[key]);
//     }
    
//   }
//   return value;
// }
// console.log(getAllValues(object1));


// 10)


