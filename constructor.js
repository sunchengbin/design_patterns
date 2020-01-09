// 构造器模式实例

// 创建空对象object
let obj = {}
obj = new Object()
obj = Object.create(null)

// 给对象设置属性
obj.content = 'text1'
obj['content'] = 'text2'
Object.defineProperty(obj, 'content', {
  value: 'hello world',
  writable: true,
  enumerable: true,
  configurable: true
})
Object.defineProperties(obj, {
  content: {
    value: 'text4',
    writable: true,
    enumerable: true,
    configurable: true
  },
  name: {
    value: 'sun',
    writable: true,
  }
})

console.log(obj.content)

let person = Object.create(obj)
// 通过Object.create()创建的对象没有constructor属性

console.log(person.name)

//带原型的构造器
let Car = function (name, type) {
  this.name = name || 'mzd'
  this.type = type || 'atz'
}
Car.prototype.toString = function () {
  return this.name + this.type
}

let car1 = new Car()
let car2 = new Car('ft', 'lt')
console.log(car1.toString())
console.log(car2.toString())
