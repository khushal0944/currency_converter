import { useState } from "react";

function InputBox({
    label,
    amount,
    selectCurrency = "usd",
    onAmountChange,
    amountDisabled = false,
    currencyDisabled = false,
    currencyOptions = [],
    onCurrencyChange,
    className = "",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    value={(amount === 0 ? "": amount)}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled = {amountDisabled}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency} disabled={currencyDisabled}
                onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}>
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
