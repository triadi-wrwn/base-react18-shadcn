import DataTable from 'components/ui-group/datatable/DataTable';
import { columns } from './data/columns';
import { DataTableDemo } from 'components/ui-group/datatable/DataTable2';
import { Button } from 'components/ui';
import { NavLink } from 'react-router-dom';
const data = [
	{
		id: '12',
		fullname: 'Ujang',
		email: 'anu@gmail.com',
		address: 'Bandung',
		phone: '123'
	},
	{
		id: '13',
		fullname: 'Banu',
		email: 'banu@gmail.com',
		address: 'jakarta',
		phone: '123'
	},
]
const Users = () => {
  return (
	  <div>
		  <div className='flex justify-between items-center mb-3'>

			<h3 className='mb-4 scroll-m-20 text-2xl font-semibold tracking-tight'>
				User List
			  </h3>
			  <NavLink to={'./create'}>

			  <Button variant={'default'} size={'default'}>Add User</Button>
			  </NavLink>
		  </div>
			{/* <DataTable
				data={data}
				columns={columns}
				next={'x'}
				previous={''}
				total={10}
		  /> */}
		  <DataTableDemo  />
		</div>
	);
}

export default Users