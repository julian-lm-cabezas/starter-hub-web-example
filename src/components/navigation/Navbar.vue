<template>
   <div id="navbar" >
    <div class="ml-flexy">
        <div class="ml-flexy__col--full mu-pl-200">
            <m-heading weight="semi-bold" size="s" lineHeightXS>{{ $t(`sidebar.${getPageName()}`)}}</m-heading>
        </div>
    </div>
    </div> 
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router'
// Components
import { MHeading } from '@mozaic-ds/vue-3'

const route = useRoute()

// get page description
const getPageName = (): string => route.name?.toString() ?? ''

</script>
<style lang="scss" scoped>
#navbar{
    background: white;
    border-bottom: 1px solid $color-grey-300;
}
</style>
