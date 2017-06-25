import Vue from 'vue';
import Axios from 'axios';

const component = new Vue({
  el: 'h3',
  data: {
    message:{}
  }
});

Axios.get('https://api.github.com/users/github')
    .then(function (response) {
        component.message = response
    })
.catch(function (error) {
    console.log(error)
});


