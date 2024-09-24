function conversionCurrency (sumOFconversion, fromCurrency, toCurrency) {
    switch(fromCurrency) {
        case 'RUB':
            switch(toCurrency) {
                case 'USD':
                    return sumOFconversion * 0.03;
                case 'EUR':
                    return sumOFconversion * 0.025;
            }
        case 'USD':
            switch(toCurrency){
                case 'RUB':
                    return sumOFconversion * 33;
                case 'EUR': 
                    return sumOFconversion * 0.8;
                
            }
        case 'EUR':
            switch(toCurrency){
                case 'RUB':
                    return sumOFconversion * 50;
                case 'USD': 
                    return sumOFconversion * 2;
                
            }
        default:
            return null;
    }
}

console.log(conversionCurrency(1000, 'RUB', 'USD'));
console.log(conversionCurrency(1000, 'USD', 'EUR'));
console.log(conversionCurrency(1000, 'EUR', 'RUB'));
console.log(conversionCurrency(1000, 'EUR', 'GBP'));