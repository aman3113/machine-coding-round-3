import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineSortDescending } from "react-icons/ai";

import { snacks } from "./Data";

function App() {
	const [input, setInput] = useState("");
	const [itemsArr, setItemsArr] = useState(snacks);

	const columnNameToPropertyName = {
		ID: "id",
		"Product Name": "product_name",
		"Product Weight": "product_weight",
		"Price(INR)": "price",
		Calories: "calories",
		Ingredients: "ingredients",
	};

	function handleAscendingOrder(event) {
		const spanText = event.target.previousElementSibling;
		const sortProperty = columnNameToPropertyName[spanText.textContent];

		if (sortProperty === "product_name" || sortProperty === "ingredients") {
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

	function handleDescendingOrder(event) {
		const spanText = event.target.previousElementSibling.previousElementSibling;
		const sortProperty = columnNameToPropertyName[spanText.textContent];

		if (sortProperty === "product_name" || sortProperty === "ingredients") {
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
		const sortedArr = snacks.filter((item) =>
			item.product_name.toLowerCase().includes(input.toLowerCase())
		);
		setItemsArr(() => sortedArr);
	}

	console.log(itemsArr);

	return (
		<div className="App">
			<p className="text-3xl font bold text-center">Snack Table</p>
			<div className="w-full border-2 border-red-700 flex justify-center">
				<div className="border-2  w-[60%] border-black px-3 py-1 flex items-center gap-2">
					<BiSearch />
					<input
						className="outline-none"
						type="search"
						name="input"
						value={input}
						onKeyDown={handleSearch}
						placeholder="search text here"
						onChange={(e) => setInput(e.target.value)}
					/>
				</div>
			</div>

			<div>
				<table>
					<thead>
						<tr>
							<th>
								<div className="flex items-center gap-2">
									<span>ID</span>

									<AiOutlineSortAscending onClick={handleAscendingOrder} />

									<AiOutlineSortDescending onClick={handleDescendingOrder} />
								</div>
							</th>
							<th>
								<div className="flex items-center gap-2">
									<span>Product Name</span>
									<AiOutlineSortAscending
										onClick={handleAscendingOrder}
										className="cursor-pointer"
									/>

									<AiOutlineSortDescending onClick={handleDescendingOrder} />
								</div>
							</th>
							<th>
								<div className="flex items-center gap-2">
									<span>Product Weight</span>

									<AiOutlineSortAscending onClick={handleAscendingOrder} />
									<AiOutlineSortDescending onClick={handleDescendingOrder} />
								</div>
							</th>
							<th>
								<div className="flex items-center gap-2">
									<span>Price(INR)</span>

									<AiOutlineSortAscending onClick={handleAscendingOrder} />

									<AiOutlineSortDescending onClick={handleDescendingOrder} />
								</div>
							</th>
							<th>
								<div className="flex items-center gap-2">
									<span>Calories</span>

									<AiOutlineSortAscending onClick={handleAscendingOrder} />

									<AiOutlineSortDescending onClick={handleDescendingOrder} />
								</div>
							</th>
							<th>
								<div className="flex items-center gap-2">
									<span>Ingredients</span>

									<AiOutlineSortAscending onClick={handleAscendingOrder} />

									<AiOutlineSortDescending onClick={handleDescendingOrder} />
								</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{itemsArr?.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>{item.product_name}</td>
								<td>{item.product_weight}</td>
								<td>{item.price}</td>
								<td>{item.calories}</td>
								<td>{item.ingredients}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default App;
