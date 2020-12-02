<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <van-tabbar route active-color="#FA6968" inactive-color="#000">
      <van-tabbar-item replace to="/shouyeneir" icon="browsing-history-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/shengyin" icon="music-o">声音</van-tabbar-item>
      <van-tabbar-item replace to="/zhuanzhu" icon="underway-o">专注</van-tabbar-item>
      <van-tabbar-item replace to="/wode" icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gridtextlist: [
        {
          text: "雨声",
          photo: require("../../public/imgs/shouyeyuan1.jpg")
        },
        {
          text: "专注",
          photo: require("../../public/imgs/shouyeyuan2.jpg")
        },
        {
          text: "冥想",
          photo: require("../../public/imgs/shouyeyuan3.jpg")
        },
        {
          text: "减压",
          photo: require("../../public/imgs/shouyeyuan4.jpg")
        },
        {
          text: "解忧铺",
          photo: require("../../public/imgs/shouyeyuan5.jpg")
        }
      ]
    };
  }
};
</script>
<style scoped>

</style>