import consts from '../../consts'
export default {
	isLogged: (state) => {
		return state.logged
	},

	email: (state) => {
		return state.email
	},

	password: (state) => {
		return state.password
	}
}
