<template>
    <div>
        home
        {{homeInfo}}
    </div>
</template>

<script>
export default {
  serverRequest(store) {
    return store.dispatch("getHomeInfo");
  },
  mounted() {

  },
  computed:{
      homeInfo(){
          return this.$store.state.homeInfo
      }
  }
};
</script>

<style scoped>
</style>

