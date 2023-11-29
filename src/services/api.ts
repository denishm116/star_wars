import axios, { AxiosResponse } from 'axios'
import { SwResults } from '@/types/index'

export default {
	async getPeoples() {
		try {
			return await axios.get<SwResults>('https://swapi.dev/api/people')
		} catch (error) {
			console.log(error)
			throw new Error('Ошибка сервера')
		}
	},
	async getCharacter(id: string | number) {
		try {
			return await axios.get<SwResults>(`https://swapi.dev/api/people/${id}`)
		} catch (error) {
			console.log(error)
			throw new Error('Ошибка сервера')
		}
	},

	async search(str: string) {
		try {
			return await axios.get<SwResults>(`https://swapi.dev/api/people/?search=${str}`)
		} catch (error) {
			console.log(error)
			throw new Error('Ошибка сервера')
		}
	}

	// etc
}
