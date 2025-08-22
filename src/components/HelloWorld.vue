<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Welcome to Your Vue.js App</h3>
    <ul>
      <li><a href="https://vuejs.org/">Documentation</a></li>
    </ul>
  </div>
  <router-view>
    
  </router-view>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

onMounted(()=>{
  console.log('HelloWorld component mounted');
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hello {
  width: 100%;
}
</style>
