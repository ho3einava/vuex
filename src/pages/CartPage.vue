<template>
  <div  class="container mt-5">
  <div class="row mb-3">
    <div v-if="cartItems.length == 0" class="col-md-12 text-center">
      <i class="bi bi-basket-fill" style="font-size: 40px;"></i>
      <h4>Product is Empty</h4>
      <router-link  class="btn btn-outline-danger btn-sm" to="/products">Products</router-link>
    </div>
    <table v-else class="table table-striped">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Product</th>
      <th scope="col">title</th>
      <th scope="col">Price</th>
      <th scope="col">Qountity</th>
      <th scope="col">subtotal</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in cartItems" :key="item.id">
      <th scope="row">{{ item.id }}</th>
      <td class="align-middle"><img style="width: 60px; height: 60px;" :src= "item.img" ></td>
      <td class="align-middle">
        <h6>{{ item.name }}</h6>
        <span> {{ item.description }} </span>
        </td>
      <td class="align-middle">{{item.price}}$</td>
      <td class="align-middle">
        <button @click="increment(item.id)" class="btn btn-dark me-2 btn-sm">+</button>
        <span>{{ item.quantity }}</span>
        <button @click="decrement(item.id)" class="btn btn-dark  ms-2 btn-sm">-</button>
      </td>
      <td class="align-middle">{{ item.price * item.quantity }} $</td>
      <td class="align-middle"><button @click="removeItem(item.id)" class="btn btn-danger btn-sm">Delete</button></td>

    </tr>
   
     

   
    
  </tbody>
  <tfoot>
    
    
      
<tr>
  
  <td></td>
  <td>
    <button @click="clearcart"  class="btn btn-dark">Clear Cart</button>
  </td>
  <td colspan="2" class="hidden-xs"></td>
  <td  class="hidden-xs text-center" style="width:15%;"><strong>Total: {{ cartTotal }}</strong></td>
  
  
  <td>
    <button class="btn btn-success">checkout</button>
  </td>
  <td>
    
  </td>
</tr>
      
    
  </tfoot>
  
     </table> 
    
    
  </div>
 
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex'


export default {

setup(){
   
    const store= useStore();
    const cartItems = computed(() => store.getters['cart/allItems'])
    const cartTotal = computed(() => store.getters['cart/allTotals'])
    
function increment(id){
store.dispatch('cart/increment', id)
}
function decrement(id){
store.dispatch('cart/decrement', id)
}
function removeItem(id){
store.dispatch("cart/remove", id)
}
function clearcart(){
store.dispatch("cart/clear")
}
return{
  cartItems,
  cartTotal,
  increment,
  decrement,
  removeItem,
  clearcart
}

}
}

</script>

<style>

</style>