<template>
  <div>
    <p v-for="(job, i) in jobs" :key="i">
      <a :href="job.url">{{ job.title}}</a>
      <small>{{job.time_ago}}, {{job.domain}}</small>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed:{
    ...mapState({
      jobs : state => state.jobs,
    })
  },
  created() {
    this.$store.dispatch('FETCH_JOBS');
  },
};
</script>

<style>
</style>