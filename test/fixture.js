type TheA = {
  a : number,
  b: string
}

class A {
  constructor () {
    console.log('A')
  }
}

const createTheA = () : TheA => ({
  a: 10,
  b: 'text'
})

export default class B extends A {
  constructor () {
    super()
    createTheA()
    console.log('B')
  }
}
