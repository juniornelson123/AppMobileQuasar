import axios from 'axios'
import consts from '../../consts'
import router from '../../router'
import { Toast } from 'quasar'

export default {
	login: function({ dispatch, commit }, values){
		axios.post(consts.consts.apiHost+'/api/sign_in', {user: {email: values.email, password: values.password}}).then((user) => {
			commit('LOGIN', user)
		}, (error) => {
			console.log(error)
			commit('LOADING', false)
			Toast.create({
        html: 'Erro ao efetuar login',
        color: 'white',
        bgColor: 'red'
      })
		})
	},

	register: ({dispatch, commit}, values) => {
		axios.post(consts.consts.apiHost+'/api/sign_up', {user: values}).then((user) => {
			commit('LOGIN', user)
		}, (error) => {
			console.log(error)
			commit('LOADING', false)
			Toast.create({
        html: 'Erro ao efetuar cadastro',
        color: 'white',
        bgColor: 'red'
      })
			
		})
	},

	startLoading: ({dispatch, commit}) => {
		commit('LOADING', true)
	},

	logout: function({ dispatch, commit }){
		commit('LOGOUT')
		router.push('/auth/entrar')	

	}
}