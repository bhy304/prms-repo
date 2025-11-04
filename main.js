// 함수 선언문
function a() {
  console.log('a')
}
a()
// 함수 표현식
const b = function () {
  console.log('b')
}
b()
// Function 생성자 함수
const c = new Function('console.log("c")')
c()
// 화살표 함수 표현식
const d = () => {
  console.log('d')
}
d()

// IIFE (즉시 실행 함수)
;(function e() {
  console.log('e')
})()

// 재귀함수
function f(arg) {
  if (arg === 3) return
  console.log(arg)
  f(arg + 1)
}
f(1)

// 중첩함수
function outer() {
  function inner() {
    console.log('inner function')
  }
  inner()
}
outer()

// 콜백함수
function g(callback) {
  console.log('g function')
  callback()
}
g(() => {
  console.log('callback function')
})
