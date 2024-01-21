<template>
  <div>
    <NavBar @getBoardList="getBoardList($event)"></NavBar>
    <table class="table mt-4 table-hover" style="cursor: pointer;">
      <thead>
        <tr>
          <th scope="col">#글 번호</th>
          <th scope="col">제목</th>
          <th scope="col">작성자</th>
          <th scope="col">작성일</th>
          <th scope="col">수정일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="board in boardList" :key="board.id" @click="goToBoardDetail(board.id)">
          <th scope="row">{{board.id}}</th>
          <td>{{board.title}}</td>
          <td>{{board.writer}}</td>
          <td>{{board.regdate}}</td>
          <td>{{board.updatedate}}</td>
        </tr>
      </tbody>
    </table>

    <nav aria-label="Page navigation example" class="d-flex justify-content-center">
      <ul class="pagination">
        <li class="page-item" @click="getBoardList(pageMap.startPage -1)" v-if="pageMap.prev"><a class="page-link" href="#">이전</a></li>
        <li class="page-item" v-for="page in pageMap.pageNumberArr" :key="page">
          <a class="page-link" @click="getBoardList(page)" :class="page == $route.params.page ? 'active': ''" href="#">{{page}}</a>
        </li>
        <li class="page-item" @click="getBoardList(pageMap.endPage +1)" v-if="pageMap.next"><a class="page-link" href="#">다음</a></li>
      </ul>
    </nav>

    <div class="d-flex justify-content-center mb-5">
      <!-- <button type="button" class="btn btn-primary" @click="console.log(boardList)">글작성</button> -->
      <button type="button" class="btn btn-primary" @click="$router.push('/board')">글작성</button>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import axios from 'axios';
export default {
  data(){
    return {
      pageMap : {},
      boardList : [],
    }
  },
  created (){
    let currentPage = this.$route.params.page || 1;
    this.getBoardList(currentPage)
  },
  methods:{
    getBoardList(page) {
      axios.get(`/api/board/page/${page}`)
        .then(result=>{
          this.pageMap = result.data.pageMap;
          this.boardList = result.data.boardList
          this.$router.push(`/board/page/${page}`)
          this.$store.commit('setPage', page);
          this.$store.commit('setBoardList', result.data.boardList);
          this.$store.commit('setPageMap', result.data.pageMap);
        });
    },
    goToBoardDetail(id) {
      this.$router.push(`/board/${id}`);
    },
  },
  components: {
    NavBar
  }
}
</script>

<style>

</style>