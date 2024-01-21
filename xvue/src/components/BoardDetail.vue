<template>
  <div class="text-start mx-5 mt-3">
    <div class="mb-3">
      <input disabled type="text" :value="`#  No. ${ $route.params.id}`" class="my-3 form-control none"  aria-describedby="emailHelp">
      <label for="exampleInputEmail1" class="form-label">작성자</label>
      <input type="text" v-model.trim="writer" @keydown="$refs.warnWriter.style.display = 'none'" ref="writer" class="form-control none" placeholder="작성자를 입력해 주세요."  id="exampleInputEmail1" aria-describedby="emailHelp">
      <div ref="warnWriter" class="alert alert-danger py-1 mt-2" style="display : none"> 작성자를 입력해 주세요!</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">제목</label>
      <input type="text" v-model.trim="title" @keydown="$refs.warnTitle.style.display = 'none'" ref="title" class="form-control " placeholder="제목을 입력해 주세요." id="exampleInputPassword1">
      <div ref="warnTitle" class="alert alert-danger py-1 mt-2" style="display : none" role="alert"> 제목을 입력해 주세요!</div>
    </div>
    <div class="mb-3">
      <label for="floatingTextarea" class="form-label">내용</label>
      <textarea class="form-control" v-model.trim="content" @keydown="$refs.warnContent.style.display = 'none'" ref="content" placeholder="내용을 입력해 주세요." id="floatingTextarea"></textarea>
      <div ref="warnContent" class="alert alert-danger py-1 mt-2" style="display : none" role="alert"> 내용을 입력해 주세요!</div>
    </div>
    <div class="d-flex justify-content-center">
      <button @click="updateBoard" class="btn btn-warning m-1">수정</button>
      <button @click="deleBoard" class="btn btn-danger m-1">삭제</button>
      <button @click="getBoardList" class="btn btn-primary m-1">목록</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted(){
    const board = this.$store.state.boardList.find(board=>board.id==this.$route.params.id)
    this.writer = board.writer;
    this.title = board.title;
    this.content = board.content;
    this.id = board.id;
  },
  data(){
    return{
      writer : '',
      title : '',
      content : '',
      id : '',
    }
  },
  methods:{
    formValid(){
      let flag = true;

      if(this.title.length === 0 ){
        this.$refs.warnTitle.style.display = 'block'
        this.$refs.title.focus();
        flag = false;
      }
      if(this.writer.length === 0 ){
        this.$refs.warnWriter.style.display = 'block'
        this.$refs.writer.focus();
        flag = false;
      }
      if(this.content.length === 0 ){
        this.$refs.warnContent.style.display = 'block'
        this.$refs.content.focus();
        flag = false;
      }
      
      return flag;
    },
    updateBoard(){
      if(!this.formValid()) return false;

      if(confirm('수정 하시겠습니까?')){
        axios.patch(`/api/board/${this.id}`,{
          writer : this.writer,
          title : this.title,
          content : this.content,
        })
        .then(()=>{
          this.getBoardList()
        });
      }
    },
    deleBoard(){
      if(confirm('삭제 하시겠습니까?')){
        axios.delete(`/api/board/${this.id}`)
        .then(()=>{
          // this.$store.commit('setPage', 1);
          this.getBoardList()
        });
      }
    },
    getBoardList(){
      this.$router.push(`/board/page/${this.$store.state.page}`)
    },
  }
}
</script>

<style>

</style>