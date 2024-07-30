import React, { useId } from "react";

function Input_box({
    label,
    currency_options = [],
    amount,
    on_amount_change,
    on_currency_change,
    selected_currency = "usd", 
    amount_disabled = false , 
    currency_disabled = false 
    ,className = "",
    }) 
{

    console.log("In input box func opt , " , currency_options)
    const amount_input_id = useId
   
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor= {amount_input_id} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id = {amount_input_id}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled = {amount_disabled}
                    value={amount}
                    onChange={(e) => on_amount_change && on_amount_change(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selected_currency}
                    onChange={(e) => on_currency_change && on_currency_change(e.target.value)}
                    disabled = {currency_disabled}
                >
                    

                        {currency_options.map((currency_opt) => 
                            <option key = {currency_opt} value={currency_opt}>
                                {currency_opt}
                             </option>
                        )}



                
                </select>
            </div>
        </div>
    );
}

export default Input_box;
