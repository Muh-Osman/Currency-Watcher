fetch('https://api.currencyfreaks.com/latest?apikey=4436bcb894744cca88efe65f4232f73f')
    .then((result) => {
        const myData = result.json();
        return myData;
    }).then((currency) => {

        const sar = document.querySelector('.sar-num');
        const egp = document.querySelector('.egp-num');
        const aed = document.querySelector('.aed-num');
        const eur = document.querySelector('.eur-num');




        sar.innerHTML = Number.parseFloat(currency.rates['SAR']).toFixed(3);
        egp.innerHTML = Number.parseFloat(currency.rates['EGP']).toFixed(3);
        aed.innerHTML = Number.parseFloat(currency.rates['AED']).toFixed(3);
        eur.innerHTML = Number.parseFloat(currency.rates['EUR']).toFixed(3);




        input.addEventListener('input', () => {
            let input = document.getElementById("input");

            var flotOne = input.value * currency.rates['SAR'];
            sar.innerHTML = Number.parseFloat(flotOne).toFixed(3);

            var flotTwo = input.value * currency.rates['EGP'];
            egp.innerHTML = Number.parseFloat(flotTwo).toFixed(3);

            var flotThree = input.value * currency.rates['AED'];
            aed.innerHTML = Number.parseFloat(flotThree).toFixed(3);

            var flotFour = input.value * currency.rates['EUR'];
            eur.innerHTML = Number.parseFloat(flotFour).toFixed(3);




        });


    });



