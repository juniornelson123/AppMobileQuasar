<template>
  <q-card inline style="width: 95%;">
		<q-card-media>
		  <img style="height: 150px;" :src="image || 'http://www.vagabarata.com.br/blog/wp-content/uploads/2014/06/Texto-6-escolha-o-melhor-estacionamento-pr%C3%B3ximo-ao.jpg'">
		</q-card-media>
		<q-card-title>
			{{title}}
		</q-card-title>
		<q-card-main>
		  <p class="text-faded">{{description}}</p>
		  <p class="text-faded">{{disp}} vagas disponiveis</p>
		</q-card-main>
		<q-card-separator />
		<q-card-actions>
		  <q-btn flat round small><q-icon name="event" /></q-btn>
		  <div v-if="!detail && permited">
		  	<q-btn flat color="primary" @click='saveReserveVagance(id)'>Solicitar Vaga</q-btn>
		  </div>
		  <div v-if="!detail && !permited">
		  	<q-btn flat color="primary" @click="$router.push('/vagances')">Vaga Solicitada</q-btn>
		  </div>
		  <div v-if="detail">
		  	<router-link :to="{ name: 'detail', params: { idParking: id }}"><q-btn flat color="primary">Detalhes</q-btn></router-link>
		  </div>

		  <!-- <q-btn flat color="primary">Detalhes</q-btn> -->
		</q-card-actions>
	</q-card>
</template>

<script>
import { 
	QCard,
	QIcon,
	QBtn,
	QCardMedia,
	QCardTitle,
	QCardMain,
	QCardSeparator,
	QCardActions
} from 'quasar'
import {mapActions, mapGetters} from 'vuex'
export default {

	computed: {
		 idParking(){
		 	return this.id 

		 },
		...mapGetters([
			'permited'
		]) 
	},
	components: {

	QIcon,
	QBtn,
	QCard,
	QCardMedia,
	QCardTitle,
	QCardMain,
	QCardSeparator,
	QCardActions
	},
	props: ['id', 'detail', 'disp', 'title','description', 'prices', 'link', 'image'],
  data () {
    return {
  
    }
  },
  created(){
  	this.permitedVagance(this.id)
  },
  methods: {
  	...mapActions([
  		'saveReserveVagance',
  		'permitedVagance'
  	]),
  	
  	reserveVagance(){
  		// console.log(idParking)
  		this.saveReserveVagance(this.id)
  	}
  }
}
</script>

<style>
</style>
