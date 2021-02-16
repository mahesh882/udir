import React from 'react';

export default function CurrencyRow(props) {
  const {
    currencyOptions,
    selectedCurrency,
    onChangeCurrency,
    onChangeAmount,
    amount
  } = props

  return (
    
     <div className="select-boxes">
        <div className="input-box-send">
            <input type="number" name="someid" name="text" placeholder="...." value={amount} onChange={onChangeAmount} />
        </div>
        <div className="flag-select">
            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    </div>
  )
}