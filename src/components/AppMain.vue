<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout
    ref="layout"
    >
    <q-toolbar slot="header">
      <q-btn class="hide-on-drawer-visible" @click="$refs.layout.toggleLeft()">
        <q-icon name="menu"/>
      </q-btn>
     
      <q-toolbar-title>
        Estaciona Facil
      </q-toolbar-title>
    </q-toolbar>

    
   

    <!-- Left Side Panel
    <div slot="left">
      <q-list no-border link inset-delimiter>
        <q-list-header>Essential Links</q-list-header>
        <q-item>
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item>
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item>
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </div>
    -->

    <!-- Right Side Panel
    <div slot="right">
      ...
    </div>
    -->

    <router-view />

    <div slot="left">
      <!--
        Use <q-side-link> component
        instead of <q-item> for
        internal vue-router navigation
      -->

      <q-list no-border link inset-delimiter>
        <q-list-header>Estaciona Facil</q-list-header>
        <q-side-link item to="/">
          <q-item-side icon="school" />
          <q-item-main label="Inicio" />
        </q-side-link>
        <q-side-link item to="/vagances">
          <q-item-side icon="local_parking" />
          <q-item-main label="Vagas" />
        </q-side-link>
      
        <q-item @click="logout">
          <q-item-side icon="exit_to_app" />
          <q-item-main label="Sair" sublabel="efetuar logout" />
        </q-item>
      </q-list>
    </div>
    <!-- Footer
    <q-toolbar slot="footer">
      ...
    </q-toolbar>
    -->
  </q-layout>
</template>

<script>
import {
  QList,
  QListHeader,
  QContextMenu,
  QItem,
  QItemSide,
  QSideLink,
  QItemMain,
  QLayout,
  QBtn,
  QIcon,
  QToolbar,
  QToolbarTitle
} from 'quasar'

import App from '../cable'
import { mapActions } from 'vuex'
export default {
  components: {
    QList,
    QListHeader,
    QContextMenu,
    QList,
    QItem,
    QItemSide,
    QItemMain,
    QLayout,
    QSideLink,
    QBtn,
    QIcon,
    QToolbar,
    QToolbarTitle
  },
  data () {
    return {}
  },
  created(){
    
  },
  methods: {
    ...mapActions([
      'logout'
    ]),

    sendHome(){
      this.$refs.layout.toggleLeft()
      this.$router.push('/')
      // console.log(this.$router)
      // this.$router.redirect('/');
    },

    sendVagance(){
      this.$refs.layout.toggleLeft()
      this.$router.push('/vagances')
      // console.log(this.$router)
      // this.$router.redirect('/');
    }
  }
}
</script>

<style>
</style>
