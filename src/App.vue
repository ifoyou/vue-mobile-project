<template>
  <div id="app">
    <!-- 需要缓存的页面 -->
     <van-nav-bar :title="$route.meta.name" left-text="返回" left-arrow>
      <van-icon name="shopping-cart-o" slot="right" badge="9" size="20px"/>
    </van-nav-bar>
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 不需要缓存 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { NavBar, Icon } from 'vant';
export default {
  name: 'app',
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon
  }
};
</script>

<style>
/* 去除默认自带的边距 */
html,
body {
  margin: 0px;
  padding: 0px;
}
</style>
