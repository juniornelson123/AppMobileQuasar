export default {
	parkings: (state) => {
		return state.parkings
	},

	parking: (state) => {
		return state.parking
	},
	reserves: (state) => {
		return state.reserves.array
	},
	permited: (state) => {
		return state.permited
	},
}
