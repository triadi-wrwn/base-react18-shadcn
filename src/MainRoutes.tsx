import MainLayout from 'components/layout/mainlayout';
import ProtectedRoute from 'config/ProtectedRoute';
import Dashboard from 'features/dashboard/dashboard';
import { Departments, FormDepartment } from 'features/master-data/departments';
import { FormUser, Users } from 'features/master-data/users';
import { Routes, Route, Navigate } from 'react-router-dom';

const MainRoutes = () => {
  return (
		<Routes>
			<Route path='/' element={<Navigate to='dashboard' replace />} />
			<Route path='/dashboard' element={<ProtectedRoute />}>
				<Route element={<MainLayout />}>
					<Route index element={<Dashboard />} />
					<Route path='master-data'>
						<Route path='users' element={<Users />} />
						<Route path='users/:id' element={<FormUser />} />
						<Route path='departments' element={<Departments />} />
						<Route path='departments/:id' element={<FormDepartment />} />
					</Route>
				</Route>
			</Route>
		</Routes>
	);
}

export default MainRoutes