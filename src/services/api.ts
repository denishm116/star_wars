import axios from 'axios'
// Сдесь я бы настроил interseptor

export default {
	async getPeoples() {
		try {
			return await axios.get('https://swapi.dev/api/people')
		} catch (error) {
			console.log(error)
		}
	},

	async getCharacter(id: string | number) {
		try {
			return await axios.get(`https://swapi.dev/api/people/${id}`)
		} catch (error) {
			console.log(error)
		}
	},

	async search(str: string) {
		try {
			return await axios.get(`https://swapi.dev/api/people/?search=${str}`)
		} catch (error) {
			console.log(error)
		}
	}
}
