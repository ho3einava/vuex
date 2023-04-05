<template>
<div v-if="loading" class="container mt-5" >
  <div class="row justify-content-center" >
    <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  </div>
</div>

  <div v-else class="container mt-5">
    <CreateTask />
    <hr>
          <FilterTask />
    <div class="row g-3">
      
      <div v-for="task in tasks" :key="task.id" class="col-md-4">
        <div class="card " :class="{'bg-light':task.completed}  " >
          <div class="card-body d-flex justify-content-between align-items-auto">
               <div>
                 <del v-if="task.completed">{{task.title}}</del> 
                <div v-else>{{task.title}}</div>
               </div>
               <div class="d-flex align-items-center">
                  <UpdateTask :task="task" />
               <deleteTask :id="task.id" />
               </div>
               
                
          </div>
        </div>
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex'
import FilterTask from '../components/Tasks/FilterPage.vue'
import CreateTask from '../components/Tasks/CreatePage.vue'
import UpdateTask from '../components/Tasks/updateTask.vue'
import deleteTask from '../components/Tasks/DeleteTask.vue'

export default {
 components : {
  FilterTask,
  CreateTask,
  UpdateTask,
  deleteTask
 },
setup(){
    const loading= ref(false)
    const store= useStore();
    const tasks = computed(() => store.getters['task/alltasks'])
loading.value=false
function fetchTasks(){
         loading.value=true
        store.dispatch('task/fetchtasks');
        loading.value=false
    }

fetchTasks()
return{tasks,loading}
}

}
</script>

<style>

</style>