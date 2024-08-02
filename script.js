const convertButton = document.querySelector(".convert-button") 
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Valor do Real
    const currencyValueConverted = document.querySelector(".currency-value") // Outras moedas

    const dolarToday = 5.74
    const euroToday = 6.27
    const bitcoinToday = 0.0000028
    const libraToday = 7.35


    if(currencySelect.value == "dolar"){ //Se o select estiver selecionado em dolar, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    
    if(currencySelect.value == "euro") { //Se o select estiver selecionado em euro, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    
    }


    if(currencySelect.value == "bitcoin") { //Se o select estiver selecionado em euro, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC",
            minimumFractionDigits: "8"
        }).format(inputCurrencyValue * bitcoinToday)
    
    }

    if(currencySelect.value == "libra") { //Se o select estiver selecionado em euro, entre aqui.
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL", 
    }).format(inputCurrencyValue)

}

function changeCurrency(){
   const currencyName = document.getElementById("currency-name")
   const currencyImg = document.querySelector(".currency-img")
   
   if(currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano"
    currencyImg.src = "./assets/dolar.png"
   }

   if(currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro"
    currencyImg.src = "./assets/euro.png"
   }

   if(currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin"
    currencyImg.src = "./assets/bitcoin.png"
   }

   if(currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra"
    currencyImg.src = "./assets/libra.png"
   }

   convertValues()
}
        
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

