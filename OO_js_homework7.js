 function findWordsWithoutAa(text){
   var re = /\b[^a\s,]{6,}/gi; 
   return text.match(re);
 }
 
 console.log (findWordsWithoutAa("Wonderful, Joyful, Happiness, Time, Task, Appleee"));