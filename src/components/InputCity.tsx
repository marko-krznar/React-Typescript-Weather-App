import { BsXLg } from "react-icons/bs";

export const InputCity = (props: any) => {
	const { handleSubmit, state, handleChange, handleClear } = props;

	return (
		<>
			<form className="flex items-center" onSubmit={handleSubmit}>
				<div className="relative">
					<input
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-11"
						value={state}
						type="text"
						onChange={handleChange}
						placeholder="Search city..."
					/>
					<BsXLg
						className="absolute right-0 top-0 bottom-0 m-auto w-10 h-full px-3 opacity-40 text-white hover:opacity-100"
						onClick={handleClear}
					/>
				</div>
				<input
					type="submit"
					value="Search"
					className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
				/>
			</form>
		</>
	);
};
