<template>
  <div class="layout-padding row justify-center">	
  	<h3>Cadastrar</h3>
		<div class="row justify-center">
			<div class="col-10">
  	  	<q-input v-model="name" placeholder="Nome"/>
			</div>
			<div class="col-10">
  	  	<q-input v-model="phone"placeholder="Telefone"/>
			</div>
			<div class="col-10">
  	  	<q-input v-model="email" type="email" placeholder="Email"/>
			</div>
			<div class="col-10">
      	<q-input v-model="password" type="password" placeholder="Senha"/>
			</div>
    </div>
			
		<div class="row justify-center">

			<div class="col-8" style="margin-top:20px;"> 
    		<q-btn class="primary small full-width" @click="registerUser">Cadastrar</q-btn>
			</div>
			<div class="col-8" style="margin-top:20px;">
    		<q-btn class="primary small full-width">
    			<q-side-link to="/auth/entrar">Efetuar Login</q-side-link>
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
  QInput,
	QSideLink,
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
    	password: '',
    	name: '',
    	phone: ''
    }
  },
  methods: {
    ...mapGetters([
      'loading'
    ]),

    ...mapActions([
      'startLoading',
      'register'
    ]),

    registerUser: function(){

      this.startLoading()
      this.register({ name: this.name, phone: this.phone, email: this.email, password: this.password})
    }
  }
}
</script>

<style>
</style>
