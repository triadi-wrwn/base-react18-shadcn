import { AUTH_TOKEN_NAME } from 'lib/constants/common';
import useAuth from 'lib/hooks/useAuth';
import { getToken } from 'lib/utility/token';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
	const location = useLocation();
	// const navigate = useNavigate();
	const { currentUser, setCurrentUser, setAuthenticated, setRole } = useAuth();

	// const logout = () => {
	// 	Cookies.remove(AUTH_TOKEN_NAME);
	// 	Cookies.remove('datareservasi');
	// 	localStorage.removeItem(AUTH_TOKEN_NAME);
	// 	setAuthenticated(false);
	// 	setRole(undefined);
	// 	setCurrentUser(undefined);
	// 	navigate('/login');
	// 	window.location.reload();
	// };



	let token = getToken(AUTH_TOKEN_NAME);

	if (!token) {
		token = localStorage.getItem(AUTH_TOKEN_NAME);
	}

	useEffect(() => {
		if (token && !currentUser) {
			// (async () => {
			// 	await authMe().then((ress) => {
			// 		const user: IUser = {
			// 			id: ress.data.data?.id,
			// 			...ress.data.data?.attributes,
			// 		};
			// 		setCurrentUser(user);
			// 		setAuthenticated(true);
			// 		setRole(user.roles[0]?.name);
			// 	});
			// })();
		}
    }, [currentUser, location, setAuthenticated, setCurrentUser, setRole, token]);

	// return token ? (
	// 	<>
	// 		<Outlet />
	// 	</>
	// ) : (
	// 	<Navigate to={`/login?backUrl=${location.pathname}`} replace />
	// );
	return (
        <Outlet />
	);
};

export default ProtectedRoute;
