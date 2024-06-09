'use client'

export default function Button() {
	return (
		<button onClick={() => {
			console.log('button clicked')
		}} className="font-sans font-bold p-2 bg-sky-500 text-white rounded">Execute</button>
	)
}