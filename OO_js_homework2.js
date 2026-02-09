function pow(base,exponent){
    let power = 1;
    if (base === 0 && exponent < 0) {
        return "Ділення на нуль!"; 
    }
    if (exponent == 0) {
        power = 1;
    }
        else if (exponent > 0) {
            while (exponent > 0) {
                power = power * base;
                exponent = exponent - 1;
            }
        }
        else {
            while (exponent < 0) {
                power = power * (1/base);
                exponent = exponent + 1;
            }
        }
return power;
}
console.log(pow(0, -5));
console.log(pow(0, 0));
console.log(pow(0, 5));
console.log(pow(3, -2));
console.log(pow(3, 2));