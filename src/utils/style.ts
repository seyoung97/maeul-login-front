export const getRootStyles = () => {
	return window.getComputedStyle(
		document.documentElement.classList.contains("darkMode") ? document.documentElement : document.body,
	);
};

export const getSemanticColor = (color: string): string => {
	console.assert(color.startsWith("--c-"), "Color must be a CSS variable");
	const rootStyles = getRootStyles();
	return rootStyles.getPropertyValue(color).trim();
};
