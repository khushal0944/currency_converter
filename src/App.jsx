import { useState } from "react";
import InputBox from "./componets/InputBox";
import UseCurrencyInfo from "./hooks/UseCurrencyInfo";

export default function App() {
	const [amount, setAmount] = useState(0);
	const [from, setFrom] = useState("usd");
	const [to, setTo] = useState("inr");
	const [convAmount, setConvAmount] = useState(0);
	const currencyData = UseCurrencyInfo(from);
	let currData = Object.keys(currencyData);
	let swapData = () => {
		setFrom(to);
		setTo(from);
		setConvAmount(amount);
		setAmount(convAmount);
	};
	let convertData = () => {
		setConvAmount(Math.round(amount * currencyData[to]*1000)/1000);
	};
	return (
		<div
			className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
			style={{
				backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681469490587-cf7ff1d6fc00?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fG1vbmV5JTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8fDA%3D')`,
			}}
		>
			<div className="w-full">
				<div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							convertData();
						}}
					>
						<div className="w-full mb-1">
							<InputBox
								label="From"
								currencyOptions={currData}
								amount={amount}
								onCurrencyChange={(currency) => setFrom(currency)}
                                onAmountChange={(amount)=>setAmount(amount)}
								selectCurrency={from}
							/>
						</div>
						<div className="relative w-full h-0.5">
							<button
								type="button"
								className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
								onClick={swapData}
							>
								swap
							</button>
						</div>
						<div className="w-full mt-1 mb-4">
							<InputBox
								label="To"
								currencyOptions={currData}
								amount={convAmount}
								onCurrencyChange={(currency) => {
									setTo(currency);
								}}
								selectCurrency={to}
                                amountDisabled
							/>
						</div>
						<button
							type="submit"
							className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
							onClick={convertData}
						>
							Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}
