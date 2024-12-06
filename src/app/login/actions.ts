'use server'
import { redirect } from 'next/navigation'
 
export async function LoginForm(formData: FormData): Promise<void> {
  // Create a new post
  // ...

  const data: { [key: string]: FormDataEntryValue } = {}

  formData.forEach((value, key) => {
    console.log(key, value)
    data[key] = value
  })

  
  redirect(`/`)
}