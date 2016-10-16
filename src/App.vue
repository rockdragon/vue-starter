<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <fieldset>
        <legend>路由：</legend>
        <ol>
            <li><a href="/first">/first</first></li>
            <li><a href="/second">/second</first></li>
        </ol>
    </fieldset>
    <fieldset>
        <legend>内容：</legend>
        <router-view class="view"></router-view>
    </fieldset>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue路由演示'
    }
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
