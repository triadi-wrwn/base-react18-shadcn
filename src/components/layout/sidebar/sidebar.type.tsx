import { IconProps } from '@radix-ui/react-icons/dist/types';

export type Menu = {
	label: string;
	pathname: string;
	icon: React.ForwardRefExoticComponent<
		IconProps & React.RefAttributes<SVGSVGElement>
	>;
	childrens: Menu[];
};

export type SidebarProps = React.HTMLAttributes<HTMLDivElement> & {
	menus: Menu[];
};