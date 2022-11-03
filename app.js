
fetch('https://api.currencyfreaks.com/latest?apikey=4436bcb894744cca88efe65f4232f73f')
    .then((result) => {
        const myData = result.json();
        return myData;
    }).then((currency) => {

        const sar = document.querySelector('.sar span');
        const egp = document.querySelector('.egp span');
        const aed = document.querySelector('.aed span');
        const eur = document.querySelector('.eur span');


        sar.innerHTML = parseFloat(currency.rates['SAR']).toFixed(3);
        egp.innerHTML = parseFloat(currency.rates['EGP']).toFixed(3);
        aed.innerHTML = parseFloat(currency.rates['AED']).toFixed(3);
        eur.innerHTML = parseFloat(currency.rates['EUR']).toFixed(3);

    });