import DataTable from 'components/ui-group/datatable/DataTable';
import { columns } from './data/columns';

const Users = () => {
  return (
		<div>
			<h3 className='mb-4 scroll-m-20 text-2xl font-semibold tracking-tight'>
				User List
			</h3>
			<DataTable
				data={[]}
				columns={columns}
				next={'x'}
				previous={''}
				total={10}
			/>
		</div>
	);
}

export default Users