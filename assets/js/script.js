//İki ədədin cəmini tapan funksiya yaz.
function sum(a, b) {
  return a + b;
}
//Verilmiş ədədin cüt və ya tək olduğunu müəyyən edən funksiya yaz.
function isEven(n) {
  return n % 2 === 0 ? "Even" : "Odd";
}
// Selsi temperaturunu Farenhayta çevirən funksiya yaz.
function selsiToFarenhayt(c) {
  return (c * 9/5) + 32;
}
//Üç ədəd içərisində ən böyüyünü tapan funksiya yaz.
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

// Verilmiş ədədin faktorialını hesablayan funksiya yaz. 
function findFaktorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * findFaktorial(n - 1);
}

//Verilmiş sözün palindrom olub olmadığını yoxlayan funksiya yaz 
function tersCevir(str) {
  return str.split('').reverse().join('');
}

// Verilmiş sətirdə neçə sait hərf olduğunu sayan funksiya yaz. 
function palindromYoxla(str) {
  const temiz = str.toLowerCase().replace(/[^a-zəöüğçşıı]/gi, '');
  return temiz === temiz.split('').reverse().join('');
}

//Bir cümlədəki hər sözün ilk hərfini böyük edən funksiya yaz. 
function capitalize(str) {
  return str.split(' ')
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(' ');
}


//Array (massiv) içindəki təkrar dəyərləri silən funksiya yaz. 
function noDuplicates(arr) {
  return [...new Set(arr)];
}


//Array içində müəyyən bir dəyərin olub-olmadığını yoxlayan funksiya yaz. 
function hasValue(arr, val) {
  return arr.includes(val);
}

//Verilmiş sətirdə hər bir simvoldan neçə dəfə olduğunu sayan funksiya yaz.
function charCount(str) {
  let obj = {};
  for (let ch of str) {
    obj[ch] = (obj[ch] || 0) + 1;
  }
  return obj;
}