<template>
  <div>
    <h1 class="bar">Testando</h1>
    <button @click="isactive()">Clique aqui</button>
  </div>
</template>

<script>
export default {
  props:['test'],
  data()  {
    return {
      name: '',
      idade: '',
      email:''
    }
  },
  methods: {
    isactive() {
      return true
    }
  }
}
</script>

<style>
.bar {
  color: white
}
</style>