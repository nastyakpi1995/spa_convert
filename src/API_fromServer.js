
export const getApi = async() => {
	const response = await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
	// const currentApi = await response.json();

	return response.json();
}
