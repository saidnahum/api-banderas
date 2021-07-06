<template>
  <input 
    type="text"
    class="form-control my-3"
    placeholder="Ingrese Pais"
    v-model="texto"
    @keyup="procesarInput"
  >
</template>

<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
  setup(){
    const texto = ref('')
    const store = useStore()

    const procesarInput = () => {
      // console.log(texto.value)
      store.dispatch('filtroNombre', texto.value)
    }

    return {texto, procesarInput}
  }
}
</script>