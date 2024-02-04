<template>
  <div>
    <p v-for="(item, i ) in ask" :key="i" >
      <a :href="item.url">
        {{item.title}}
      </a>
      <small>{{item.time_ago}} by {{item.user}}</small>
    </p>
  </div>
  <div v-for="(item, i ) in news" :key="i">
    <a :href="item.url">
      {{item.title}}
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed:{
    ...mapState({
      ask : state => state.ask,
    })
  },
  created() {
    this.$store.dispatch('FETCH_ASK');
  },
};
</script>

<style>
</style>