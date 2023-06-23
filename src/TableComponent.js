import React from "react";
import { AiOutlineSortAscending } from "react-icons/ai";
import { AiOutlineSortDescending } from "react-icons/ai";

const TableComponent = ({
	handleAscendingOrder,
	handleDescendingOrder,
	itemsArr,
}) => {
	return (
		<div className=" flex justify-center">
			<div className="overflow-x-auto inline-block">
				<table className="border-2 min-w-[800px] border-gray-700">
					<thead>
						<tr>
							<th>
								<div className="flex items-center justify-center gap-2">
									<span>ID</span>

									<AiOutlineSortAscending
										onClick={handleAscendingOrder}
										size={20}
										className="cursor-pointer"
									/>

									<AiOutlineSortDescending
										onClick={handleDescendingOrder}
										size={20}
										className="cursor-pointer"
									/>
								</div>
							</th>
							<th>
								<div className="flex items-center justify-center gap-2">
									<span>Product Name</span>
									<AiOutlineSortAscending
										size={20}
										onClick={handleAscendingOrder}
										className="cursor-pointer"
									/>

									<AiOutlineSortDescending
										size={20}
										onClick={handleDescendingOrder}
										className="cursor-pointer"
									/>
								</div>
							</th>
							<th>
								<div className="flex items-center justify-center gap-2">
									<span>Product Weight</span>

									<AiOutlineSortAscending
										size={20}
										onClick={handleAscendingOrder}
										className="cursor-pointer"
									/>
									<AiOutlineSortDescending
										size={20}
										onClick={handleDescendingOrder}
										className="cursor-pointer"
									/>
								</div>
							</th>
							<th>
								<div className="flex items-center justify-center gap-2">
									<span>Price(INR)</span>

									<AiOutlineSortAscending
										size={20}
										onClick={handleAscendingOrder}
										className="cursor-pointer"
									/>

									<AiOutlineSortDescending
										size={20}
										onClick={handleDescendingOrder}
										className="cursor-pointer"
									/>
								</div>
							</th>
							<th>
								<div className="flex items-center justify-center gap-2">
									<span>Calories</span>

									<AiOutlineSortAscending
										size={20}
										onClick={handleAscendingOrder}
										className="cursor-pointer"
									/>

									<AiOutlineSortDescending
										size={20}
										onClick={handleDescendingOrder}
										className="cursor-pointer"
									/>
								</div>
							</th>
							<th>
								<div className="flex items-center justify-center gap-2">
									<span>Ingredients</span>

									<AiOutlineSortAscending
										size={20}
										onClick={handleAscendingOrder}
										className="cursor-pointer"
									/>

									<AiOutlineSortDescending
										size={20}
										onClick={handleDescendingOrder}
										className="cursor-pointer"
									/>
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
								<td>{item.ingredients.join(", ")}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableComponent;
