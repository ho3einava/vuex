
import { createStore } from "vuex";
import task from '../store/modules/task.js'
import product from '../store/modules/product.js'
import cart from '../store/modules/cart.js'

// import axios from "axios";
const store= createStore({
modules : {
  task,
  product,
  cart
}
});

export default store;