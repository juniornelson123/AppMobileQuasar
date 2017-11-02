<template>
  <div class="layout-padding row justify-center">	
  	<h3>Cadastrar</h3>
		<div class="row justify-center">
			<div class="col-10">
  	  	<q-input v-model="name" placeholder="Nome"/>
			</div>
			<div class="col-10">
  	  	<q-input v-model="phone" type="phone" placeholder="Telefone"/>
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
     
  </div>

</template>

<script>
import {
	QSideLink,
	QInput,
	QBtn
} from 'quasar'

import { mapActions } from 'vuex'

export default {
 	components: {
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
    ...mapActions([
      'register'
    ]),

    registerUser: function(){
      this.register({ name: this.name, phone: this.phone, email: this.email, password: this.password})
    }
  }
}
</script>

<style>
</style>
