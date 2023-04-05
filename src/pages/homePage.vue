<template>
  <div class="container">
    <div class="row">
        <div class="col-md-12 text-center mt-5">
            <h2>VueX Home Page</h2>
          
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptate esse labore nisi doloribus in voluptatem voluptas accusantium iusto? Quisquam ad illum laboriosam minima quia.</p>
        <div class="buttons">

            <router-link id="Task" class="nav-link active" to="/tasks">Task</router-link>
        <router-link id="product" class="nav-link active" to="/products">Products</router-link>
        </div>
        
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.buttons{
    display: flex;
    justify-content: space-evenly;
    margin-left:40px ;
    margin-top: 50px;
}
#Task{
    background-color: #000;
    border-radius: 5px;
    color: white;
    width: 80px;
    
    padding: 5px;
}
#product{
    background-color: chocolate;
    border-radius: 5px;
    color: white;
    width: 80px;
    
    padding: 5px;
}
</style>