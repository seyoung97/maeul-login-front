import { useEffect, useState } from "react";

import { getSemanticColor } from "@/utils/style";


const useSemanticColor = (value: string): string => {
	console.assert(value.startsWith("--c-"), "Color must be a CSS variable");

	const [color, setColor] = useState(() => getSemanticColor(value));

	useEffect(() => {
		setColor(getSemanticColor(value));
	}, [value]);

	return color;
};

export default useSemanticColor;
