<template>
    <div v-if="message" class="error-message">{{ message }}</div>
  </template>
  
  <script>
  export default {
    props: {
      message: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style>
  .error-message {
    color: red;
  }
  </style>
  