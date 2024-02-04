<template>
  <div>
    <p v-for="(item, i ) in askInfo" :key="i">
      <!-- <a :href="item.url">{{item.title}}</a> -->
      <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
      <small>
        {{item.time_ago}} by {{item.user}}
      </small>
    </p>
  </div>
</template>

<script>
export default {
  computed:{
      askInfo(){
        return this.$store.state.ask;
      }
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style>
</style>