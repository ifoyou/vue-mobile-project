export default [
  // 菜单页
  {
    path: '/home',
    name: 'Home',
    components: {
      default: () => import('@/page/homePage/home')
    },
    meta: {
      name: '主页',
      keepAlive: true
    }
  }
];
