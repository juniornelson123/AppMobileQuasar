import axios from 'axios'
import consts from '../../../consts'

export default {
	getParkings({dispatch, commit, state}){
		axios.get(consts.consts.apiHost+"/api/parkings.json").then(parkings => {
			console.log(parkings)
			commit('GETPARKINGS', parkings)
			
		}).catch(error => {
			console.log(error)
		})

	}
}


