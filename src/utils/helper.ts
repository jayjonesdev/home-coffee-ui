export const flattenDrinkOptions = (options: {
	[key: string]: string[];
}): { [key: string]: string } => {
	const flattenedOptions = Object.create({});

	Object.keys(options).forEach((key) => {
		Object.assign(flattenedOptions, { [key]: '' });
	});

	return flattenedOptions;
};

export const generateID = () => {
	return Math.random().toString(36).substring(2, 15) + Date.now().toString(36);
};
