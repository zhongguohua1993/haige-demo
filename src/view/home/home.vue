<template>
  <div>
    <div class="home-menu">

    </div>
    <div class="home-background">
      <div class="lab-desc">
        <div class="lab-name">
          <div class="lab-name-cn">摸鱼研究所</div>
          <div class="lab-name-en">moyu-lab</div>
        </div>
      </div>
    </div>
    <div class="lab-members">
      <template v-for="item in members">
        <div class="lab-members-item">
          <div :class="['member-head',item.imageClass]"></div>
          <div class="member-info">
            <div class="member-info-name">{{item.name}}</div>
            <div class="member-info-desc">{{item.desc}}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    props: {},
    data () {
      return {
        members: [
          {
            name: '海哥',
            desc: '一个大逗比',
            imageClass: 'member-haige'
          }, {
            name: '紧紧',
            desc: '全能紧',
            imageClass: 'member-jinjin'
          }, {
            name: '恐龙鸽',
            desc: '给前面两个打工的',
            imageClass: 'member-konglong'
          },
        ]
      }
    },
    watch: {},
    computed: {},
    methods: {},
    created () {
    },
    mounted () {
    }
  }
</script>
<style lang="scss" scoped>
  .home-menu{

  }

  .home-background {
    width: 100%;
    height: 600px;
    position: relative;
    background: url(../../assets/home/background.png) no-repeat;
    .lab-desc {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba($color: #000000, $alpha: 0.4);
      color: white;
      .lab-name {
        letter-spacing: 10px;
        margin-left: 200px;
        margin-top: 150px;
        font-size: 64px;
      }
    }
  }

  .lab-members {
    position: absolute;
    top: 550px;
    width: 100%;
    display: flex;
    justify-content: center;
    float: left;
    .lab-members-item {
      margin: 0 80px;
      .member-head {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        background-size: 100% 100%;
      }
      .member-info {
        text-align: center;
        font-size: 20px;
        &-name {
          color: #373737;
          font-weight: bolder;
        }
      }
      .member-haige {
        background-image: url(../../assets/home/haige.jpg);
      }
      .member-jinjin {
        background-image: url(../../assets/home/jinjin.jpg);
      }
      .member-konglong {
        background-image: url(../../assets/home/konglongge.png);
      }
    }
  }
</style>
