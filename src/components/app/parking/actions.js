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

	},

	getParking({dispatch, commit, state}, data){
		commit('GETPARKING', data)
		console.log(data)
		console.log("enviou os dados")
		// axios.get(consts.consts.apiHost+"/api/parkings/show_parking/"+data+".json").then(parking => {
		// 	console.log(parking)
			
		// }).catch(error => {
		// 	console.log(error)
		// })		
	}
}


