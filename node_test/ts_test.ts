// import 'reflect-metadata';


// var Point = (function () {
//     function Point(x, y) {
//         this.x = x;
//         this.y = y;
//     }
//     Point.prototype.add = function (point) {
//         return new Point(this.x + point.x, this.y + point.y);
//     };
//     return Point;
// })();

// class Point {
//     x: number;
//     y: number;
//     constructor(x: number, y: number) {
//         this.x = x;
//         this.y = y;
//     }
//     add(point: Point) {
//         return new Point(this.x + point.x, this.y + point.y);
//     }
// }

// var a = new Point(1,5)
// var b = new Point(1,6)
// var count = a.add(b);
// console.log(count) //Point { x: 2, y: 11 }

// function foo<T>(x:T){
//     return x
// }

// const foo = <T>(x:T) => x

// const foo = <T extends string>(x: T) => x;
// const foos = <T as number>(y: T) => y

// console.log(foo('1'))
// console.log(foos(2))

// let a:{x: string | null} = { x: 'ok' };
// function alert() {
//     a.x = null;
// }

// function fn(arg: { x: string | null }) {
//     if (arg.x !== null) {
//         alert('All is OK!');
//         // Flow: Not OK, arg.x could be null
//         console.log(arg.x) // null
//         console.log(arg.x.substr(3));
//     }
// }

// let a:string | null = 'ok'
// function alert() {
//     a = null;
// }

// function fn1(x: string | null) {
//     if(x !== null){
//         alert('All is ok');
//         console.log(x);
//         console.log(x.substr(3));
//     }
// }

// function fn2(x: string | null) {
//     function check1() {
//         x = 'still OK';
//     }

//     if (x !== null) {
//         check1();
//         // Flow: Error, x could be null
//         console.log(x)
//         console.log(x.substr(0));
//     }
// }

// function fn3(x: string | null) {
//     function check1() {
//         check2();
//     }
//     function check2() {
//         x = null;
//     }
//     // if (typeof x === 'string') {
//     if (x !== null) {
//         check1();
//         // Flow: No error
//         console.log(x)
//         console.log(x.substr(0)); // crashes
//     }
// }

// // fn1(a);
// // fn2(a);
// fn3(a);

// function fn4(a: string|null){
//     if(a !== null){
//         a = null
//         if(a === null){
//             console.log(a)
//         }
//     }
// }

// fn4(a)

// interface a {
//     x: string
// }

// interface a {
//     y: number
// }

// type b = {
//     x: string
// }

// type b = {
//     y: number
// }
// let A:a = {
//     x:'q',
//     y: 1
// }
// console.log(A)

// const value: unknown = "Hello World";
// const someString: string = value as string;
// const otherString = someString.toUpperCase();
// console.log(otherString)

//1
// function logName(something: { name: string }) {
//   console.log(something.name);
// }

// logName({ name: 'matt' }); // ok
// logName({ name: 'matt', job: 'being awesome' });

//2
// function logName(something: { name: string }) {
//     console.log(something.name);
// }

// const person = { name: 'matt', job: 'being awesome' };
// const animal = { name: 'cow', diet: 'vegan, but has milk of own specie' };
// const randow = { note: `I don't have a name property` };

// logName(person); // ok
// logName(animal); // ok
// logName(randow);

//脚注

// class Animal {
//   constructor(public name: string) {}
// }
// class Cat extends Animal {
//   meow() {
//     console.log('cat');
//   }
// }

// let animal = new Animal('animal');
// let cat = new Cat('cat');

// // 多态
// // Animal <= Cat

// animal = cat; // ok
// cat = animal; // ERROR: cat 继承于 animal

// // 演示每个数组形式
// let animalArr: Animal[] = [animal];
// let catArr: Cat[] = [cat];

// // 明显的坏处，逆变
// // Animal <= Cat
// // Animal[] >= Cat[]
// catArr = animalArr; // ok, 如有有逆变
// catArr[0].meow(); // 允许，但是会在运行时报错

// // 另外一个坏处，协变
// // Animal <= Cat
// // Animal[] <= Cat[]
// animalArr = catArr; // ok，协变

// animalArr.push(new Animal('another animal')); // 仅仅是 push 一个 animal 至 carArr 里
// catArr.forEach(c => c.meow()); // 允许，但是会在运行时报错。

// interface Point2D {
//     x: number;
//     y: number;
//   }

//   interface Point3D {
//     x: number;
//     y: number;
//     z: number;
//   }

//   const point2D: Point2D = { x: 0, y: 10 };
//   const point3D: Point3D = { x: 0, y: 10, z: 20 };
//   function iTakePoint2D(point: Point2D) {
//     /* do something */
//   }

//   iTakePoint2D(point2D); // ok, 完全匹配
//   iTakePoint2D(point3D); // 额外的信息，没关系
//   iTakePoint2D({ x: 0 }); // Error: 没有 'y'

// function本身作为参数而成为callback时，ts会忽略参数个数,但是不能传递超过定义参数数量的参数
// function handler(arg:string){
//     console.log(arg)
// }
// function doSomething(callback: (arg1: string, arg2: number) => void) {
//     callback('aa',1)
// }

// doSomething(handler)

// let items = [1,2,3]
// items.forEach(arg => console.log(arg))

// function x(name:any,age:any){
//     console.log('a')
// }

// function y(callback:any){
//     callback()
// }
// y(x)

// type SomeUrl = string;
// type FirstName = string;
// let x: SomeUrl = "http://www.typescriptlang.org/";
// let y: FirstName = "Bob";
// x = y; // Expected error

// type SomeUrl = string & {'this is a url': {}};
// type FirstName = string & {'person name': {}};

// // Add type assertions
// let x = <SomeUrl>'';
// let y = <FirstName>'bob';
// x = y; // Error

// // OK
// let xs: string = x;
// let ys: string = y;
// xs = ys;

// interface ScreenCoordinate {
//   x: number;
//   y: number;
// }
// interface PrintCoordinate {
//   x: number;
//   y: number;
// }

// interface ScreenCoordinate {
//   _screenCoordBrand: any;
//   x: number;
//   y: number;
// }
// interface PrintCoordinate {
//   _printCoordBrand: any;
//   x: number;
//   y: number;
// }

// function sendToPrinter(pt: PrintCoordinate) {
//   // ...
//   console.log(pt);
// }

// function getCursorPos(): ScreenCoordinate {
//   // Not a real implementation
//   return <ScreenCoordinate>{ x: 0, y: 0 };
// }

// // function getCursorPos(): ScreenCoordinate {
// //   // Not a real implementation
// //   return { x: 0, y: 0 };
// // }

// // This should be an error
// sendToPrinter(getCursorPos());

// let x: any = true;
// let y = <string>x; // Expected: runtime error (can't convert boolean to string)
// console.log(y)

// let a: any = 'hmm';
// let b = a as HTMLElement; // expected b === null
// console.log(b)

// let myFunc: (number:number) => string = (n) => 'The number in hex is ' + n.toString(16);
// // Expected error because boolean is not number
// console.log(myFunc(true));

// var x: (n: string) => void = (s) => console.log(s.ToUpper());

// 事件等级
// interface Event {
//   timestamp: number;
// }
// interface MouseEvent extends Event {
//   x: number;
//   y: number;
// }
// interface KeyEvent extends Event {
//   keyCode: number;
// }

// // 简单的事件监听
// enum EventType {
//   Mouse,
//   Keyboard,
// }
// function addEventListener(eventType: EventType, handler: (n: Event) => void) {
//   // ...
// }

// // 不安全，但是有用，常见。函数参数的比较是双向协变。
// addEventListener(EventType.Mouse, (e: MouseEvent) =>
//   console.log(e.x + "," + e.y)
// );

// // 在安全情景下的一种不好方案
// addEventListener(EventType.Mouse, (e: Event) =>
//   console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y)
// );
// addEventListener(EventType.Mouse, <(e: Event) => void>(
//   ((e: MouseEvent) => console.log(e.x + "," + e.y))
// ));

// // 仍然不允许明确的错误，对完全不兼容的类型会强制检查
// addEventListener(EventType.Mouse, (e: number) => console.log(e));

//仅仅只有实例属性和方法会相比较,构造函数和静态成员不会被检查
// class Animal {
//   feet: number = 0;
// //   protected name: string = ''
// //   static age: number = 0
//   constructor(name: string, numFeet: number) {}
// }

// class Size {
//   feet: number = 0;
//   constructor(meters: number) {}
// }

// let a: Animal;
// let s: Size;

// a = s; // OK
// s = a; // OK

// class List<T> {
//   add(val: T) {}
// }

// class Animal {
//   name: string = '';
// }
// class Cat extends Animal {
//   meow() {
//     // ..
//   }
// }

// //多态
// // cat > Animal

// const animals = new List<Animal>();
// animals.add(new Animal()); // ok
// animals.add(new Cat()); // ok

// const cats = new List<Cat>();
// cats.add(new Animal()); // Error
// cats.add(new Cat()); // ok


// class Animal {
//   constructor(public name: string) {}
// }
// class Cat extends Animal {
//   meow() {
//     console.log("cat");
//   }
// }

// let animal = new Animal("animal");
// let cat = new Cat("cat");

// // 多态
// // Animal <= Cat

// animal = cat; // ok
// cat = animal; // ERROR: cat 继承于 animal

// // 演示每个数组形式
// let animalArr: Animal[] = [animal];
// let catArr: Cat[] = [cat];

// // 明显的坏处，逆变
// // Animal <= Cat
// // Animal[] >= Cat[]
// catArr = animalArr; // ok, 如果有逆变
// catArr[0].meow(); // 允许，但是会在运行时报错

// // 另外一个坏处，协变
// // Animal <= Cat
// // Animal[] <= Cat[]
// animalArr = catArr; // ok，协变

// animalArr.push(new Animal("another animal")); // 仅仅是 push 一个 animal 至 carArr 里
// catArr.forEach((c) => c.meow()); // 允许，但是会在运行时报错。



// class Foo {
//    get bar() {
//      return 42;
//    }
// }
// let x = new Foo();
// // Expected error here
// x.bar = 10;


// @Reflect.metadata('inClass', 'A')
// class Test {
//   @Reflect.metadata('inMethod', 'B')
//   public hello(): string {
//     return 'hello world';
//   }
// }

// console.log(Reflect.getMetadata('inClass', Test)); // 'A'
// console.log(Reflect.getMetadata('inMethod', new Test(), 'hello')); // 'B'





// const set = new Set()
// const fn1 = () => {}
// const fn2 = () => {}

// const a = {
//   c: 1
// }
// const b = {
//   c: 1
// }

// const x:any = []
// const y:any = []
// set.add(x)
// console.log(set)
// set.add(y)
// console.log(set)
// console.log(x === y)




// Record

// type petsGroup = 'dog' | 'cat' | 'fish';
// interface IPetInfo {
//     name:string,
//     age:number,
// }

// type IPets = Record<petsGroup, IPetInfo>;

// const animalsInfo:IPets = {
//     dog:{
//         name:'dogName',
//         age:2
//     },
//     cat:{
//         name:'catName',
//         age:3
//     },
//     fish:{
//         name:'fishName',
//         age:5
//     }
// }


// type petsGroup = 'dog' | 'cat' | 'fish';
// interface IPetInfo {
//     name:string,
//     age:number,
// }

// type IPets = Record<petsGroup | 'otherAnamial', IPetInfo>;

// const animalsInfo:IPets = {
//     dog:{
//         name:'dogName',
//         age:2
//     },
//     cat:{
//         name:'catName',
//         age:3
//     },
//     fish:{
//         name:'fishName',
//         age:5
//     },
//     otherAnamial:{
//         name:'otherAnamialName',
//         age:10
//     }
// }


// import axios , { AxiosRequestConfig, AxiosResponse } from 'axios'
// enum IHttpMethods {
//   GET = 'get',
//   POST = 'post',
//   DELETE = 'delete',
//   PUT = 'put',
// }

// const methods = ["get", "post", "delete", "put"];

// interface IHttpFn {
//   // <T = any>(url: string, config?: AxiosRequestConfig): Promise<T>
//   <T>(url: string, config?: AxiosRequestConfig): Promise<T>
// }

// type IHttp = Record<IHttpMethods, IHttpFn>;

// const httpMethods: IHttp = methods.reduce((map: any, method: string) => {
//   map[method] = (url: string, options: AxiosRequestConfig = {}) => {
//       const { data, ...config } = options;
//       return (axios as any)[method](url, data, config)
//           .then((res: AxiosResponse) => {
//               if (res.data.errCode) {
//                   //todo somethins
//               } else {
//                   //todo somethins
//               }
//           });
//   }
//   return map
// }, {})

// export default httpMethods;




// interface Cat {
//   name: string;
//   run(): void;
// }
// interface Fish {
//   name: string;
//   swim(): void;
// }

// function isFish(animal: Cat | Fish) {
//   if (typeof (animal as Fish).swim === 'function') {
//       return true;
//   }
//   return false;
// }



// interface Animal {
//   name: string;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }

// function testAnimal(animal: Animal) {
//   return (animal as Cat);
// }
// function testCat(cat: Cat) {
//   return (cat as Animal);
// }



// interface Animal {
//   name: string;
// }
// interface Cat {
//   name: string;
//   run(): void;
// }

// const animal: Animal = {
//   name: 'tom'
// };

// const cat: Cat = {
//   name: 'cat',
//   run: () => {}
// }

// // let tom: Cat = animal;

// let tom: Animal = cat;


// interface Person {
//   readonly id: number;
//   name: string;
//   age?: number;
//   [propName: string]: any;
// }

// let tom: Person = {
//   name: 'Tom',
//   gender: 'male'
// };

// tom.id = 89757;


// function sum() {
//   let args: {
//       [index: number]: number;
//       length: number;
//       callee: Function;
//   } = arguments;
// }

// function sum() {
//   let args: IArguments = arguments;
// }

// let tom: [string, number];
// tom = ['Tom', 25];
// tom.push('male');
// // tom.push(true);
// console.log(tom)



// class Animal {
//   name: any;
//   constructor(name:any) {
//       this.name = name;
//   }
//   sayHi() {
//       return `My name is ${this.name}`;
//   }
// }

// let a = new Animal('Jack');
// console.log(a.sayHi()); // My name is Jack


// class Cat extends Animal {
//   constructor(name:any) {
//       super(name); // 调用父类的 constructor(name)
//       console.log(this.name);
//   }
//   sayHi() {
//       return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
//   }
// }

// let c = new Cat('Tom'); // Tom
// console.log(c.sayHi()); // Meow, My name is Tom



// 泛型

// 泛型约束
// interface Lengthwise {
//   length: number;
// }

// function loggingIdentity<T extends Lengthwise>(arg: T): T {
//   console.log(arg.length);
//   return arg;
// }

// loggingIdentity(7);


// function copyFields<T extends U, U>(target: T, source: U): T {
//   for (let id in source) {
//       target[id] = (<T>source)[id];
//   }
//   return target;
// }

// function copyFields<T, U>(target: T, source: U): T {
//   for (let id in source) {
//       target[id] = source[id];
//   }
//   return target;
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// console.log(copyFields(x, { b: 10, d: 20 }))


// 普通定义方法接口
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//     return source.search(subString) !== -1;
// }

// 泛型方法接口
// interface CreateArrayFunc {
//   <T>(length: number, value: T): Array<T>;
// }

interface CreateArrayFunc<T> {
  (length: number, value: T): Array<T>;
}

let createArray: CreateArrayFunc<any>;

// createArray = function<T>(length: number, value: T): Array<T> {
//   let result: T[] = [];
//   for (let i = 0; i < length; i++) {
//       result[i] = value;
//   }
//   return result;
// }

createArray = function(length, value) {
  let result = [];
  for (let i = 0; i < length; i++) {
      result[i] = value;
  }
  return result;
}

console.log(createArray(3, 'x')); // ['x', 'x', 'x']