module.exports = function reverse(n) {
  let str = n.toString().split('').reverse().join('');
  if (n < 0) {
    let newStr;
    newStr = str.slice(0, [str.length - 1]);
    return (`${newStr}`);
  } else {
    return str;
  }
}
