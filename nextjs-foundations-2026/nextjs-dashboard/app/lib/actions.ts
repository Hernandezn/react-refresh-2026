'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import postgres from "postgres";
import z from "zod";

const sql = postgres(process.env.POSTGRES_URL!, {ssl: 'require'});

// creates an object format that can be easily validated against & parsed into the desired type
const FormSchema = z.object(
    {
        id: z.string(),
        customerId: z.string(),
        amount: z.coerce.number(),
        status: z.enum(['pending', 'paid']),
        date: z.string()
    }
);
const CreateInvoice = FormSchema.omit({ id: true, date: true });

export async function createInvoice(formData: FormData) {
    // const rawFormData = {
    const { customerId, amount, status } = CreateInvoice.parse(
        {
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
            status: formData.get('status')
        }
    );
    // console.log(typeof rawFormData.amount);
    // console.log(rawFormData);

    const amountInCents = amount * 100;
    
    // YYYY-MM-DD
    const date =
        // Sun Apr 19 2026 14:30:02 GMT-0400
        new Date()
            // '2026-04-19T18:30:02.141Z'
            .toISOString()
            // ['2026-04-19', '18:30:02.141Z']
            .split('T')
            // '2026-04-19'
            [0]
    ;
    
    try {
        await sql`
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;
    
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to create invoice.');
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}

const UpdateInvoice = FormSchema.omit({id: true, date: true});
export async function updateInvoice(id: string, formData: FormData) {
    const { customerId, amount, status } = UpdateInvoice.parse(
        {
            customerId: formData.get('customerId'),
            amount: formData.get('amount'),
            status: formData.get('status')
        }
    );
    const amountInCents = amount * 100;

    try {
        await sql`
            UPDATE invoices
            SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
            WHERE id = ${id}
        `;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to update invoice data.');
    }

    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices')
}


export async function deleteInvoice(id: string) {
    // throw new Error('Failed to delete invoice data.');

    try {
        await sql`
            DELETE FROM invoices WHERE id = ${id}
        `;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to delete invoice data.');
    }

    revalidatePath('/dashboard/invoices');
}
