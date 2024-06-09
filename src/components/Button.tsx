'use client'


export default function Button({ createItem }: { createItem: any }) {
	return (
		<button onClick={() => {
			createItem()
		}} className="font-sans font-bold p-2 bg-sky-500 text-white rounded">Execute</button>
	)
}