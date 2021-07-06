<template>
    <div class="row">
        <div class="col-12">
            card
        </div>
    </div>
</template>

<script>

import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
    setup(){
        const store = useStore()
        onMounted(() => {
            store.dispatch('getPaises')
        })
    }
}
</script>

<style>

</style>