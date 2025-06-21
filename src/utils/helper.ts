export const flattenDrinkOptions = (options: {
	[key: string]: string[];
}): { [key: string]: string } => {
	const flattenedOptions = Object.create({});

	Object.keys(options).forEach((key) => {
		Object.assign(flattenedOptions, { [key]: '' });
	});

	return flattenedOptions;
};
