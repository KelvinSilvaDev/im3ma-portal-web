'use client'
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from 'react-hook-form';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

type LoginFormValues = z.infer<typeof LoginFormSchema>;

export function LoginForm() {

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema)
  });

  async function handleLogin(data: LoginFormValues) {
    console.log(data);
    const response = await fetch('https://localhost:3333/login', { method: "POST", body: JSON.stringify(data) }).then(response => response.json());

    console.log(response);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleLogin)} className='w-full space-y-6'>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input {...field} placeholder='Email' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input {...field} type='password' placeholder='Password' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Link  href="/admin">
          <Button>Login</Button>
        </Link>
        {/* <Button type="submit">Login</Button> */}
      </form>
    </Form>
  )
}