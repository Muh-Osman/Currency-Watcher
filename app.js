fetch('https://api.currencyfreaks.com/latest?apikey=4436bcb894744cca88efe65f4232f73f')
    .then((result) => {
        const myData = result.json();
        return myData;
    }).then((currency) => {

        const sar = document.querySelector('.sar-num');
        const egp = document.querySelector('.egp-num');
        const aed = document.querySelector('.aed-num');
        const jod = document.querySelector('.jod-num');
        const lyd = document.querySelector('.lyd-num');
        const kwd = document.querySelector('.kwd-num');
        const qar = document.querySelector('.qar-num');
        const bhd = document.querySelector('.bhd-num');
        const omr = document.querySelector('.omr-num');
        const eur = document.querySelector('.eur-num');
        const cad = document.querySelector('.cad-num');
        const gbp = document.querySelector('.gbp-num');
        const tryy = document.querySelector('.try-num');
        const sek = document.querySelector('.sek-num');
        const nok = document.querySelector('.nok-num');
        const dkk = document.querySelector('.dkk-num');
        const btc = document.querySelector('.btc-num');
        const eth = document.querySelector('.eth-num');



        sar.innerHTML = Number.parseFloat(currency.rates['SAR']).toFixed(3);
        egp.innerHTML = Number.parseFloat(currency.rates['EGP']).toFixed(3);
        aed.innerHTML = Number.parseFloat(currency.rates['AED']).toFixed(3);
        jod.innerHTML = Number.parseFloat(currency.rates['JOD']).toFixed(3);
        lyd.innerHTML = Number.parseFloat(currency.rates['LYD']).toFixed(3);
        kwd.innerHTML = Number.parseFloat(currency.rates['KWD']).toFixed(3);
        qar.innerHTML = Number.parseFloat(currency.rates['QAR']).toFixed(3);
        bhd.innerHTML = Number.parseFloat(currency.rates['BHD']).toFixed(3);
        omr.innerHTML = Number.parseFloat(currency.rates['OMR']).toFixed(3);
        eur.innerHTML = Number.parseFloat(currency.rates['EUR']).toFixed(3);
        cad.innerHTML = Number.parseFloat(currency.rates['CAD']).toFixed(3);
        gbp.innerHTML = Number.parseFloat(currency.rates['GBP']).toFixed(3);
        tryy.innerHTML = Number.parseFloat(currency.rates['TRY']).toFixed(3);
        sek.innerHTML = Number.parseFloat(currency.rates['SEK']).toFixed(3);
        nok.innerHTML = Number.parseFloat(currency.rates['NOK']).toFixed(3);
        dkk.innerHTML = Number.parseFloat(currency.rates['DKK']).toFixed(3);
        btc.innerHTML = Number.parseFloat(currency.rates['BTC']).toFixed(3);
        eth.innerHTML = Number.parseFloat(currency.rates['ETH']).toFixed(3);




        input.addEventListener('input', () => {
            let input = document.getElementById("input");

            var flotOne = input.value * currency.rates['SAR'];
            sar.innerHTML = Number.parseFloat(flotOne).toFixed(3);

            var flotTwo = input.value * currency.rates['EGP'];
            egp.innerHTML = Number.parseFloat(flotTwo).toFixed(3);

            var flotThree = input.value * currency.rates['AED'];
            aed.innerHTML = Number.parseFloat(flotThree).toFixed(3);

            var flotFour = input.value * currency.rates['JOD'];
            jod.innerHTML = Number.parseFloat(flotFour).toFixed(3);

            var flotFive = input.value * currency.rates['LYD'];
            lyd.innerHTML = Number.parseFloat(flotFive).toFixed(3);

            var flotSix = input.value * currency.rates['KWD'];
            kwd.innerHTML = Number.parseFloat(flotSix).toFixed(3);

            var flotSeven = input.value * currency.rates['QAR'];
            qar.innerHTML = Number.parseFloat(flotSeven).toFixed(3);

            var flotEight = input.value * currency.rates['BHD'];
            bhd.innerHTML = Number.parseFloat(flotEight).toFixed(3);

            var flotNine = input.value * currency.rates['OMR'];
            omr.innerHTML = Number.parseFloat(flotNine).toFixed(3);

            var flotTeen = input.value * currency.rates['SEK'];
            sek.innerHTML = Number.parseFloat(flotTeen).toFixed(3);

            var flotEleven = input.value * currency.rates['NOK'];
            nok.innerHTML = Number.parseFloat(flotEleven).toFixed(3);

            var flotTwilve = input.value * currency.rates['DKK'];
            dkk.innerHTML = Number.parseFloat(flotTwilve).toFixed(3);

            var flotTherteen = input.value * currency.rates['EUR'];
            eur.innerHTML = Number.parseFloat(flotTherteen).toFixed(3);

            var flotFourteen = input.value * currency.rates['CAD'];
            cad.innerHTML = Number.parseFloat(flotFourteen).toFixed(3);

            var flotFiveteen = input.value * currency.rates['GBP'];
            gbp.innerHTML = Number.parseFloat(flotFiveteen).toFixed(3);

            var flotSixteen = input.value * currency.rates['TRY'];
            tryy.innerHTML = Number.parseFloat(flotSixteen).toFixed(3);

            var flotSeventeen = input.value * currency.rates['BTC'];
            btc.innerHTML = Number.parseFloat(flotSeventeen).toFixed(3);

            var flotEightteen = input.value * currency.rates['ETH'];
            eth.innerHTML = Number.parseFloat(flotEightteen).toFixed(3);
        });


        // Last Update
        let ti = document.querySelector('.ti');
        ti.innerHTML = currency.date;





        // Set Data in local storage to compare it after 3s
        setTimeout(function () {
            for (var key in currency.rates) {
                if (currency.rates.hasOwnProperty(key)) {
                    localStorage.setItem(key, currency.rates[key]);
                }
            }
        }, 3000);



        // Get Data
        var up = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/></svg>`;
        var down = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></svg>`;
        var equal = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-dash-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>`;



        var oldA = window.localStorage.getItem('SAR');
        var arrowsar = document.querySelector('.arrowsar');

        if (oldA > currency.rates['SAR']) {
            arrowsar.innerHTML = up;

        } else if (oldA < currency.rates['SAR']) {

            arrowsar.innerHTML = down;

        } else {
            arrowsar.innerHTML = equal;
        }



        var oldB = window.localStorage.getItem('EGP');
        var arrowegp = document.querySelector('.arrowegp');

        if (oldB > currency.rates['EGP']) {
            arrowegp.innerHTML = up;

        } else if (oldB < currency.rates['EGP']) {

            arrowegp.innerHTML = down;

        } else {
            arrowegp.innerHTML = equal;
        }



        var oldC = window.localStorage.getItem('AED');
        var arrowaed = document.querySelector('.arrowaed');

        if (oldC > currency.rates['AED']) {
            arrowaed.innerHTML = up;

        } else if (oldC < currency.rates['AED']) {

            arrowaed.innerHTML = down;

        } else {
            arrowaed.innerHTML = equal;
        }


        var oldD = window.localStorage.getItem('JOD');
        var arrowjod = document.querySelector('.arrowjod');

        if (oldD > currency.rates['JOD']) {
            arrowjod.innerHTML = up;

        } else if (oldD < currency.rates['JOD']) {

            arrowjod.innerHTML = down;

        } else {
            arrowjod.innerHTML = equal;
        }


        var oldE = window.localStorage.getItem('LYD');
        var arrowlyd = document.querySelector('.arrowlyd');

        if (oldE > currency.rates['LYD']) {
            arrowlyd.innerHTML = up;

        } else if (oldE < currency.rates['LYD']) {

            arrowlyd.innerHTML = down;

        } else {
            arrowlyd.innerHTML = equal;
        }


        var oldF = window.localStorage.getItem('KWD');
        var arrowkwd = document.querySelector('.arrowkwd');

        if (oldF > currency.rates['KWD']) {
            arrowkwd.innerHTML = up;

        } else if (oldF < currency.rates['KWD']) {

            arrowkwd.innerHTML = down;

        } else {
            arrowkwd.innerHTML = equal;
        }


        var oldG = window.localStorage.getItem('QAR');
        var arrowqar = document.querySelector('.arrowqar');

        if (oldG > currency.rates['QAR']) {
            arrowqar.innerHTML = up;

        } else if (oldG < currency.rates['QAR']) {

            arrowqar.innerHTML = down;

        } else {
            arrowqar.innerHTML = equal;
        }


        var oldH = window.localStorage.getItem('BHD');
        var arrowbhd = document.querySelector('.arrowbhd');

        if (oldH > currency.rates['BHD']) {
            arrowbhd.innerHTML = up;

        } else if (oldH < currency.rates['BHD']) {

            arrowbhd.innerHTML = down;

        } else {
            arrowbhd.innerHTML = equal;
        }


        var oldI = window.localStorage.getItem('OMR');
        var arrowomr = document.querySelector('.arrowomr');

        if (oldI > currency.rates['OMR']) {
            arrowomr.innerHTML = up;

        } else if (oldI < currency.rates['OMR']) {

            arrowomr.innerHTML = down;

        } else {
            arrowomr.innerHTML = equal;
        }


        var oldJ = window.localStorage.getItem('EUR');
        var arroweur = document.querySelector('.arroweur');

        if (oldJ > currency.rates['EUR']) {
            arroweur.innerHTML = up;

        } else if (oldJ < currency.rates['EUR']) {

            arroweur.innerHTML = down;

        } else {
            arroweur.innerHTML = equal;
        }


        var oldK = window.localStorage.getItem('CAD');
        var arrowcad = document.querySelector('.arrowcad');

        if (oldK > currency.rates['CAD']) {
            arrowcad.innerHTML = up;

        } else if (oldK < currency.rates['CAD']) {

            arrowcad.innerHTML = down;

        } else {
            arrowcad.innerHTML = equal;
        }



        var oldL = window.localStorage.getItem('GBP');
        var arrowgbp = document.querySelector('.arrowgbp');

        if (oldL > currency.rates['GBP']) {
            arrowgbp.innerHTML = up;

        } else if (oldL < currency.rates['GBP']) {

            arrowgbp.innerHTML = down;

        } else {
            arrowgbp.innerHTML = equal;
        }



        var oldM = window.localStorage.getItem('TRY');
        var arrowtry = document.querySelector('.arrowtry');

        if (oldM > currency.rates['TRY']) {
            arrowtry.innerHTML = up;

        } else if (oldM < currency.rates['TRY']) {

            arrowtry.innerHTML = down;

        } else {
            arrowtry.innerHTML = equal;
        }



        var oldN = window.localStorage.getItem('SEK');
        var arrowsek = document.querySelector('.arrowsek');

        if (oldN > currency.rates['SEK']) {
            arrowsek.innerHTML = up;

        } else if (oldN < currency.rates['SEK']) {

            arrowsek.innerHTML = down;

        } else {
            arrowsek.innerHTML = equal;
        }


        var oldO = window.localStorage.getItem('NOK');
        var arrownok = document.querySelector('.arrownok');

        if (oldO > currency.rates['NOK']) {
            arrownok.innerHTML = up;

        } else if (oldO < currency.rates['NOK']) {

            arrownok.innerHTML = down;

        } else {
            arrownok.innerHTML = equal;
        }



        var oldP = window.localStorage.getItem('DKK');
        var arrowdkk = document.querySelector('.arrowdkk');

        if (oldP > currency.rates['DKK']) {
            arrowdkk.innerHTML = up;

        } else if (oldP < currency.rates['DKK']) {

            arrowdkk.innerHTML = down;

        } else {
            arrowdkk.innerHTML = equal;
        }



        var oldQ = window.localStorage.getItem('BTC');
        var arrowbtc = document.querySelector('.arrowbtc');

        if (oldQ > currency.rates['BTC']) {
            arrowbtc.innerHTML = up;

        } else if (oldQ < currency.rates['BTC']) {

            arrowbtc.innerHTML = down;

        } else {
            arrowbtc.innerHTML = equal;
        }



        var oldR = window.localStorage.getItem('ETH');
        var arroweth = document.querySelector('.arroweth');

        if (oldR > currency.rates['ETH']) {
            arroweth.innerHTML = up;

        } else if (oldR < currency.rates['ETH']) {

            arroweth.innerHTML = down;

        } else {
            arroweth.innerHTML = equal;
        }



    });








