<template>
  <div class="messageError">
       <v-alert
      shaped
      dark
      color="#F22248"
      v-show="Vshow"
      class="msgErro"
    >
      {{msg}}
    </v-alert>
  </div>
</template>

<script>
    export default {
        name:"ErrorMsg",
        props:{
            msg:String,
            Vshow:Boolean
        }
    }
</script>

<style scoped>
>>>.v-sheet.v-alert.v-sheet--shaped {    
    margin-top: 20px;
}


</style>