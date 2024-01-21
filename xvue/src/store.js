// import axios from 'axios';
import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      page : 1,
      keyword : '',
      searchType : 'T',
      boardList : [],
      board : {},
      pageMap : {},
    }
  },
  mutations :{
    setPage(state, page){
      state.page = page;
    },
    setKeyword(state, keyword){
      state.keyword = keyword;
    },
    setSearchType(state, searchType){
      state.searchType = searchType;
    },
    setBoardList(state, boardList){
      state.boardList = boardList
    },
    setBoard(state, board){
      state.pageMap = board;
    },
    setPageMap(state, pageMap){
      state.pageMap = pageMap;
    },
  },
  actions:{

  }
})

export default store