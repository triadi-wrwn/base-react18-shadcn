import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/sidebar';
import { menus } from './data/menu';
import Topbar from './topbar/topbar';
import { Toaster } from 'components/ui/toaster';

const MainLayout = () => {
  return (
		<div className='grid lg:grid-cols-5'>
			<Sidebar menus={menus} className='hidden lg:block' />
			<div className='col-span-3 lg:col-span-4 lg:border-l'>
				<Topbar />
				<div className='px-4 py-6 lg:px-8'>
					<Outlet />
				</div>
			</div>
			<Toaster />
		</div>
	);
}

export default MainLayout
