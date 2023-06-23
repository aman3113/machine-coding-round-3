import { useState } from "react";
import { BiSearch } from "react-icons/bi";

import { snacks } from "./Data";
import TableComponent from "./TableComponent";

function App() {
	const [input, setInput] = useState("");
	const [itemsArr, setItemsArr] = useState(snacks);

	function handleAscendingOrder(sortProperty) {
		// const spanText = event.target.previousElementSibling;
		// const sortProperty = columnNameToPropertyName[spanText.textContent];

		if (
			sortProperty === "product_name" ||
			sortProperty === "ingredients" ||
			sortProperty === "product_weight"
		) {
			const sortedArr = [...snacks].sort(
				(a, b) => a[sortProperty].length - b[sortProperty].length
			);

			setItemsArr(() => sortedArr);
		} else {
			const sortedArr = [...snacks].sort(
				(a, b) => a[sortProperty] - b[sortProperty]
			);
			setItemsArr(() => sortedArr);
		}
	}

	function handleDescendingOrder(sortProperty) {
		// const spanText = event.target.previousElementSibling.previousElementSibling;
		// const sortProperty = columnNameToPropertyName[spanText.textContent];

		if (
			sortProperty === "product_name" ||
			sortProperty === "ingredients" ||
			sortProperty === "product_weight"
		) {
			const sortedArr = [...snacks].sort(
				(a, b) => b[sortProperty].length - a[sortProperty].length
			);

			setItemsArr(() => sortedArr);
		} else {
			const sortedArr = [...snacks].sort(
				(a, b) => b[sortProperty] - a[sortProperty]
			);
			setItemsArr(() => sortedArr);
		}
	}

	function handleSearch() {
		const sortedArr = snacks.filter(
			(item) =>
				item.product_name.toLowerCase().includes(input.toLowerCase()) ||
				item.ingredients.join("").toLowerCase().includes(input.toLowerCase())
		);
		setItemsArr(() => sortedArr);
	}

	return (
		<div className="border-2 border-gray-700 shadow-md p-4 py-9 min-h-[90vh] m-5 shadow-gray-500 rounded-md">
			<p className="text-3xl font-bold text-center">Snack Table</p>
			<div className="w-full flex justify-center my-5">
				<div className="border-2  w-[60%] border-black px-3 py-1 flex items-center gap-2 rounded-md">
					<BiSearch />
					<input
						className="outline-none w-full"
						type="search"
						name="input"
						value={input}
						onKeyDown={handleSearch}
						placeholder="search product name and ingredients"
						onChange={(e) => setInput(e.target.value)}
					/>
				</div>
			</div>
			<TableComponent
				handleAscendingOrder={handleAscendingOrder}
				handleDescendingOrder={handleDescendingOrder}
				itemsArr={itemsArr}
			/>
		</div>
	);
}

export default App;
