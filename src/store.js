import Vue from 'vue'
import Vuex from 'vuex'

import signin from './components/auth/signin'
import parking from './components/app/parking'


Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		signin: signin,	
		parking: parking	
	}
})