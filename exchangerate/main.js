const ER_API ="https://open.er-api.com/v6/latest";
const EUR_API ="https://open.er-api.com/v6/latest/EUR";
const CURRENT_PRICE= "https://api.coindesk.com/v1/bpi/currentprice.json"

const getExchange = async (fromNumber, rateFrom, rateTo) => {
    const url= `${ER_API}/${rateFrom}`;
    const response = await fetch(url);
    const content = await response.json()

    const exchangeData= {
        time: content['time_last_update_utc'],
        rateTo: content['rates'][rateTo]*fromNumber,
    }
    return exchangeData
}

const calculareRates = async () => {
    const fromNumber= document.querySelector("#fromNumber").value
    const rateFrom= document.querySelector("#from").value
    const rateTo= document.querySelector("#to").value
    const resultValue= document.querySelector("#result")
    
    const result = await getExchange(fromNumber, rateFrom, rateTo);
    
    resultValue.innerHTML=`Exchange result is: ${result.rateTo.toFixed(2)} ${rateTo}`
}