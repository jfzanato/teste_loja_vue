Vue.component('modal', {
  template: `
  <div>
    <div class="modal is-active">
       <div class="modal-background"></div>
       <div class="modal-content">
         <div class="box">
           <p>{{info}}</p>
         </div>
       </div>
       <button class="modal-close" @click="$emit('close')"></button> 
     </div>
   </div>
  `,

  data() {
    return {
      info: ''
    }
  }
});
new Vue({
  el: '#app',
  data() {
    return {
      info: '',
      showModal: false
    }
  },
  mounted() {
    axios
      .get('https://api.sheety.co/63b0f868-ffd5-49a5-834d-7780462e470c')
      .then(response => (this.info = response.data))
  },

})