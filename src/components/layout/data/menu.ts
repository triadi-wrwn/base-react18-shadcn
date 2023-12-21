import { Menu } from '../sidebar/sidebar.type';
import { DashboardIcon, PersonIcon, CubeIcon, ViewHorizontalIcon, ReaderIcon } from '@radix-ui/react-icons';

export const menus: Menu[] = [
	{
		label: 'Dashboard',
		pathname: '',
		icon: DashboardIcon,
		childrens: []
	},
	{
		label: 'Master Data',
		pathname: 'master-data',
		icon: CubeIcon,
		childrens: [
			{
				label: 'Users',
				pathname: 'users',
				icon: PersonIcon,
				childrens: []
			},
			{
				label: 'Departments',
				pathname: 'departments',
				icon: ViewHorizontalIcon,
				childrens: []
			},
		]
	},
	{
		label: 'Order Management',
		pathname: 'order-management',
		icon: ReaderIcon,
		childrens: []
	},
]