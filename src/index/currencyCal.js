import {useEffect,useState} from 'react'

import map_img from "../assets/images/map.png"
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangeratesapi.io/latest';

const CurrencyCal = ()=>{

   const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        
        const firstCurrency = Object.keys(data.rates)[0]
        setCurrencyOptions([data.base, ...Object.keys(data.rates)])
        setFromCurrency(data.base)
        setToCurrency(firstCurrency)
        setExchangeRate(data.rates[firstCurrency])
      })
    }, []
  )

  useEffect(() => {
    if(fromCurrency != null && toCurrency != null) {
    fetch(`${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}`)
      .then(res => res.json())
      .then(data => setExchangeRate(data.rates[toCurrency]))
      }
    }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

 
    return (<div>
      
        <section className="map-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="map-section">
                  <img src={map_img} />
                </div>
              </div>
              <div className="col-md-4">
                <div className="map-text">
                  <div className="map-text-box">
                    <div className="send-money">
                      <p>You send</p>
                       <CurrencyRow
    currencyOptions={currencyOptions}
    selectedCurrency={fromCurrency}
    onChangeCurrency={e => setFromCurrency(e.target.value)}
    onChangeAmount={handleFromAmountChange}
    amount={fromAmount}
    />
                      {/* <div className="select-boxes">
                        <div className="input-box-send">
                             <input type="number" name="someid" name="text" placeholder="...." />
                        </div>
                        <div className="flag-select">
                         
                        
                        </div>
                      </div> */}
                    </div>
                    <div className="send-box-detail">
                      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <g fill="none" fillRule="evenodd">
                          <g fill="currentColor">
                            <g>
                              <path d="M21.016 15.976l.97 1 4.812-4.967c.267-.277.267-.724 0-1L21.985 6.04l-.969 1.007 3.644 3.755H5.004v1.419H24.66l-3.644 3.754z" transform="translate(-5 -21) translate(5.011 21.989) rotate(90 16.001 11.509)" />
                              <path d="M16.958 10.781H-2.66l3.637-3.77L.003 6-4.8 10.988c-.267.278-.267.727 0 1.005L.003 16.98l.967-1.004-3.63-3.77h19.618v-1.425z" transform="translate(-5 -21) translate(5.011 21.989) rotate(90 5.979 11.49)" />
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p>{amount} {fromCurrency} = <span>{exchangeRate} {toCurrency}</span></p>
                    </div>
                    <div className="send-money">
                      <p>They get</p>
                    <CurrencyRow
    currencyOptions={currencyOptions}
    selectedCurrency={toCurrency}
    onChangeCurrency={e => setToCurrency(e.target.value)}
    onChangeAmount={handleToAmountChange}
    amount={toAmount}
    />
                      {/* <div className="select-boxes">
                        <div className="input-box-send">
                          <input type="number" name="someid" name="text" placeholder="...." />
                        </div>
                        <div className="flag-select">
                       
                          
                        </div>
                      </div> */}
                    </div>
                    <div className="air-select">
                      <span>Payout method</span>
                      <select>
                        <option>Airtime Top up</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>)
}
export default CurrencyCal
