<template>
 <div>
  <span  @click="deleteTask" class="bi bi-trash-fill ms-3"></span>
   
 
 </div>
</template>

<script>
// import { ref } from 'vue';
import { useStore } from "vuex";
export default {
props:['id'],
  setup(props) {
    const store = useStore();
    
   async function deleteTask() {
        
       await store.dispatch("task/deleteTask" , props.id );
        

        

        
}
    
    

    return {
      deleteTask
    };
  },
}
</script>

<style>

</style>