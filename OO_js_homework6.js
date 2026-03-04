var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" 
    },
];

var emailReg = /^([a-z0-9]+(\.[a-z0-9]+)?)@(gmail\.com|yahoo\.com)$/i;
var validEmailsArr = [];
arr.forEach(userData => {
   if (emailReg.test(userData.email)){
   validEmailsArr.push(userData.email);
   }   
}); 

console.log(validEmailsArr);
