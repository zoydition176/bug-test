<template>
  <div class="head">
    <div class="line"></div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo top-head" mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/index">首页</router-link>       
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">项目列表</template>
        <el-menu-item index="2-1">
          <router-link to="/index">index</router-link>        
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/test">vuex-test</router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link to="/login">返回登陆</router-link>
        </el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"><a href="https://www.feisu.com" target="_blank">访问飞速</a></el-menu-item>
    </el-menu>
  </div>
</template>

<style scoped>
.head{
  background: #545c64;
}
.top-head{
  width: 1440px;
  margin: 0 auto;
}
.top-head a{
  color: #ffffff
}
.el-menu-item a{
  color: #ffffff;
  text-decoration: none;
}
</style>

<script>
export default {
  name: 'Header',
  data() {
    return {
      // 默认激活下标
      activeIndex2: '1'
    };
  },
  computed:{

  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
