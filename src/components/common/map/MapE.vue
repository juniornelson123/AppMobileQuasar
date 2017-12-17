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
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">
        <div>
          {{infoName}} - {{infoVagance}} vagas
          <router-link :to="{ name: 'detail', params: { idParking: id }}"><q-btn flat color="primary">Detalhes</q-btn></router-link>
        </div>

      </gmap-info-window>
    <gmap-marker v-for="p in parkings" :position="{lat: p.address.lat, lng: p.address.lng}" :clickable="true" @click="toggleInfoWindow(p)" @position_changed="drag(m, 'position', $event)"></gmap-marker>
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
      dragLng: 0,
      infoName: '',
      infoVagance: '',
      id: 0,
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
       
    }
  },
  methods: {
    
    toggleInfoWindow: function(p) {
      var position = {lat: p.address.lat, lng: p.address.lng}
      this.infoWindowPos = position;
      this.infoName = p.name;
      this.infoVagance = p.vagances_disp;
      this.id = p.id;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == p.id) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = p.id;
      }
    },
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