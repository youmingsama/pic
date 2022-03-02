<template>
  <div class="image_Big">
    <img v-bind:src="msg">
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'HelloWorld',

  data(){
    return{
      msg:''
    }
 },
  mounted(){
  this.url1()

},
  methods:{
    url1(){
      var url1 = "api/api/miku/";
      axios.get(url1).then((response)=>{
        this.msg=response.data.url;
        console.log("请求到的数据66666："+this.msg);
      }).catch((error)=>{
        console.log(error);
      })

      return url1
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.image_Big{
  position: absolute;
  height: auto;
  width: auto%;
  top:0;
  left: 0;
  overflow-y: auto;
  margin: 0;
  padding: 0;

}
div{
  width: 100%;
  height: 100%;
  background-size: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: block;
}
html,body{
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow-x:hidden; overflow-y:hidden;
}
*{margin: 0;padding: 0;}
</style>
