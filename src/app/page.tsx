import { PrismaClient } from '@prisma/client'
import Button from '@/components/Button'

const prisma = new PrismaClient()

export default async function Home() {
	const list = await prisma.groceryList.findMany()

	return (
		<div><h1 className="text-2xl font-black">Next</h1>
			<ul>
				{list.map((item) => (
					<li key={item.id}>{item.title}</li>
				))}
			</ul>
			<Button />
		</div>
	)
}
