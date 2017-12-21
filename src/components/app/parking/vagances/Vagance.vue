<template>
	<div>
		<q-pull-to-refresh :handler="refresher" :pull-message="'Recarregar'"  :refresh-message="'Recarregando'">
	  <!-- Content, whatever you like -->
		<div class="row" style="display: flex; justify-content: center;">
			<div v-for="vagance in reserves" style="width:45%;margin-right: 5px;">
				<div v-if="vagance.status == 'pending'" class="row"> 
					<q-card inline style="width: 100%;background-color: #EFDC05;">
						<q-card-title>
						</q-card-title>
						<q-card-main>
							<p class="" style="color: #fff;">Solicitação de Reserva</p>
							<p class="" style="color: #fff;">{{vagance.parking.name}}</p>
						</q-card-main>
						<q-card-actions>
							<router-link :to="{ name: 'detail', params: { idParking: vagance.parking.id }}"><q-btn flat color="primary">Detalhes</q-btn></router-link>
						</q-card-actions>
						
					</q-card>
				</div>
				<div v-if="vagance.status == 'accept'">
					<q-card inline style="width: 100%;background-color: #3ac569;">
						<q-card-title>
						</q-card-title>
						<q-card-main>
							<p class="" style="color: #fff;">Solicitação Aceita</p>
							<p class="" style="color: #fff;">{{vagance.parking.name}}</p>
						</q-card-main>
						<q-card-actions>
							<router-link :to="{ name: 'detail', params: { idParking: vagance.parking.id }}"><q-btn flat color="primary">Detalhes</q-btn></router-link>
						</q-card-actions>
					</q-card>
				</div>
				<div v-if="vagance.status == 'deny' || vagance.status == 'finish'">
					<q-card inline style="width: 100%;background-color: #c03546;">
						<q-card-title>
						</q-card-title>
						<q-card-main>
							<p class="" style="color: #fff;">Solicitação Finalizada</p>
							<p class="" style="color: #fff;">{{vagance.parking.name}}</p>
						</q-card-main>
						<q-card-actions>
							<router-link :to="{ name: 'detail', params: { idParking: vagance.parking.id }}"><q-btn flat color="primary">Detalhes</q-btn></router-link>
						</q-card-actions>
						
					</q-card>
				</div>		

			</div>
		</div>
	  </q-pull-to-refresh>
	</div>
</template>

<script>
	import {
		QInput,
		QSideLink,
		QModal,
		QPullToRefresh,
		QLayout,
		QBtn,
	  QToolbar,
	  QToolbarTitle,
	  QCard,
		QCardTitle,
		QCardMain,
		QCardSeparator,
		QCardActions
	} from 'quasar'
	import { mapActions, mapGetters } from 'vuex'
export default {
	computed: {
		...mapGetters([
			'reserves',
		])
	},

	components: {
		QInput,
		QSideLink,
		QModal,
		QPullToRefresh,
		QLayout,
		QBtn,
	  QToolbar,
	  QToolbarTitle,
		QCard,
		QCardTitle,
		QCardMain,
		QCardSeparator,
		QCardActions
	},

	data() {
		return {
			number_vagance: 0
		}
	},

	created(){
		this.getReserveVagances()
	},

	methods: {
		...mapActions([
			'getReserveVagances',
			'saveReserveVagances'
		]),
		refresher (done) {
			done()
			this.getReserveVagances()
			
    }
	}
}
</script>

<style>
	.row {
		display: flex;
	},

	.actions {
		display: flex;
    margin-top: 20px;
    justify-content: center;
	}


</style>