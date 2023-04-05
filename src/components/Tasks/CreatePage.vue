<template>
<div class="col-md-12 mb-4">
<form @submit.prevent="storeTask" class="row">

  <div class="col-md-6">
    
        <input type="text" v-model="title" class="form-control" placeholder="Create Task...">
    <div class="form-text text-danger"> {{ titleError  }} </div>
  </div>
  <div class="col-md-auto">
        <button  class="btn btn-dark">Create
            <span v-if="loading" class="spinner-border spinner-border-sm"></span>
        </button>
  </div>
</form>
</div>
</template>

<script>

import { ref } from 'vue';
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const title = ref("")
    const titleError = ref("")
    const loading = ref(false)
   async function storeTask() {
        if (title.value == ""){
            titleError.value= "title is required";
        }
        else {
            titleError.value = ""
            loading.value = true;
  await store.dispatch("task/storeTask" , title.value);
  loading.value = false

        }

        }
    
    
    

    return {
      storeTask,
      title,
      titleError,
      loading
    };
  },
};

</script>

<style>

</style>