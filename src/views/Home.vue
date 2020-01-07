<!--
 * @Author: amujoe
 * @Date: 2020-01-06 16:35:04
 * @Description: file content
 -->
<template>
  <div class="home">
    <!-- banner -->
    <el-carousel class="banner">
      <el-carousel-item v-for="item in banner" :key="item">
        <div class="banner-item" :style="{backgroundImage: 'url(' + item + ')'}"></div>
      </el-carousel-item>
    </el-carousel>

    <!-- 公司业务 -->
    <div class="box">
      <div class="box-con">
        <div class="box-title">公司业务</div>
        <div class="project">
          <template v-for="(item, index) in project_list">
            <div class="p-item" :key="index">
              <div class="p-pic">
                <img :src="item.pic" alt="">
              </div>
              <div class="p-title">{{item.title}}</div>
              <div class="p-desc">{{item.desc}}</div>
            </div>
          </template>
        </div>
      </div>
    </div>

  <!-- 合作伙伴 -->
  <div class="box part-bac">
    <div class="box-con">
      <div class="box-title">合作伙伴</div>
      <div class="partner">
        <template v-for="(item, index) in partner_list">
          <div class="pa-item" :key="index">
            <img :src="item" alt="">
          </div>
        </template>
      </div>
    </div>
  </div>

  <!-- 关于我们 -->
  <div class="about">
    <div class="a-pic">
      <img src="https://oss1.chedianai.com/images/assets/about-bac.jpg" alt="艺佳和木">
    </div>
    <div class="a-con">
      <div class="a-title">太原市艺佳和木贸易有限公司</div>
      <div class="a-desc">
        <p>公司拥有广泛的商品信息网络和强有力的执行团队，合作伙伴遍及各行各业</p>
        <p>营业范围</p>
        <p>公司以建建筑材料、矿产品、五金交电、机械产品及设备、轻工产品、农副产品、电子产品及设备、文化体育用品及器材的零售及贸易。主要业务涵括：建材产品销售代理、矿产品销售代理、机电产品进出口销售代理、电子五金。家具家电销售代理等。 
公司同时致力开拓建材、机械、电子五金等产品的进出口贸易电子商务平台</p>
      </div>
    </div>
  </div>
 
  <!-- footer -->
  <div class="box">
    <div class="box-con">
      
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  data() {
    return {
      banner: ["https://www.kokuyo-furniture.cn/wp-content/uploads/2018/01/arch.jpg", 
      "https://www.kokuyo-furniture.cn/wp-content/uploads/2017/06/Banner_interval-3.jpg"
      ],
      project_list: [
        {
          pic: "https://oss1.chedianai.com/images/assets/Slice01.png",
          title: "办公用品",
          desc: "文件档案用品、桌面用品、办公设备、财务用品、耗材等一系列与工作相关的用品"
        },
        {
          pic: "https://oss1.chedianai.com/images/assets/Slice02.png",
          title: "家居用品",
          desc: "床上用品、厨卫用具、室内配饰及日常生活需要的商品"
        },
        {
          pic: "https://oss1.chedianai.com/images/assets/Slice04.png",
          title: "会展布置",
          desc: "从设计到施工, 从施工到拆台一体式服务"
        },
        {
          pic: "https://oss1.chedianai.com/images/assets/Slice03.png",
          title: "五金建材",
          desc: "这里是描述2"
        }
      ],
      partner_list: [
        "https://oss1.chedianai.com/images/assets/logo/Slice01.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice02.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice03.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice04.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice05.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice06.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice07.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice08.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice09.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice10.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice11.jpg",
        "https://oss1.chedianai.com/images/assets/logo/Slice12.jpg",
      ]
    }
  }
}
</script>

<style lang="sass">
// banner
.banner,.el-carousel__container,.banner-item
  width: 100%
  height: 500px !important
  .banner-item
    background-position: center
// 盒子
.box
  width: 100%
  .box-con
    display: flex
    flex-direction: column
    justify-content: center
    width: 1000px
    margin: 0 auto
  .box-title
    position: relative
    font-size: 20px
    font-weight: 400
    padding-left: 25px
    margin-bottom: 50px
    &::before
      position: absolute
      left: 0
      top: 50%
      margin-top: -10px
      content: ' '
      width: 5px
      height: 20px
      background: #999
.part-bac
  background: #efefef
// 项目
.project
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  .p-item
    margin-bottom: 40px
    .p-title
      padding: 10px 0 5px
      font-size: 16px
      font-weight: 400
    .p-desc
      padding: 0 0 5px
      font-size: 12px
      color: #7F7F7F
// 合作伙伴
.partner
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  .pa-item
    width: 24%
    border: 1px solid #efefef
    margin-bottom: 20px
    img
      -webkit-filter: grayscale(100%);
      -moz-filter: grayscale(100%);
      -ms-filter: grayscale(100%);
      -o-filter: grayscale(100%);
      filter: grayscale(100%);
      filter: gray;
    img:hover
      -webkit-filter: grayscale(0);
      -moz-filter: grayscale(0);
      -ms-filter: grayscale(0);
      -o-filter: grayscale(0);
      filter: grayscale(0);
      filter: none;
.about
  display: flex
  .a-pic
    width: 50%
  .a-con
    display: flex
    flex-direction: column
    justify-content: center
    width: 50%
    padding-left: 40px
    .a-title
      font-size: 20px
      font-weight: 500
    .a-desc
      font-size: 16px
      color: #7F7F7F

/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px)
  .box-con
    width: 1200px
    height: 800px
  .p-item
    width: 550px
   
/*默认*/
@media (min-width: 980px)
  .box-con
    width: 1000px
  .p-item
    width: 450px
   
/* 平板电脑和小屏电脑之间的分辨率 */
@media (min-width: 768px) and (max-width: 979px)
  .box-con
    width: 800px
  .p-item
    width: 390px
 
/* 横向放置的手机和竖向放置的平板之间的分辨率 */
@media (max-width: 767px)
  .box-con
    padding: 0 20px
  .p-item
    width: 100%

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px)
  .box-con
    padding: 0 20px
  .p-item
    width: 100%

</style>
