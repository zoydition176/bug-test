<template>
  <div id="login" :style="autoheight">
    <img src="/static/nnn.png" alt="">
    <div class="login-module">
      <h3>登陆 VUEX-TEST</h3>
      <ul>
        <li>
          <el-input v-model="username" placeholder="请输入用户名" type="text"></el-input>
        </li>
        <li>
          <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
        </li>
        <li>
          <button class="login-btn" @click="Login()">点我登陆</button>
        </li>
        <li>
          <a href="" class="toregist">注册</a>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script>
  export default {
    name:'login',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    computed:{
      autoheight () {
        let windowHeight = document.documentElement.clientHeight;
        return 'height:'+ windowHeight + 'px'
      }
    },
    methods: {
      Login () {
        var loginMap = this.$store.state.usernameMap;
        var userData = {
          name:this.username,
          password:this.password
        };
        var matchUser = (arr,target) => {
          let matArr = [];
          for(let i = 0; i < arr.length; i++){
            matArr.push(arr[i]);
          }
          return JSON.stringify(matArr).indexOf(JSON.stringify(target))
        }
        // console.log(matchUser(loginMap,userData));
        // console.log(userData);
        if(this.username.length==0 || this.password.length==0){
          this.$alert('请完整填写登陆信息', '错误', {
            confirmButtonText: '确定'
          });
        }else{
          if(matchUser(loginMap,userData)>=0 && this.username.length>0){
            setTimeout(() => {
              this.$router.push({ 
                path: "/index"
              })
            }, 1000);            
          }else{
            this.$alert('账号密码不通过，请找tom索要账号密码，或者自己在state里找。', '抱歉', {
              confirmButtonText: '确定'
            });
          }
        }
      
      }  
    },
    mounted() {
      document.onkeyup = (e) => {
        let ev = e || window.e
        if(ev.keyCode == 13){
          this.Login()
        }
      }
    }
  }
</script>

<style scoped>
#login{
  position: relative;
  overflow: hidden;
}
#login img{
  width: 100%;
  height: auto
}
.login-module{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 420px;
  /* margin: 180px auto 50px; */
  padding: 30px;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 1px #eee;
  background: #ffffff;
  transform: translate(-50%,-50%);
}
.login-module h3{
  font-family: 'Microsoft YaHei';
  text-align: center;
  font-size: 28px;
  font-weight: 400;
  padding-bottom: 30px;
  color: #409EFF;
}
ul li{
  list-style: none;
  margin-bottom: 20px;
}
ul li:after{
  content: '';
  display: block;
  clear: both;
}
.login-btn{
  width: 100%;
  /* outline: none; */
  border: 1px solid #67C23A;
  background: #67C23A;
  line-height: 40px;
  color: #fff;
  font-size: 16px;
  border-radius: 3px;
  cursor: pointer;
  text-align: center;
}
.toregist{
  text-decoration: none;
  color: #409EFF;
  float: right;
}
</style>
