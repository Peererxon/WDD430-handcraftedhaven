'use server'
import { redirect } from 'next/navigation'
 
export async function ModifyProduct(formData: FormData, images: File[], mainImage: number | null): Promise<void> {
  // Create a new post
  // ...

  const data: { [key: string]: FormDataEntryValue } = {}

  const files = images;

  // using mainImage, put it in first position and then add the rest of the images
  if (mainImage !== null) {
    files.unshift(files.splice(mainImage, 1)[0]);
  }

  formData.forEach((value, key) => {
    console.log(key, value)
    data[key] = value
  })

  
  redirect(`/`)
}