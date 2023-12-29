import { z } from 'zod';

const profileFormSchema = z.object({
	username: z
		.string({
			required_error: 'Username is required.',
		})
		.min(2, {
			message: 'Username must be at least 2 characters.',
		})
		.max(30, {
			message: 'Username must not be longer than 30 characters.',
		}),
	bio: z.string().max(160).min(4),
	urls: z
		.array(
			z.object({
				value: z.string().url({ message: 'Please enter a valid URL.' }),
			})
		)
		.optional(),
});

export default profileFormSchema;