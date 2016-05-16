class A {
  constructor () {
    console.log('A')
  }
}

export default class B extends A {
  constructor () {
    super()
    console.log('B')
  }
}
