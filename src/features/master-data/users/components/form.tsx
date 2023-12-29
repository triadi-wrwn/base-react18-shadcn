import { Button, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from 'components/ui';
import { Input } from 'components/ui/input';
import { Textarea } from 'components/ui/textarea';
import { cn } from 'lib/utility/cn';
import { useFieldArray, useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { ProfileFormValues } from '../users.type';
import { useToast } from 'lib/hooks/useToast';
import profileFormSchema from '../data/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Separator } from 'components/ui/separator';

const FormUser = () => {
	const { toast } = useToast();
	const form = useForm<ProfileFormValues>({
		resolver: zodResolver(profileFormSchema),
		defaultValues,
		mode: 'onChange',
	});

	const { fields, append } = useFieldArray({
		name: 'urls',
		control: form.control,
	});

	function onSubmit(data: ProfileFormValues) {
		console.log(data);
		toast({
			title: 'You submitted the following values:',
			description: (
				<pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
					<code className='text-white'>{JSON.stringify(data, null, 2)}</code>
				</pre>
			),
		});
	}
  return (
		<div>
			<div className='flex justify-between items-center'>
				{/* <h3 className='mb-4 scroll-m-20 text-2xl font-semibold tracking-tight'>
					Create User
				</h3> */}
				<h3 className='text-lg font-medium'>Create User</h3>
			</div>
			<Separator className='my-3' />
			<div className='lg:max-w-3xl'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit, (e) => console.log(e))} className='space-y-8'>
						<FormField
							control={form.control}
							name='username'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Username</FormLabel>
									<FormControl>
										<Input placeholder='shadcn' {...field} />
									</FormControl>
									<FormDescription>
										This is your public display name. It can be your real name
										or a pseudonym. You can only change this once every 30 days.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='bio'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Bio</FormLabel>
									<FormControl>
										<Textarea
											placeholder='Tell us a little bit about yourself'
											className='resize-none'
											{...field}
										/>
									</FormControl>
									<FormDescription>
										You can <span>@mention</span> other users and organizations
										to link to them.
									</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<div>
							{fields.map((field, index) => (
								<FormField
									control={form.control}
									key={field.id}
									name={`urls.${index}.value`}
									render={({ field }) => (
										<FormItem>
											<FormLabel className={cn(index !== 0 && 'sr-only')}>
												URLs
											</FormLabel>
											<FormDescription className={cn(index !== 0 && 'sr-only')}>
												Add links to your website, blog, or social media
												profiles.
											</FormDescription>
											<FormControl>
												<Input {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							))}
							<Button
								type='button'
								variant='outline'
								size='sm'
								className='mt-2'
								onClick={() => append({ value: '' })}
							>
								Add URL
							</Button>
						</div>
						<div className='flex space-x-3'>
							<Button type='submit' className='px-8'>
								Save
							</Button>
							<NavLink to={'../users'}>
								<Button variant={'secondary'} size={'default'}>
									Cancel
								</Button>
							</NavLink>
						</div>
					</form>
				</Form>
			</div>
		</div>
	);
}

export default FormUser



// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
	bio: 'I own a computer.',
	urls: [
		{ value: 'https://shadcn.com' },
		{ value: 'http://twitter.com/shadcn' },
	],
};
