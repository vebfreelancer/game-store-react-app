export const currency = (price) => {
	const currencyPrice = price.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
	return `${currencyPrice[0]} ${currencyPrice.slice(1)}`;
};

export const totalPrice = items => {
	// eslint-disable-next-line no-return-assign, no-param-reassign
	return items.reduce((acc, game) => acc += game.price, 0);
}