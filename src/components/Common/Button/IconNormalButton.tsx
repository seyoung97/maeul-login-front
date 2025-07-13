// import { type ReactNode, useMemo } from "react";

// import cx from "clsx";

// import type { IconNormalButtonProps } from "./types";

// import Interaction from "../Interaction";

// import styles from "./iconNormalButton.module.scss";

// const IconNormalButton: React.FC<IconNormalButtonProps> = ({
// 	size,
// 	className,
// 	icon: iconProp,
// 	darkThemeIcon,
// 	disabled,
// 	badge,
// 	...props
// }) => {
// 	const { theme } = useThemeStore();
// 	const icon = useMemo<ReactNode>(() => {
// 		if (darkThemeIcon && theme === "dark") return darkThemeIcon;
// 		return iconProp;
// 	}, [darkThemeIcon, iconProp, theme]);

// 	return (
// 		<button
// 			className={cx(styles.wrapper, className, styles[size], {
// 				[styles.badge]: badge,
// 			})}
// 			disabled={disabled}
// 			{...props}
// 		>
// 			{icon}
// 			<Interaction backgroundColor="--c-label-normal" variant="light" disabled={disabled} />
// 		</button>
// 	);
// };

// export default IconNormalButton;
