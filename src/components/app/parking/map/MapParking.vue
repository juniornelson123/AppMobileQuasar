<template>
  <div>
  	<map-e :parkings="parkings" name="example"></map-e>
  </div>
</template>

<script>
import MapE from '../../../common/map/MapE.vue'

export default {
	components: {
		MapE
	},
	props: ['parkings'],
  data () {
    return {}
  }
}
</script>

