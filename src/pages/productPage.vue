<template>

  

  <div  class="container mt-5  ">
  <div class="row mb-5 ">
    <div v-for="product in products" :key="product.id" class="col-md-3">
    <div class="card">
      <img class="card-img-top mt-4" :src="product.img" alt="">
      <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5><hr>
           <span class="card-text d-flex align-self-end" >{{ product.description }}</span>
      </div>
      <div class="card-footer d-flex justify-content-between ">
         <button @click="AddToCart(product)" class="btn btn-outline-success btn-sm">Add To Cart</button>
         <span class="card-text">{{ product.price }}</span>
      </div>
    </div>
    
    </div>
  </div>
  
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'


export default {

setup(){
   
    const store= useStore();
    const products = computed(() => store.getters['product/allproducts'])
     function AddToCart(product){
           store.dispatch('cart/AddToCart' , product)
     }

return{products,AddToCart}
}

}
</script>

<style>

</style>