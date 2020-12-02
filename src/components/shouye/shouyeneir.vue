<template>
    <div>
        <h3>下午好</h3>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../../../public/imgs/shouyelunbo1.jpg" width="350px" height="150px" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/imgs/shouyelunbo1.jpg" width="350px" height="150px" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/imgs/shouyelunbo1.jpg" width="350px" height="150px" />
      </van-swipe-item>
      <van-swipe-item>
        <img src="../../../public/imgs/shouyelunbo1.jpg" width="350px" height="150px" />
      </van-swipe-item>
    </van-swipe>
    <!-- <img src="https://s3.ax1x.com/2020/11/28/DsRz3q.jpg"/>这个是图床的用法你在学校用的到性能方面会提高可以封到接口也可直接用 -->
    <van-grid square :column-num="5" :border="false">
      <!-- <van-grid-item
        v-for="(item,index) in gridtextlist"
        :key="index"
        :text="item.text"
        :icon="item.photo"
      />-->
      <van-grid-item icon="https://s3.ax1x.com/2020/11/30/DgvoEF.jpg" text="雨声" to="/shengyin"/>
      <van-grid-item icon="https://s3.ax1x.com/2020/11/28/DsRz3q.jpg" text="专注" to="/zhuanzhu"/>
      <van-grid-item icon="https://s3.ax1x.com/2020/11/30/DgvbC9.jpg" text="冥想" />
      <van-grid-item icon="https://s3.ax1x.com/2020/11/30/Dgvq3R.jpg" text="减压" />
      <van-grid-item icon="https://s3.ax1x.com/2020/11/30/DgvLg1.jpg" text="解忧铺" />
    </van-grid>
    <div class="div1">
      <h4>助眠声音</h4>
      <span class="sp1">更多</span>
      <van-grid square icon-size="88px" :border="false" :column-num="3">
        <van-grid-item icon="https://s3.ax1x.com/2020/11/30/DgvvDK.jpg" text="轻檫桌面" />
        <van-grid-item icon="https://s3.ax1x.com/2020/11/30/Dgvju6.jpg" text="细雨拍詹" />
        <van-grid-item icon="https://s3.ax1x.com/2020/11/30/DgvOjx.jpg" text="霍格沃兹大厅" />
      </van-grid>
    </div>
    <div class="div2">
      <h4>暖心电台</h4>
      <span class="sp1">更多</span>
      <van-grid square icon-size="88px" :border="false" :column-num="3">
        <van-grid-item icon="https://s3.ax1x.com/2020/11/30/Dgv5HU.jpg" text="轻檫桌面" />
        <van-grid-item icon="https://s3.ax1x.com/2020/11/30/Dgv4BT.jpg" text="细雨拍詹" />
        <van-grid-item icon="https://s3.ax1x.com/2020/11/30/DgvhuV.jpg" text="霍格沃兹大厅" />
      </van-grid>
    </div>
    </div>
</template>
<style scoped>
.van-swipe {
  text-align: center;
}
h3 {
  margin-left: 0.625rem;
}
h4 {
  display: inline;
  margin-left: 1.25rem;
  margin-right: 14.5rem;
}

.sp1 {
  /* display: inline-block; */
  font-size: 0.875rem;
  color: #c7c9ca;
  /* margin: 0rem 0rem 0rem 19.875rem;   */
  /* margin-left: 20px; */
}
.div1 {
  margin-top: 1rem;
}
.div2 {
  margin-top: 1rem;
}
</style>