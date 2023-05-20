// complete the given function

function palindrome(str){
     s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

  
  return s === s.split('').reverse().join('');
}
module.exports = palindrome
