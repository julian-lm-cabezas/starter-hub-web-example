<template>
  <div class="ml-container ml-container--fluid">
    <template v-if="user">
      <Sidebar/>
      <div id="content" class="ml-container ml-container--fluid">
        <Navbar/>
        <main class="ml-flexy ml-flexy--space-around">
          <div class="ml-flexy__col--fill" v-if="!loading">
            <!--<router-view v-if="facilities.length"/>-->
            <router-view/>
          </div>
          <div class="ml-flexy__col" v-else>
            <Loader/>
          </div>
        </main>
      </div>
    </template>
  </div>
  <div id="bg"></div>

</template>
<script lang="ts" setup>
import { ref, type Ref, onBeforeMount, provide, computed } from 'vue'
import Sidebar from '@/components/navigation/Sidebar.vue'
import Navbar from '@/components/navigation/Navbar.vue'
import Loader from '@/components/Loader.vue'

import type { User } from './domain/user';
import { checkAuth } from './services/auth';

const user: Ref<User|undefined> = ref<User>()
const loading: Ref<boolean> = ref<boolean>(true)

onBeforeMount(async()=> {
  user.value = await checkAuth()
  loading.value = false
})

provide('user', computed(()=> user.value))
</script>
<style lang="scss">

/** BODY **/
body{
  width: 100%;
  min-width:300px;
  height: 100vh;
  overflow-y: hidden;
  overflow-x: auto;
  display: block;
  position: fixed;
  top:0;
  left: 0;
  bottom:0;
  right: 0;
  margin:0;
  padding: 0;
  font-family: 'LM-Regular';
}


#content {
  width: calc(100% - 64px);
  margin-left: 64px;
}
#main{
  height: calc(100vh - 4rem);
  max-height: calc(100vh - 4rem);
  overflow-y: auto;
  width:100%;
  @include scroll;
  @media(max-width:680px) {
      max-height: calc(100vh - 7rem);
  }

  &-sidebar{
    height: inherit;
  }
  &-webview{
    height: inherit; 
    padding-left:200px
    
  }
  
}

.full{
    padding-left:0!important;
  }
</style>
