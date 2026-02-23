var services = {
"стрижка": "60.234414 грн",
"гоління": "80 грн",
"миття голови": "100 грн",
price:function(){
    let totalPrice = 0;
    for (let key in this){
        if (typeof this[key]==='string'){
            totalPrice += parseFloat(this[key]);
        }
    }
    return totalPrice.toFixed(2) + " грн";

},

minPrice:function(){
    let minimumPrice = 0;
    let minimumService = "";
    for (let key in this){
        if (typeof this[key]==='string'){
            let currentPrice = parseFloat(this[key]);
            if (minimumPrice === 0 || currentPrice < minimumPrice){
                minimumPrice = currentPrice;
                minimumService = key;
            }
        }
    }
    return minimumPrice.toFixed(2) + " грн" + " за послугу - " + minimumService;
},

maxPrice:function(){
    let maximumPrice = 0;
    let maximumService = "";
    for (let key in this){
        if (typeof this[key]==='string'){
            let currentPrice = parseFloat(this[key]);
            if (currentPrice > maximumPrice){
                maximumPrice = currentPrice;
                maximumService = key;
            }
        }
    }
    return maximumPrice.toFixed(2) + " грн" + " за послугу - " + maximumService;
}
};

services['розбити скло'] = "345 грн";
console.log("Загальна вартість наданих послуг: ", services.price());
console.log("Мінімальна ціна: ", services.minPrice());
console.log("Максимальна ціна: ", services.maxPrice());