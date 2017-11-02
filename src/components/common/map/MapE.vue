<template>
  <div>
    
    <gmap-map 
          class="google-map"
          :center="center"
          :zoom="12"
          :position="center"
          @center_changed="updateCenter"
          @click="location"
      >
    <gmap-marker v-for="p in parkings" :position="{lat: p.address.lat, lng: p.address.lng}" :clickable="true" @position_changed="drag(m, 'position', $event)"></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  
  mounted(){
    // this.center = {lat: this.lat, lng: this.lng}
    
  },
  props: ['name', 'parkings'],
  data: function () {
    return {
      mapName: this.name + "-map",
      center: {lat: -5.080941522154494, lng: -42.7812210470438},
      markers: [],
      dragLat: 0,
      dragLng: 0
       
    }
  },
  methods: {
    drag: function(object, field, event){
      console.log(event.lat())
      // this.dragLat = event.lat()
      // this.dragLng = event.lng()
      
    },

    location: function(e){
      console.log(e.latLng.lat(), e.latLng.lng())
      this.center = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      }
      this.markers = [{
        position: {
          lat: this.lat,
          lng: this.lng
        }
      }]
    },

    updateCenter: function(center){
      this.center = {
        lat: center.lat(),
        lng: center.lng()
      }

    }


  }
}
</script>

<style scoped>

</style>