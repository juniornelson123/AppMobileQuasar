<template>
	<div>
    
  <div v-for="parking in parkings">
    <card-parking :title="parking.name" :description="parking.description" :prices="parking.prices" :image="parking.images[0].image.url ? parking.images[0].image.url : 'http://www.vagabarata.com.br/blog/wp-content/uploads/2014/06/Texto-6-escolha-o-melhor-estacionamento-pr%C3%B3ximo-ao.jpg'"/>
  </div>

  </div>
</template>

<script>

import CardParking from './CardParking.vue'

export default {
  components: {
  	CardParking
  },
  props: ['parkings'],
  data () {
    return {
    	prices: [
    		'R$ 3,00',
    		'R$ 4,00', 
    		'R$ 5,00'
    	]
    }
  }
}
</script>

<style>
</style>
