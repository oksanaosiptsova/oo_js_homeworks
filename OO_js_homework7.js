 function findWordsWithoutAa(text){
   var re = /\b[^a\s,]{6,}/gi; 
   return text.match(re);
 }
 
 console.log (findWordsWithoutAa("Wonderful, Joyful, Happiness, Time, Task, Appleee"));
 
 function findWordsWithoutAa2(text){
   var re = /(^|[\s])[^a\s\,]{6,}/gi; 
   return text.match(re);
 }
 
 console.log (findWordsWithoutAa2("Wonderful, Joyful, Happiness, Time, Task, Appleee"));