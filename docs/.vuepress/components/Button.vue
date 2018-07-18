<template>
    <a :href="href" target="_blank" class="btn">{{ innertext }}</a>
</template>

<script>
export default {
  props: ['href', 'text'],
  computed: {
      innertext: function() {
          return this.text || this.href;
      }
  }
}
</script>

<style scoped>
.btn {
    line-height: 1;
    border-radius: 4px;
    font-size: 1em;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    padding: 10px 15px;
    margin: 0;
    cursor: pointer;
    transition: 0.1s linear;
    color: #1e6bb8;
    border: 1px solid #eee;
    background: #fff;
}
.blue{
    color: #fff;
    border: 1px solid #2A84C4;
    background: #3c96d5;
    background: linear-gradient(to bottom, #3c96d5 0%, #2A84C4 100%);
    box-shadow: #21689a 0 3px 0, rgba(0,0,0,0.2) 0 3px 3px;
    text-shadow: 0 1px 1px rgba(0,0,0,0.2);
}
</style>
