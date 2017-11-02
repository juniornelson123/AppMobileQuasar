import consts from '../../consts'
export default {
	isLogged: (state) => {
		return state.logged
	},

	loading: (state) => {
		return state.loading
	},

	email: (state) => {
		return state.email
	},

	password: (state) => {
		return state.password
	}
}
