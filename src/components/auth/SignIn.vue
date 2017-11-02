<template>
  <div class="layout-padding docs-input row justify-center">	
  	<h4>Estaciona Fácil</h4>
		<div class="row justify-center">
			<div class="col-10">
      	<q-input v-model="email" placeholder="Email"/>
			</div>
			<div class="col-10">
      	<q-input v-model="password" type="password" placeholder="Senha"/>
			</div>
    </div>
		
		<div class="row justify-center">

			<div class="col-8" style="margin-top:20px;"> 
	    	<q-btn class="primary small full-width" @click="signIn">Entrar</q-btn>
			</div>
						
			<div class="row button-register">
				<q-btn class="primary small full-width">
	    		<q-side-link to="/auth/cadastrar">Cadastre-se</q-side-link>
	    	</q-btn>
			</div>
		</div>
    
    <q-inner-loading :visible="loading()">
      <q-spinner-mat size="50px" color="primary"></q-spinner-mat>
    </q-inner-loading>

  </div>

</template>

<script>
import { 
	QInnerLoading,
	QSpinnerMat,
	QSideLink,
	QInput,
	QBtn
} from 'quasar'

import { mapActions, mapGetters } from 'vuex'
export default {
	components: {
		QInnerLoading,
		QSpinnerMat,
		QInput,
		QSideLink,
		QBtn
	},
  data () {
    return {
    	email: '',
    	password: ''
    }
  },
  methods: {

    ...mapGetters([
      'loading'
    ]),

    ...mapActions([
      'login',
      'startLoading'
    ]),
    
    
    signIn: function(){
    	this.startLoading()
      this.login({email: this.email, password: this.password})
    }
  }
}
</script>

<style lang="stylus">
	.button-register{
		margin-top 30px
	}
</style>
