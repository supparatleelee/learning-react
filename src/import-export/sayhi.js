export default function sayHi() {
  //export default function () {} = can exclude the function name in case it is a default export.
  console.log('Say Hi');
}
function sayHello() {
  console.log('Say Hello');
}

export const month = ['Jan', 'Feb'];

export { sayHello };
