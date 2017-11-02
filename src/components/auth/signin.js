import consts from '../../consts'
import getters from './getters'
import actions from './actions'
import router from '../../router'

const state = {
	email: '',
	password: '',
	logged: JSON.parse(localStorage.getItem(consts.consts.loginUser))

}

const mutations = {
	LOGIN(state, data){
		localStorage.setItem(consts.consts.loginUser, JSON.stringify(data.data))
		state.logged = data.data

		router.push('/')	

	},

	LOGOUT(state){
		state.logged = false
		localStorage.removeItem(consts.consts.loginUser)
		localStorage.removeItem(consts.consts.parking)
	}
}

export default { state, mutations, getters, actions }
