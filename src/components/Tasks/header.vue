<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">AVA-Music</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" to="/tasks">Task</router-link>
          
        </li>
       
        <li class="nav-item">
          <router-link class="nav-link active" to="/products">Products</router-link>
          
        </li>
       
      </ul>
     
         <ul class="nav-item">
          <router-link class="nav-link active" to="/cart">
          <span class="badge rounded-pill bg-danger ">{{cartCounter}}</span>
          <i class="bi bi-basket-fill" style="font-size: 30px;"></i>
        </router-link>
         </ul>


    </div>
  </div>
</nav>
  
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'HelloWorld',
  setup(){
    const store = useStore();
  const cartCounter = computed( () => store.getters['cart/count']);
 
  return{cartCounter}
}
 

}
</script>


<style scoped>

</style>
