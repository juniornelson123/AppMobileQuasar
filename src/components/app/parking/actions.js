import axios from 'axios'
import consts from '../../../consts'
import App from '../../../cable'
import router from '../../../router'


export default {
	getParkings({dispatch, commit, state}){
		console.log(router)
		axios.get(consts.consts.apiHost+"/api/parkings.json").then(parkings => {
			console.log(parkings)
			commit('GETPARKINGS', parkings)
			
		}).catch(error => {
			console.log(error)
		})

	},
	saveReserveVagance({dispatch, commit, state}, data){
		axios.post(consts.consts.apiHost+"/api/reserve_vagances.json",{parking_id: data, vagance_id: data, user_id: JSON.parse(localStorage.getItem(consts.consts.loginUser)).id}, {headers: {'access-token': JSON.parse(localStorage.getItem(consts.consts.loginUser)).token}}).then(vagances => {
			console.log(data)
			// App.parking.send_message('reserve', data, 'parking', 'reserve')
			router.push('/vagances')
			dispatch('getReserveVagances')
			
		}).catch(error => {
			console.log(error)
		})		
	},

	getReserveVagances({dispatch, commit, state}){
		var data = JSON.parse(localStorage.getItem(consts.consts.loginUser)).id
		axios.get(consts.consts.apiHost+"/api/reserve_vagances/"+data+".json", {headers: {'access-token': JSON.parse(localStorage.getItem(consts.consts.loginUser)).token}}).then(vagances => {
			console.log(vagances)
			commit('GETRESERVEVAGANCES', vagances)
		}).catch(error => {
			console.log(error)
		})
	},	
	permitedVagance({dispatch, commit, state}, id){
		var data = JSON.parse(localStorage.getItem(consts.consts.loginUser)).id
		axios.get(consts.consts.apiHost+"/api/reserve_vagances_permited/"+data+"/"+id+".json", {headers: {'access-token': JSON.parse(localStorage.getItem(consts.consts.loginUser)).token}}).then(vagances => {
			commit('PERMITEDVAGANCE', vagances)
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


