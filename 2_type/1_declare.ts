// 防止编译js后，报错：Cannot redeclare block-scoped variable 'a'.ts(2451)：a' was also declared here.
export {}


// 如何声明类型？

// 1. 变量
// 1.1 let 变量名: 类型
let a: number
a = 1
// a = "hello"  // 警告报错
// a = [2, 3]
console.log(a);

// 1.2 赋值，自动推断
let b = 1
b = 3
// b = "hello"
console.log(b);


// 2. 函数
// 参数使用“变量名: 类型”， 返回值也可以使用这种类型申明
// 如果返回值不申明类型，那么由return值自动推断
function add(a: number, b: number) {
    return a + b 
    // return a + b + ""
}

console.log(add(1, 2));
// console.log(add(1, "2"));




