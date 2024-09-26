<template>
<div class="ml-container ml-container--fluid">
    <template v-if="user">
      <Sidebar/>
      <div id="content" class="ml-container ml-container--fluid">
        <Navbar/>
        <main class="ml-flexy ml-flexy--space-around">
          <MOverlayLoader v-if="loading"/>
          <div v-else class="ml-flexy__col--fill">
            <router-view/>
          </div>
        </main>
      </div>
    </template>
  </div>
  <div id="bg"></div>
</template>
<script lang="ts" setup>
import { ref, type Ref, onMounted, provide, computed } from 'vue'
// Components
import {MOverlayLoader} from '@mozaic-ds/vue-3'
import Sidebar from '@/components/navigation/Sidebar.vue'
import Navbar from '@/components/navigation/Navbar.vue'
// models
import { User } from '@/domain/user';
// services
import { checkAuth } from '@/services/auth';

const user: Ref<User|undefined> = ref<User>()
const loading: Ref<boolean> = ref<boolean>(true)

onMounted(async()=> {
  try {
    user.value = await checkAuth()
  } catch (error) {
    // remove this line if not using user
    user.value = new User({ldap: 'example', name: 'Mr example'})
    console.error(error)
  }
  loading.value = false
})

provide('user', computed(()=> user.value))
</script>
<style lang="scss" scoped>


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

</style>
