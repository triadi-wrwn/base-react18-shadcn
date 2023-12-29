import { ColumnDef } from '@tanstack/react-table';
import capitalize from 'lib/utility/capitalize';
import { Link } from 'react-router-dom';
import { User } from '../users.type';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'fullname',
    header: 'Name',
    cell: ({ row }) => (
      <Link to={`./${row.original.id}`}>
        {capitalize(row.getValue('fullname'))}
      </Link>
    ),
  },
  {
    accessorKey: 'email',
    header: 'Email',
    // cell: ({ row }) => (
    //   <Link to={`./${row.getValue('email')}`}>
    //     {capitalize(row.getValue('email'))}
    //   </Link>
    // ),
  },
  {
    accessorKey: 'address',
    header: 'Address',
    // cell: ({ row }) => (
    //   <Link to={`./${row.getValue('email')}`}>
    //     {capitalize(row.getValue('email'))}
    //   </Link>
    // ),
  },
  {
    accessorKey: 'phone',
    header: 'Phone',
    // cell: ({ row }) => (
    //   <Link to={`./${row.getValue('phone')}`}>
    //     {capitalize(row.getValue('phone'))}
    //   </Link>
    // ),
  },
];
