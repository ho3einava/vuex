
import Swal from 'sweetalert2'
const task = {
    namespaced :true,
    state(){
        return {
            tasks : []
        }
    },
    getters:{
         alltasks(state){
           return state.tasks
         }
    },
    mutations:{
      newTask(state , task){
        return state.tasks.unshift(task)
      },

      setTasks(state,tasks){
            state.tasks = tasks
          },
          updateTask(state,updateTask){
           const index =  state.tasks.findIndex(task => task.id == updateTask.id)
           if (index != -1){
            state.tasks.splice(index,1,updateTask)
           }
          },
          removeTask(state, id){
                state.tasks = state.tasks.filter(task => task.id !=id)
          }
           
    },
    actions: {
      async fetchtasks({ commit }) {
        const axios = require('axios');
          try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
              commit('setTasks', response.data)
              

          } catch (error) {
              Swal.fire({
                  title: "Error!",
                  text: "There is a problem, please try again",
                  icon: "error",
                  confirmButtonText: "Ok",
           
                });
          
              }
      },

      async filterTasks({ commit } , limit) {
        const axios = require('axios');
          try {
              const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
              commit('setTasks', response.data)

          } catch (error) {
              Swal.fire({
                  title: "Error!",
                  text: "There is a problem, please try again",
                  icon: "error",
                  confirmButtonText: "Ok",
              });
          }
      },
     
      async storeTask({ commit } , title) {
        const axios = require('axios');
          try {
              const response = await axios.post('https://jsonplaceholder.typicode.com/todos',{
                title : title,
                complete: false
              })
            
      
            
              commit('newTask', response.data)
              Swal.fire({
                title : "task added",
                icon : "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast : true,
                position:'top'
              });

          } catch (error) {
              Swal.fire({
                  title: "Error!",
                  text: "There is a problem, please try again",
                  icon: "error",
                  confirmButtonText: "Ok",
              });
          }
      },
      async updateTask({ commit } , task) {
        const axios = require('axios');
          try {
              const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${task.id}`,{
                id : task.id,
              title : task.title,
                completed: !task.completed
              })
            
      
            
              commit('updateTask', response.data)
              
              Swal.fire({
                title : "task Updated",
                icon : "success",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast : true,
                position:'top'
              });

          } catch (error) {
              Swal.fire({
                  title: "Error!",
                  text: "There is a problem, please try again",
                  icon: "error",
                  confirmButtonText: "Ok",
              });
          }
      },
      async deleteTask({ commit } , id) {
        const axios = require('axios');
          try {
               await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
              commit('removeTask', id)
              console.log(id)
              Swal.fire({
                title : "task Deleted",
                icon : "error",
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000,
                toast : true,
                position:'top'
              });

          } catch (error) {
              Swal.fire({
                  title: "Error!",
                  text: "There is a problem, please try again",
                  icon: "error",
                  confirmButtonText: "Ok",
              });
          }
      }



  }
}

export default task;