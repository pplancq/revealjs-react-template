import { BaseComponent, type BaseComponentProps } from "@Front/components/BaseComponent";

type TitleProps = {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & BaseComponentProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export const Title = ({ variant = "h1", ...props }: TitleProps) => <BaseComponent component={variant} {...props} />;
