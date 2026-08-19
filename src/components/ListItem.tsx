import { BaseComponent, type BaseComponentProps } from "@Front/components/BaseComponent";

type ListItemProps = {} & BaseComponentProps<"li">;

export const ListItem = ({ ...props }: ListItemProps) => <BaseComponent component="li" {...props} />;
