import type { ComponentProps, ReactNode } from "react";

type ButtonSize = "large" | "medium" | "small";
type ButtonSizeWithoutLarge = Exclude<ButtonSize, "large">;

interface BaseButtonProps extends ComponentProps<"button"> {
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
	size: ButtonSize;
}

interface BaseButtonPropsWithoutSizeLarge extends BaseButtonProps {
	size: ButtonSizeWithoutLarge;
}

interface IconButtonProps<Size> extends Omit<ComponentProps<"button">, "children"> {
	size: Size;
	darkThemeIcon?: ReactNode;
	icon: ReactNode;
}

export type SolidPrimaryButtonProps = BaseButtonProps;
export type OutlinedPrimaryButtonProps = BaseButtonProps;
export type OutlinedSecondaryButtonProps = BaseButtonProps;
export type OutlinedAssistiveButtonProps = BaseButtonPropsWithoutSizeLarge;

export type TextPrimaryButtonProps = BaseButtonPropsWithoutSizeLarge;
export type TextAssistiveButtonProps = BaseButtonPropsWithoutSizeLarge;

export interface IconNormalButtonProps extends IconButtonProps<"custom"> {
	badge: boolean;
}
export type IconBackgroundButtonProps = IconButtonProps<"custom">;
export type IconOutlinedButtonProps = IconButtonProps<"custom" | "normal" | "small">;
export type IconSolidButtonProps = IconButtonProps<"custom" | "normal" | "small">;
export interface FloatingActionButtonProps extends Omit<ComponentProps<"button">, "children"> {
	darkThemeIcon: ReactNode;
	icon: ReactNode;
}
