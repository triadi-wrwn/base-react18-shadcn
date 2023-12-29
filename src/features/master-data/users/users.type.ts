import { z } from 'zod';
import profileFormSchema from './data/schema';

export type User = {
    id: string;
    fullname: string;
    email: string;
    address: string;
    phone: string;
}
export type ProfileFormValues = z.infer<typeof profileFormSchema>;