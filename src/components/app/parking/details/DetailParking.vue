
<template>
	<div>
		
		<div v-if="parking.id">
			<card-parking :title="parking.name" :id="parking.id" :description="parking.description" :prices="parking.prices" :disp ='parking.vagances_disp
' :image="parking.image ? parking.image : 'http://www.vagabarata.com.br/blog/wp-content/uploads/2014/06/Texto-6-escolha-o-melhor-estacionamento-pr%C3%B3ximo-ao.jpg'" :detail='false'/>
    <q-card inline style="width: 95%;">
      <q-card-title>
      </q-card-title>
      <q-card-main>
        <div v-for="price in parking.prices">
          <p class="text-faded">{{price.hour}} horas - R$ {{parseFloat(price.value)}},00</p>
        </div>
        
      </q-card-main>
      
    </q-card>
		<q-card inline style="width: 95%;">
			<q-card-title>
			</q-card-title>
			<q-card-main>
				<p class="text-faded">{{parking.address.cep}} - {{parking.address.district}} - {{parking.address.address}} - {{parking.address.number}}</p>
				<p class="text-faded">{{parking.address.city_name}} - {{ parking.address.state}}</p>
			  
			</q-card-main>
			
		</q-card>

		</div>
	
	</div>
	
</template>


<script>
import {
  QList,
  QListHeader,
  QContextMenu,
  QItem,
  QItemSide,
  QItemMain,
  QLayout,
  QBtn,
  QIcon,
  QToolbar,
  QToolbarTitle,
  QCard,
	QCardTitle,
	QCardMain,
	QCardSeparator,
	QCardActions
} from 'quasar'

import CardParking from '../list/CardParking.vue'
import { mapActions, mapGetters } from 'vuex'
import axios from 'axios'
import consts from '../../../../consts'
export default {
	computed: {

    ...mapGetters([
    	'parking'
    ])
	},
  components: {
    QList,
    QListHeader,
    QContextMenu,
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QLayout,
    QBtn,
    QIcon,
    QToolbar,
    QToolbarTitle,
    CardParking,
    QCard,
		QCardTitle,
		QCardMain,
		QCardSeparator,
		QCardActions
  },
  data () {
    return {
    	
    }
  },

  created: function(){
  	this.getParkings(this.$route.params.idParking)
		
	},

	mounted: function(){
	},
  methods: {
  	getParkings(data){
  		axios.get(consts.consts.apiHost+"/api/parkings/show_parking/"+data+".json").then(parking => {
				console.log(parking)
				this.getParking(parking)
				this.$nextTick(() => {
            console.log('re-render start')
            this.$nextTick(() => {
            	console.log(this.parking)
                console.log('re-render end')
            })
        })
				
			}).catch(error => {
				console.log(error)
			})		
		},
		...mapActions([
			'getParking'
    ])
  }
}
</script>