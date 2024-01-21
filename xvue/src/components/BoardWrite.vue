<template>
  <div class="text-start mx-5 mt-3">
    <div class="mb-3">
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
      <button @click="insertBoard" class="btn btn-success m-1">작성</button>
      <button class="btn btn-primary m-1" @click="getBoardList">목록</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      writer : '',
      title : '',
      content : '',
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
    insertBoard(){
      if(!this.formValid()) return false;
      
      axios.post('/api/board',{
        writer : this.writer,
        title : this.title,
        content : this.content,
      })
      .then(()=>{
        this.getBoardList(1);
      });
    },
    getBoardList(){
      let movePage = this.$store.state.page;
      this.$router.push(`/board/page/${movePage}`)
    },
  }
}
</script>

<style>

</style>