<template>
  <div>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import { mapMutations } from 'vuex';
import axios from 'axios';
import Storage from '@/api/storage';

export default defineComponent({
  methods: {
    
    async login() {
      const response = await axios.post('http://localhost/api/auth/login', { 
          email: 'eddie@test.com',
          password: '123qwe',
          name: 'eddie' });
    //  this.setToken(response.data.token); // 将 token 存储到 Vuex store 和 localStorage 中
       // console.log('login');
      //  console.log(response.data.access_token);
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('user_id', response.data.user.user_id);
        localStorage.setItem('user_name', response.data.user.name);
    },
    logout() {
     // this.clearToken(); // 从 Vuex store 和 localStorage 中删除 token
     console.log('logout');
    },
  },
});

const token = localStorage.getItem('token');
const user_id = localStorage.getItem('user_id');
const user_name = localStorage.getItem('user_name');

console.log('token = '+ token);
console.log('user_id = '+ user_id);
console.log('user_name = '+ user_name);
</script>

