export const splitAndFilterText = (text) => {
	return text.split(/\n/ig).filter(value => value !== '');
};