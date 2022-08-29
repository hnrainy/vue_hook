<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app{
  background: rgba(247, 247, 250, 1);
}
*{
  margin: 0;
  padding: 0;

}
body::-webkit-scrollbar {
			display: none;
		}
</style>
