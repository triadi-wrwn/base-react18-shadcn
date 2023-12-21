import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, ScrollArea } from 'components/ui';
import { cn } from 'lib/utility/cn';
import { SidebarProps } from './sidebar.type';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Sidebar = ({
	className,
	menus,
}: SidebarProps) => {
	const location = useLocation();
	const initialLastPath = location.pathname.split('/');
	const [lastPath, setLastPath] = useState<string>(
		initialLastPath[initialLastPath.length - 1]
	);

	useEffect(() => {
		const pathArr = location.pathname.split('/');
		setLastPath(pathArr[pathArr.length - 1]);
	}, [location.pathname]);

	return (
		<div className={cn(className)}>
			<Button
				variant='link'
				className='w-full justify-start h-14 px-3 pl-8 text-2xl hover:no-underline'
			>
				Kartala
			</Button>
			<ScrollArea className='h-[calc(100vh-3.5rem)] px-1'>
				<div className='space-y-4 pb-4'>
					<div className='px-3 py-2'>
						{/* <h2 className='mb-2 px-4 text-lg font-semibold tracking-tight'>
							Discover
						</h2> */}
						<div className='space-y-1'>
							{menus.map((menu) =>
								menu.childrens.length ? (
									<Accordion
										key={menu.label}
										type='single'
										className='px-4'
										defaultValue={location.pathname.includes(menu.pathname) ? menu.pathname : ''}
										collapsible
									>
										<AccordionItem value={menu.pathname} className='border-0'>
											<AccordionTrigger className='justify-between hover:no-underline py-2'>
												<div className='flex items-center'>
													<menu.icon className='mr-2' />
													{menu.label}
												</div>
											</AccordionTrigger>
											<AccordionContent>
												{menu.childrens.map((childMenu) => (
													<NavLink
														key={childMenu.label}
														to={`./${menu.pathname}/${childMenu.pathname}`}
													>
														<Button
															variant={
																lastPath === childMenu.pathname
																	? 'secondary'
																	: 'ghost'
															}
															className='w-full justify-start'
														>
															<childMenu.icon className='mr-2' />
															{childMenu.label}
														</Button>
													</NavLink>
												))}
											</AccordionContent>
										</AccordionItem>
									</Accordion>
								) : (
									<NavLink
										key={menu.label}
										to={menu.pathname ? `./${menu.pathname}` : ''}
									>
										<Button
											variant={
												lastPath === menu.pathname ||
												(!menu.pathname && lastPath === 'dashboard')
													? 'secondary'
													: 'ghost'
											}
											className='w-full justify-start'
										>
											<menu.icon className='mr-2' />
											{menu.label}
										</Button>
									</NavLink>
								)
							)}
						</div>
					</div>
				</div>
			</ScrollArea>
		</div>
	);
}

export default Sidebar;