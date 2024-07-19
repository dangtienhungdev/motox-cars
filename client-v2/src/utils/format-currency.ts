export const formatCurrency = (price: number) => {
	const formatCurrency = price?.toLocaleString('it-IT', {
		style: 'currency',
		currency: 'VND',
	});
	return formatCurrency;
};
