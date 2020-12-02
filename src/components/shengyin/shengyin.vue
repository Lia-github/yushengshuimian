<template>
  <div>
    <h3>声音</h3>
    <van-tabs v-model="active" animated class="qiehuan">
      <van-tab title="雨音">
        <ul class="ul1">
          <li>
            <router-link to="/shengyinyemian" tag="li">
              <van-row>
                <van-col span="2"></van-col>
                <van-col span="4">
                  <img src="../../../public/imgs/shengying01.jpg" alt width="50" height="50" />
                </van-col>
                <van-col span="1"></van-col>
                <van-col span="8">
                  <h4>街雨</h4>
                  <span class="sp1">vip</span>
                  <span class="sp2">专注学习</span>
                </van-col>
                <van-col span="6"></van-col>
                <van-col span="2">
                  <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
                </van-col>
                <van-col span="1"></van-col>
              </van-row>
            </router-link>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying02.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>田野雨夜</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">轻松入睡</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying03.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>都市夜雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">冥想放空</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying04.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>寒风冷雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">深睡少梦</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>柔风化雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying06.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>海上风暴</h4>
                <span class="sp3">vip</span>
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying04.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>寒风冷雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">深睡少梦</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>雷雨前夕</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">日间提神</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>雨落闲庭</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">释放压力</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>柔风化雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
        </ul>
      </van-tab>
      <van-tab title="白噪音">
        <ul class="ul1">
          <li>
            <router-link to="/shengyinyemian" tag="li">
              <van-row>
                <van-col span="2"></van-col>
                <van-col span="4">
                  <img src="../../../public/imgs/shengying01.jpg" alt width="50" height="50" />
                </van-col>
                <van-col span="1"></van-col>
                <van-col span="8">
                  <h4>风起浪涌</h4>
                  <!-- <span class="sp1">vip</span> -->
                  <span class="sp2">释放压力</span>
                </van-col>
                <van-col span="6"></van-col>
                <van-col span="2">
                  <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
                </van-col>
                <van-col span="1"></van-col>
              </van-row>
            </router-link>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying02.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>日落鸟语</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">冥想放空</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying03.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>气泡咕噜</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">轻松入睡</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying04.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>热带雨林</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">深睡少梦</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>林中飞瀑</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying06.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>清晨街口</h4>
                <span class="sp3">vip</span>
                <span class="sp2">专注学习</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying04.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>寒风冷雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">深睡少梦</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>雷雨前夕</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">日间提神</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>雨落闲庭</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">释放压力</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>柔风化雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
        </ul>
      </van-tab>
      <van-tab title="耳语">
        <ul class="ul1">
          <li>
            <router-link to="/shengyinyemian" tag="li">
              <van-row>
                <van-col span="2"></van-col>
                <van-col span="4">
                  <img src="../../../public/imgs/shengying01.jpg" alt width="50" height="50" />
                </van-col>
                <van-col span="1"></van-col>
                <van-col span="8">
                  <h4>强烈向掏耳</h4>

                  <span class="sp2">深睡少梦</span>
                </van-col>
                <van-col span="6"></van-col>
                <van-col span="2">
                  <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
                </van-col>
                <van-col span="1"></van-col>
              </van-row>
            </router-link>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying02.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>清洗碗碟</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">轻松入睡</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying03.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>零食时刻</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">冥想放空</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying04.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>窃窃私语</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">深睡少梦</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>柔风化雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying06.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>轻檫桌面</h4>
                <span class="sp3">vip</span>
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying04.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>暗暗搓手</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">深睡少梦</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>雷雨前夕</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">日间提神</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>雨落闲庭</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">释放压力</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>柔风化雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
        </ul>
      </van-tab>
      <van-tab title="轻音乐">
        <ul class="ul1">
          <li>
            <router-link to="/shengyinyemian" tag="li">
                  <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying01.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>悠长雨巷</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">专注学习</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
            </router-link>
      
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying02.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>匆匆盛夏</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">轻松入睡</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying03.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>乘风破浪</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">冥想放空</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying04.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>夏日光影</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">深睡少梦</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>柔风化雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying06.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>雨后彩虹</h4>
                <span class="sp3">vip</span>
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
              <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying04.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>童趣记忆</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">深睡少梦</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>雷雨前夕</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">日间提神</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
          <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>音乐室</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">释放压力</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
           <li>
            <van-row>
              <van-col span="2"></van-col>
              <van-col span="4">
                <img src="../../../public/imgs/shengying05.jpg" alt width="50" height="50" />
              </van-col>
              <van-col span="1"></van-col>
              <van-col span="8">
                <h4>柔风化雨</h4>
                <!-- <span class="sp1">vip</span> -->
                <span class="sp2">午间小憩</span>
              </van-col>
              <van-col span="6"></van-col>
              <van-col span="2">
                <van-icon name="play" size="30" color="#FE979C" class="tubiao1" />
              </van-col>
              <van-col span="1"></van-col>
            </van-row>
          </li>
        </ul>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.qiehuan {
  /* position:relative; */
}
h3 {
  margin-left: 0.625rem;
}
.ul1 li {
  list-style: none;
  border-bottom: 0.0625rem solid #eae8e9;
  /* margin: 0rem 0rem 0rem 1.625rem; */
  margin-top: 1.35rem;
}
h4 {
  display: inline;
  /* margin-left: 1.25rem; */
  /* margin-right: 0.5rem; */
}
.sp1 {
  display: block;
  line-height: 1rem;
  width: 2.45rem;
  height: 1.1rem;
  background-color: #deaf5b;
  color: white;
  text-align: center;
  border-radius: 0.3rem;
  margin: -1.1rem 0rem 0rem 3rem;
  font-size: 0.85rem;
}
.sp2 {
  display: block;
  width: 3.5rem;
  height: 1.1rem;
  border: 0.0625rem solid #000;
  font-size: 0.5rem;
  text-align: center;
  margin: 0.31rem 0rem 0rem 0rem;
  border-radius: 0.3125rem;
}
.tubiao1 {
  padding-top: 0.8rem;
}
.sp3 {
  display: block;
  line-height: 1rem;
  width: 2.45rem;
  height: 1.1rem;
  background-color: #deaf5b;
  color: white;
  text-align: center;
  border-radius: 0.3rem;
  margin: -1.1rem 0rem 0rem 5rem;
  font-size: 0.85rem;
}
</style>