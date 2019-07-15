<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
html,body,#app{
  width: 100%;
  height: 100%;
  font-family: "yrdz";
}
*{margin:0;padding:0}

li{list-style:none}

img{vertical-align:top;border:none}

@font-face {
  font-family: "yrdz";
  src: url("../static/font/yrdz.woff") format("woff"),
    url("../static/font/yrdz.ttf") format("truetype"),
    url("../static/font/yrdz.eot") format("embedded-opentype"),
    url("../static/font/yrdz.svg") format("svg");
}
</style>
