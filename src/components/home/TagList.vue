<template>
  <div class="sidebar-module">
    <div class="sidebar-tit"><strong>Tags</strong></div>
    <div class="sidebar-item" v-for="tag in tags">
      <router-link :to="tag.url">{{tag.name}}</router-link>
    </div>
  </div>
</template>

<script>
	export default {
		name: "tag-list",
    data() {
		  return {
		    tags: [
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
          {name: 'test', url: '#'},
        ]
      }
    }
	}
</script>

<style scoped>
  .sidebar-module {
    background-color: white;
    border: 1px solid #eee;
    padding: 1.5em 2em;
    margin-bottom: 1em;
    box-shadow: 0 5px 10px 0 transparent;
  }

  .sidebar-tit {
    margin-bottom: 10px;
  }

  .sidebar-item {
    margin: 3px 0;
  }
  .sidebar-item > a {
    text-decoration: none;
    color: #333;
  }
</style>
