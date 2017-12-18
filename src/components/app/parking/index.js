import consts from '../../../consts'
import getters from './getters'
import actions from './actions'
import router from '../../../router'

const state = {
	parkings: JSON.parse(localStorage.getItem(consts.consts.parking)) || [],
	parking: {},
	reserves: {},
	
}

const mutations = {
	GETPARKINGS(state, data){
		localStorage.setItem(consts.consts.parking, JSON.stringify(data.data))
		state.parkings = data.data	

	},

	GETPARKING(state, data) {
		console.log(data.data)
		state.parking = data.data
	},

	GETRESERVEVAGANCES(state, data) {
		console.log(data.data)
		state.reserves = data.data
	}


}

export default { state, mutations, getters, actions }
