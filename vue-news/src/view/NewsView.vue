<template>
  <div>
    <p v-for="(item, i ) in news" :key="i" >
      <a :href="item.url">
        {{item.title}}
      </a>
      <small>
        {{item.time_ago}} by 
        <router-link :to="`/user/${item.user}`">{{item.user}}</router-link>
       
        </small>
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
      news : state => state.news,
    })
  },
  created() {
    this.$store.dispatch('FETCH_NEWS');
  },
};
</script>

<style>
</style>