function convert() {
  let amount = parseFloat(document.getElementById("amount").value);
  let From = document.getElementById("from").value;
  let To = document.getElementById("to").value;
  const Result = document.getElementById("result");

  var myHeaders = new Headers();
  myHeaders.append("apikey", "BRxBMFWl1Xa51rQrkIXQvZvWBw0Koc3X");

  var requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: myHeaders,
  };

  fetch(
    "https://api.apilayer.com/exchangerates_data/convert?to=" +
      To +
      "&from=" +
      From +
      "&amount=" +
      amount,
    requestOptions
  )
    .then((response) => response.json())
    .then(json => 
    Result.innerHTML=json.result
    )
    .catch((error) => console.log("error", error));

  //   let exchange = {
  //     USD: 1,
  //     RWF: 1000,
  //     EUR: 0.93,
  //     CAD: 1.34,
  //     JPY: 139.395,
  //     POU: 1.3,
  //     ArgentinePeso: 247.774148,
  //     AustralianDollar: 1.466608,
  //     BahrainiDinar: 0.376,
  //     BotswanaPula: 13.434796,
  //     BrazilianReal: 4.843619,
  //     BritishPound: 0.788043,
  //     BruneianDollar: 1.338712,
  //     BulgarianLev: 1.801587,
  //     CanadianDollar: 1.329325,
  //     ChileanPeso: 800.31564,
  //     ChineseYuanRenminbi: 7.148904,
  //     ColombianPeso: 4177.7498,
  //     CzechKoruna: 21.902553,
  //     DanishKrone: 6.864621,
  //     EmiratiDirham: 3.6725,
  //     HongKongDollar: 7.831415,
  //     HungarianForint: 342.38992,
  //     IcelandicKrona: 137.34723,
  //     IndianRupee: 81.990805,
  //     IndonesianRupiah: 14886.087,
  //     IranianRial: 42244.142,
  //     IsraeliShekel: 3.581024,
  //     JapaneseYen: 139.378601,
  //     KazakhstaniTenge: 449.889979,
  //     KuwaitiDinar: 0.307108,
  //     LibyanDinar: 4.8,
  //   };
  //   let answer = amount * (exchange[To] / exchange[From]);
  // result.innerHTML = answer + " " + To;
}
