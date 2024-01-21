<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click="resetMain" >Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <!-- <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Disabled</a>
          </li> -->
        </ul>
        <div class="d-flex" role="search">
          <select class="form-select" v-model="searchType" @change="$store.commit('setSearchType', $event.target.value)" aria-label="Default select example">
            <option value="T">제목</option>
            <option value="W">작성자</option>
            <option value="C">내용</option>
          </select>
          <input class="form-control me-2" ref="keyword" v-model="keyword" @keydown="handleEnterKey" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" @click="getBoardSearchList" type="button">Search</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      searchType :this.$store.state.searchType || 'T', 
      keyword : this.$store.state.keyword || '', 
    }
  },
  watch:{
    // searchType(data){
    //   this.$store.commit('setSearchType', data);
    // },
    // keyword(data){
    //   this.$store.commit('setKeyword', data);
    // }
  },
  methods:{
    resetMain(){
      this.$store.commit('setKeyword', this.keyword = '');
      this.$store.commit('setSearchType', this.searchType = 'T');
      this.$emit('getBoardList',1)
    },
    handleEnterKey(event){
      if (event.key === 'Enter') {
        this.getBoardSearchList();
      }
    },
    getBoardSearchList(){
      // if(this.keyword.trim().length=== 0){  //유효성 시작
      //   alert('검색어를 입력해 주세요');
      //   this.$refs.keyword.focus();
      //   return false;                       
      // } //유효성 끝

      this.$store.commit('setKeyword', this.keyword.trim());
      this.$store.commit('setSearchType', this.searchType);
      this.$emit('getBoardList', 1) //검색시 페이지 1초기화
    }
  }
}
</script>

<style>

</style>