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





        // Save data in local storage to compare it
        window.localStorage.setItem("SAR", currency.rates['SAR'])











    });








