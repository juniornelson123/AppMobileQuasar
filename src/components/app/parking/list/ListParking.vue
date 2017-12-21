<template>
	<div>
    <div v-if="parkings.length > 0">  
      <div v-for="parking in parkings">
        <card-parking :id="parking.id" :disp ='parking.vagances_disp
    ' :title="parking.name" :description="parking.description" :prices="parking.prices" :detail='true' :image="parking.images[0] ? parking.images[0].image.url : 'http://www.vagabarata.com.br/blog/wp-content/uploads/2014/06/Texto-6-escolha-o-melhor-estacionamento-pr%C3%B3ximo-ao.jpg'"/>
      </div>

    </div>
    <div class="title-center" v-else>
      <span style="font-size: 24px;">Sem Estacionamentos Cadastrados</span>
    </div>
  
  </div>
</template>

<script>
import { 
  QPullToResfresh,
  QContextMenu,
  QList,
  QItem,
  QItemSide,
  QItemMain,
  QTab,
  QTabPane,
  QTabs
} from 'quasar'
import CardParking from './CardParking.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    QPullToResfresh,
  	CardParking
  },
  props: ['parkings'],
  data () {
    return {
    	
    }
  },
  methods:{
    refresher(){
      this.getParkings()
    },
    ...mapActions([
      'getParkings',
    
    ])

  },
}
</script>

<style>
  .title-center {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100%; }
</style>
