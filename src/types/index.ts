export type Character = {
	id: string
	name: string
	height: string
	mass: string
	hair_color: string
	url: string
}
export type SwResults = {
	results: Character[]
}
export type Response = {
	data: SwResults
}
