import { useState } from 'react'
import './App.css'
import { Input_box } from './componenets'
import useCurrencyInfo from './hooks/use_currency_info'

function App() {
  const [amount , set_amount] = useState(0)
  const [from , set_from] = useState("pkr")
  const [to , set_to] = useState("usd")
  const [coverted_amount , set_coverted_amount] = useState(0)

  const currency_info  = useCurrencyInfo(from)
  const all_options = Object.keys(currency_info)

  console.log("Only opt : ", all_options)

  const swap = () => {
    const temp_from = from
    set_from(to)
    set_to(temp_from)
  }

  const calculate_coversion = () => {
    set_coverted_amount(currency_info[to]*amount)
  }


  return (
    <>
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
         style={{
             backgroundImage: `url('https://images.pexels.com/photos/259132/pexels-photo-259132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
         }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        calculate_coversion()
                       
                    }}
                >
                    <div className="w-full mb-1">
                        <Input_box
                            label="From"
                            currency_options={all_options}
                            amount={amount}
                            on_currency_change={(currency) => set_from(currency)}
                            on_amount_change={(amount) => set_amount(amount)}
                            selected_currency= {from}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input_box
                            label="To"
                            currency_options={all_options}
                            amount={coverted_amount}
                            on_currency_change={(currency) => set_to(currency)}
                            selected_currency= {to}                         
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert from {from} to {to}
                    </button>
                </form>
            </div>
        </div>
    </div>
    
</>
);

}

export default App
