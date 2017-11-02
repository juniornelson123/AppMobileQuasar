import consts from '../../../consts'
import getters from './getters'
import actions from './actions'
import router from '../../../router'

const state = {
	parkings: JSON.parse(localStorage.getItem(consts.consts.parking)) || []

}

const mutations = {
	GETPARKINGS(state, data){
		localStorage.setItem(consts.consts.parking, JSON.stringify(data.data))
		state.parkings = data.data	

	}
}

export default { state, mutations, getters, actions }
