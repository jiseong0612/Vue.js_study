import api from "@/api";

export default{
    //Destructuring : https://joshua1988.github.io/es6-online-book/destructuring.html

    //Before Destructuring  
    FETCH_NEWS(context){
      api.fetchNewsList()
      .then(response =>{ 
        console.log('FETCH_NEWS', 'created');
        context.commit('SET_NEWS', response.data);})
      .catch(error =>{
        console.log(error);
      });
    },
    //After Destructuring  
    FETCH_ASK({commit}){
      api.fetchAskList()
      .then(({data}) =>{
        console.log('FETCH_ASK', 'created');
        commit('SET_ASK', data);
      })
      .catch(error =>{
        console.log(error);
      });
    },
    FETCH_JOBS({commit}){
      api.fetchJobsList()
      .then(({data}) =>{
        console.log('FETCH_JOBS', 'created');
        commit('SET_JOBS', data);
      })
      .catch(error =>{
        console.log(error);
      });
    },
    FETCH_USER({commit}, userName){
      api.fetchUserName(userName)
      .then(({data}) =>{
        console.log('FETCH_USER', 'created');
        commit('SET_USER', data);
      })
      .catch(error =>{
        console.log(error);
      });
    },
    // 코딩애플 이미지 
    // getData(context){
    //   axios.get(`https://codingapple1.github.io/vue/more0.json`)
    //     .then((result)=>{
    //       context.commit('setMore', result.data);
    //     })
    // },
}