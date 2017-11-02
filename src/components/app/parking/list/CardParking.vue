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
		</q-card-main>
		<q-card-separator />
		<q-card-actions>
		  <q-btn flat round small><q-icon name="event" /></q-btn>
		  <div v-for="p in prices">	
			  <q-btn flat>{{p.value}}</q-btn>
		  </div>
		  <q-btn flat color="primary">Detalhes</q-btn>
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

export default {
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
	props: ['title','description', 'prices', 'link', 'image'],
  data () {
    return {}
  }
}
</script>

<style>
</style>
