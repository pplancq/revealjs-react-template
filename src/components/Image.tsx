import { BaseComponent, type BaseComponentProps } from "@Front/components/BaseComponent";

type BlockProps = BaseComponentProps<"img">;

export const Image = ({ ...props }: BlockProps) => <BaseComponent component="img" {...props} />;
