<!--
 * @Author: amujoe
 * @Date: 2020-01-06 16:35:04
 * @Description: file content
 -->
<template>
  <div class="page">
    <div class="top">
      <div class="name">太原艺佳和木</div>
      <div class="nav">
        <a class="n-item" href="#scorll01">公司业务</a>
        <a class="n-item" href="#scorll02">合作伙伴</a>
        <a class="n-item" href="#scorll03">关于我们</a>
        <a class="n-item" href="#scorll04">联系我们</a>
      </div>
    </div>
    <!-- banner -->
    <el-carousel class="banner">
      <el-carousel-item v-for="item in banner" :key="item">
        <div class="banner-item" :style="{backgroundImage: 'url(' + item + ')'}"></div>
      </el-carousel-item>
    </el-carousel>

    <!-- 公司业务 -->
    <div class="box" id="scorll01">
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
  <div id="scorll02" class="box part-bac">
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
  <div class="about"  id="scorll03">
    <div class="a-pic">
      <img src="https://oss1.chedianai.com/images/assets/about-bac.jpg" alt="艺佳和木">
    </div>
    <div class="a-con">
      <div class="a-title">太原市艺佳和木贸易有限公司</div>
      <div class="a-desc">
        <p class="text-primary">公司简介</p>
        <span>公司拥有广泛的商品信息网络和强有力的执行团队，合作伙伴遍及各行各业</span>
        <p class="text-primary">营业范围</p>
        <span>公司以建建筑材料、矿产品、五金交电、机械产品及设备、轻工产品、农副产品、电子产品及设备、文化体育用品及器材的零售及贸易。主要业务涵括：建材产品销售代理、矿产品销售代理、机电产品进出口销售代理、电子五金。家具家电销售代理等。 
公司同时致力开拓建材、机械、电子五金等产品的进出口贸易电子商务平台</span>
        <p class="text-primary">公司地址</p>
        <span>太原市小店区坞城路92号（山西大学）令德阁地下一层</span>
      </div>
    </div>
  </div>
 
  <!-- 联系人 -->
  <div class="box" id="scorll04">
    <div class="contact">
      <div class="c-txt">嗨, 愉快的合作从第一次沟通开始</div>
      <div class="c-ewm">
        <img src="https://oss1.chedianai.com/images/assets/ewm.jpg" alt="">
      </div>
    </div>
  </div>

  <div class="footer">
    <p>Copyright ©2018-2022 太原市艺佳和木贸易有限公司</p>
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
          desc: "指金、银、铜、铁、锡五种金属。经人工加工可以制成刀、剑等艺术品或金属器件。现代社会的五金更为广泛，例如五金工具、五金零部件、日用五金"
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
.page
  padding-top: 50px
// top
.top
  position: fixed
  left: 0
  top: 0
  z-index: 100
  border-bottom: 1px solid #efefef
  display: flex
  justify-content: space-between
  align-items: center
  width: 100%
  box-sizing: border-box
  padding: 0 40px
  height: 50px
  background: #fff
  .name
    font-size: 20px
  .nav
    display: flex
    .n-item
      line-height: 50px
      padding: 0 10px

// banner
.banner,.el-carousel__container,.banner-item
  width: 100%
  height: 700px !important
  .banner-item
    background-position: center
    background-size: auto 100%
// 盒子
.box
  width: 100%
  .box-con
    display: flex
    flex-direction: column
    justify-content: center
    margin: 0 auto
  .box-title
    position: relative
    font-size: 20px
    font-weight: 400
    padding-left: 25px
    margin: 50px 0
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
  padding-bottom: 50px
  .pa-item
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
  .a-con
    display: flex
    flex-direction: column
    justify-content: center
    padding: 0 80px
    .a-title
      font-weight: 500
      padding-bottom: 40px
    .a-desc
      color: #7F7F7F
      line-height: 1.5
      p
        padding: 30px 0 10px
.contact
  display: flex
  align-items: center
  width: 100%
  background: url('https://oss1.chedianai.com/footer-bac.png') center
  .c-txt
    font-weight: 400
    color: #fff
.footer
  width: 100%
  box-sizing: border-box
  text-align: center
  padding: 10px 20px
  font-size: 12px
  color: #fff
  background: #333
/* 大屏幕 ：大于等于1200px*/
@media (min-width: 1200px)
  .box-con
    width: 1200px
    height: 800px
  .p-item
    width: 550px
  .pa-item
    width: 24%
  .a-pic
    width: 55%
  .a-con
    width: 45%
    .a-title
      font-size: 30px
    .a-desc
      font-size: 16px
  .contact
    align-items: center
    justify-content: space-around
    width: 100%
    height: 300px
    .c-txt
      font-size: 40px
      font-weight: 400
      color: #fff
    .c-ewm
      margin-top: 20px
      width: 150px
      height: 150px
   
/*默认*/
@media (min-width: 980px)
  .box-con
    width: 1000px
  .p-item
    width: 450px
  .pa-item
    width: 24%
  .a-pic
    width: 55%
  .a-con
    width: 45%
    .a-title
      font-size: 30px
    .a-desc
      font-size: 16px
  .contact
    align-items: center
    justify-content: space-around
    width: 100%
    height: 300px
    .c-txt
      font-size: 40px
      font-weight: 400
      color: #fff
    .c-ewm
      margin-top: 20px
      width: 150px
      height: 150px
   
/* 平板电脑和小屏电脑之间的分辨率 */
@media (min-width: 768px) and (max-width: 979px)
  .banner,.el-carousel__container,.banner-item
    height: 400px !important
  .box-con
    width: 700px
  .p-item
    width: 340px
  .pa-item
    width: 30%
  .about
    padding: 50px 0
    .a-pic
      display: flex
      justify-content: flex-end
      width: 45%
      img
        width: 180px
        height: 240px
    .a-con
      width: 55%
      .a-title
        font-size: 20px
      .a-desc
        font-size: 14px
  .contact
    flex-direction: column
    align-items: center
    justify-content: center
    height: 300px
    .c-txt
      font-size: 30px
    .c-ewm
      margin-top: 20px
      width: 120px
      height: 120px

 
/* 横向放置的手机和竖向放置的平板之间的分辨率 */
@media (max-width: 767px)
  .top
    justify-content: center
    .nav
      display: none
  .banner,.el-carousel__container,.banner-item
    height: 300px !important
  .box-con
    padding: 0 20px
    .box-title
      margin: 20px 0 !important
  .p-item
    width: 100%
    margin-bottom: 20px !important
  .pa-item
    width: 45%
  .about
    flex-direction: column
    padding-bottom: 50px
    .a-pic
      display: flex
      justify-content: flex-end
      width: 100%
      border-bottom: 10px solid #bbb
    .a-con
      box-sizing: border-box
      width: 100%
      padding: 30px 20px 30px 60px !important
      .a-title
        font-size: 30px
        padding-bottom: 20px !important
      .a-desc
        font-size: 14px
  .contact
    flex-direction: column
    align-items: center
    justify-content: center
    height: 300px
    .c-txt
      font-size: 20px
    .c-ewm
      margin-top: 20px
      width: 180px
      height: 180px

/* 横向放置的手机及分辨率更小的设备 */
@media (max-width: 480px)
  .box-con
    padding: 0 20px
  .p-item
    width: 100%

</style>
