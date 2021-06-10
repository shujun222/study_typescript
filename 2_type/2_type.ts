// 1. number
let a: number
a = 3

// 2. string
let b: string
b = "hello"

// 3. boolean
let c: boolean
c = false

// 4. 字面量; 只能区列举的值本身
let d: 'male' | 'female' | 1 | 0
d = "male"
d = 1
// d = "hello"

// 5. any; 不写默认就算隐式的any
let e: any
e = 2
e = "hello"
let e2
e2 = 2
e2 = "hello"

// 6. unknown; 安全类型的any; 所以any能不用就不要用了
let f: unknown
f = 2
f = "hello"
let f4: number
f4 = e2

// f4 = f  // Type 'unknown' is not assignable to type 'number'.ts(2322)
// 为了解决这种无聊的问题，可以先判断
if (typeof f === "number")
   f4 = f
// 或者强转
f4 = f as number
f4 = <number> f

// 7. void; 一般用来赋值函数
let h: void
h = null
// h = "say"
function h_fun(): void {
    console.log(666);
}

// 8. nerver; nerver只能用来给函数报错用
let i: never
// i = 2
function i_fun(): never {
    throw new Error("error...");
}

// 9. object
let j1: {name: string}
j1 = {name: 'sbjun'}
// h1 = {name: 'shujun', age:32} //不让新增属性了
let j2: {name: string, age?: number}
j2 = {name: 'shujun', age:32} 
let j3: {name: string, [propName: string]: any}
j3 = {name: 'shujun', age:32, sex:'male'} 

// 万物皆对象，其实函数也可以看作对象
let j4: (a:number, b:number) => number
j4 = (a1, a2) => (a1+a2)
// h4 = (a1, a2, a3) => (a1+a2)

// 10. array类型
// a. string[]
let k1: string[]
k1 = ["2", "1"]
// k1 = ["2", "1", 1]
// b. Arrya<type>
let k2: Array<string>
k2 = ["2", "1"]

// 11. tuple
/**
 * python中的tup是不可被修改的；
 * 例如 tuple = ('physics', 'chemistry', 1997, 2000), tuple[1] = 2是会报错滴
 * ts中的tuple只是取到type和数组长度限制，里面的value还是可以改的
 */
let l: [string, number]
l = ["shujun", 32]
// l = ["shujun", '32']
// l = ["shujun", 32, 'male']

// 12. 枚举类型
enum gender {
    male= 0,
    female= 1
}
let sex: gender
sex = 0
sex = gender.male
// sex = "boy"


// 还可以定义类型别名
type scores = 80 | 85 | 90 | 95 | 97 | 99
let math: scores
let english: scores
let phisicle: scores








