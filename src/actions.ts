import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function createItem() {
	'use server'

	try {
		const newItem = await prisma.groceryList.create({
			data: {
				title: 'White rice 5 kg'
			}
		})
		console.log(newItem)
	} catch (error) {
		console.error(error)
	}
	revalidatePath('/')
}