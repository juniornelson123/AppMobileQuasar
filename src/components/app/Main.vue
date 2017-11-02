<template>
  <div>
  	
	  <q-tabs>
	  	<!-- Tabs - notice slot="title" -->
		  <q-tab default slot="title" name="tab-1" icon="list" >Lista</q-tab>
		  <q-tab alert slot="title" name="tab-2" icon="map">Mapa</q-tab>
		  <!-- Targets -->
		  <q-tab-pane name="tab-1"><list-parking :parkings="parkings"/> </q-tab-pane>
		  <q-tab-pane class ="map-container" name="tab-2"><map-parking :parkings="parkings"/></q-tab-pane>
		</q-tabs>
  </div>
</template>

<script>

import { 
	QContextMenu,
	QList,
	QItem,
	QItemSide,
	QItemMain,
	QTab,
	QTabPane,
	QTabs
} from 'quasar'
import ListParking from './parking/list/ListParking.vue'
import MapParking from './parking/map/MapParking.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
		...mapGetters([
      'parkings'
		])
	},
	components: {
		QContextMenu,
		QList,
		QItem,
		QItemSide,
		QItemMain,
		QTab,
		QTabPane,
		QTabs,
		ListParking,
		MapParking
	},
  data () {
    return {}
  },
  methods:{
  	...mapActions([
      'getParkings',
		])

  },
  created: function(){
		this.getParkings()
	}

}
</script>

<style lang="stylus">
.map-container 
  width 100%
  height 60%


  
.google-map 
  position relative
  width 100%
  height 400px
  margin 0 auto
  background gray

</style>
