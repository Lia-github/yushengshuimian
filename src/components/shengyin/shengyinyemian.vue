<template>
  <div alt class="bj">
    <div class="shangfang">
      <van-row>
        <van-col span="2"></van-col>
        <van-col span="2">
            <router-link to="/shengyin"><van-icon name="arrow-left" size="30" color="#fafafa"/></router-link>
          
        </van-col>
        <van-col span="6"></van-col>
        <van-col span="2">
          <van-icon name="other-pay" size="28" color="#fafafa" />
        </van-col>
        <van-col span="1"></van-col>
        <van-col span="2">
          <van-icon name="star-o" size="28" color="#fafafa" @click="shouchang"/>
        </van-col>
        <van-col span="1"></van-col>
        <van-col span="2">
          <van-icon name="down" size="28" color="#fafafa" @click="xiazai"/>
        </van-col>
        <van-col span="1"></van-col>
        <van-col span="2">
          <van-icon name="share-o" size="30" color="#fafafa" @click="showShare = true" />
          <van-share-sheet
            v-model="showShare"
            title="立即分享给好友"
            :options="options"
            @select="onSelect"
          />
        </van-col>
      </van-row>
    </div>
    <div class="biaoti">
      <h1>街雨</h1>
      <div class="zzxx">专注学习</div>
    </div>
    <div class="xiafang">
      <van-row type="flex" justify="space-around">
        <van-col span="6">
          <van-icon name="bars" color="#fafafa" size="40" @click="show = true" />
          <van-action-sheet v-model="show" title cancel-text="关闭">
            <div class="content">
              <ul class="ul1">
                <li>
                  <van-row>
                    <van-col span="2"></van-col>
                    <van-col span="2">
                      <img src="../../../public/imgs/shengying01.jpg" alt width="40" height="40" />
                    </van-col>
                    <van-col span="2"></van-col>
                    <van-col span="5" class="xia">街雨</van-col>
                    <van-col span="9"></van-col>
                    <van-col span="1" class="xia">
                      <van-icon name="volume" color="#FA6968" />
                    </van-col>
                    <van-col span="2"></van-col>
                  </van-row>
                </li>
                <li>
                  <van-row>
                    <van-col span="2"></van-col>
                    <van-col span="2">
                      <img src="../../../public/imgs/shengying02.jpg" alt width="40" height="40" />
                    </van-col>
                    <van-col span="2"></van-col>
                    <van-col span="5" class="xia">田野雨夜</van-col>
                    <van-col span="9"></van-col>
                    <van-col span="1" class="xia">
                      <van-icon name="volume" color="#FA6968" />
                    </van-col>
                    <van-col span="2"></van-col>
                  </van-row>
                </li>
                <li>
                  <van-row>
                    <van-col span="2"></van-col>
                    <van-col span="2">
                      <img src="../../../public/imgs/shengying03.jpg" alt width="40" height="40" />
                    </van-col>
                    <van-col span="2"></van-col>
                    <van-col span="5" class="xia">都市夜雨</van-col>
                    <van-col span="9"></van-col>
                    <van-col span="1" class="xia">
                      <van-icon name="volume" color="#FA6968" />
                    </van-col>
                    <van-col span="2"></van-col>
                  </van-row>
                </li>
                <li>
                  <van-row>
                    <van-col span="2"></van-col>
                    <van-col span="2">
                      <img src="../../../public/imgs/shengying04.jpg" alt width="40" height="40" />
                    </van-col>
                    <van-col span="2"></van-col>
                    <van-col span="5" class="xia">寒风冷雨</van-col>
                    <van-col span="9"></van-col>
                    <van-col span="1" class="xia">
                      <van-icon name="volume" color="#FA6968" />
                    </van-col>
                    <van-col span="2"></van-col>
                  </van-row>
                </li>
                <li>
                  <van-row>
                    <van-col span="2"></van-col>
                    <van-col span="2">
                      <img src="../../../public/imgs/shengying05.jpg" alt width="40" height="40" />
                    </van-col>
                    <van-col span="2"></van-col>
                    <van-col span="5" class="xia">柔风化雨</van-col>
                    <van-col span="9"></van-col>
                    <van-col span="1" class="xia">
                      <van-icon name="volume" color="#FA6968" />
                    </van-col>
                    <van-col span="2"></van-col>
                  </van-row>
                </li>
              </ul>
            </div>
          </van-action-sheet>
          <!-- <van-action-sheet v-model="show" :actions="actions" @select="onSelect"   /> -->
        </van-col>
        <van-col span="6">
          <van-icon name="play" color="#fafafa" size="40" />
        </van-col>
        <van-col span="6">
          <van-icon name="clock" color="#fafafa" size="40" @click="showPopup" />
          <van-popup v-model="show2" position="bottom" :style="{ height: '30%' }">
            <van-slider v-model="value" @change="onChange" class="huakuai"/>
          </van-popup>
        </van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 50,
      show2: false,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" }
      ],
      show: false,
      actions: [{ name: "选项一" }, { name: "选项二" }, { name: "选项三" }]
    };
  },
  methods: {
    onChange(value) {
      Toast('当前值：' + value);
    },
    showPopup() {
      this.show2 = true;
    },
    onSelect(option) {
      Toast(option.name);
      this.showShare = false;
    },
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    shouchang(){
       this.$toast('收藏成功');

    },
     xiazai(){
       this.$toast('正在下载');
       
    }
  }
};
</script>
<style scoped>
.bj {
  background-image: url(../../../public/imgs/shengyinyemianbj.jpg);
  width: 100%;
  height: 50.75rem;
  /* position: relative; */
  background-size: cover;
  background-repeat: no-repeat;
  /* opacity: 0.6; */
}
.shangfang {
  padding-top: 2rem;
}
h1 {
  text-align: center;
  color: white;
}
.biaoti {
  margin-top: 26rem;
}
.zzxx {
  color: white;
  font-size: 0.15rem;
  width: 3.5rem;
  height: 1.1rem;
  border: 0.0625rem solid #fafafa;
  text-align: center;
  margin-left: 10rem;
}
.xiafang {
  text-align: center;
  margin-top: 8rem;
}
.ul1 li {
  margin-top: 1rem;
}
.xia {
  padding-top: 0.5rem;
}
.huakuai {
  top: 3rem;
}
</style>