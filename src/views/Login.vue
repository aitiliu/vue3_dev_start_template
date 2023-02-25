<template>
    <div>
      <button @click="login">Login</button>
      <button @click="getProduct">Product List</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  //import { defineComponent } from 'vue';
  //import { mapMutations } from 'vuex';
  //import axios from 'axios';
  //import Storage from '@/api/storage';
  import { request } from "@/api/request";
  import { useRouter } from "vue-router";
  
  const router = useRouter();
  
  const login = () =>
    request({
    url: '/auth/login',
    method: 'post',
    data: {
      email: 'eddie@test.com',
      name: 'eddie',
      password: '123qwe'
    }
    //console.log(res.data)
  }).then(res => {
    console.log(res.data.access_token)
  }).catch(err => {
    console.log(err)
  });
  
  const getProduct = () =>
    request({
    url: '/products',
    method: 'get'
    //console.log(res.data)
  }).then(res => {
    console.log(res.data)
  }).catch(err => {
    console.log(err)
  });
  
  </script>
  
  