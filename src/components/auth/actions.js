import axios from 'axios'
import consts from '../../consts'
import router from '../../router'

export default {
	login: function({ dispatch, commit }, values){
		axios.post(consts.consts.apiHost+'/api/sign_in', {user: {email: values.email, password: values.password}}).then((user) => {
			commit('LOGIN', user)
		}, (error) => {
			console.log(error)
		})
	},

	register: ({dispatch, commit}, values) => {
		axios.post(consts.consts.apiHost+'/api/sign_up', {user: values}).then((user) => {
			commit('LOGIN', user)
		}, (error) => {
			console.log(error)
			
		})
	},

	logout: function({ dispatch, commit }){
		commit('LOGOUT')
		router.push('/auth/entrar')	

	}
}