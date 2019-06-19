<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png">
    </div>
    <div style="position:relative;">
      <div style="position:relative;">
        <pan-thumb v-if="isLogin()" :image="avatar" class="panThumb"/>
        <pan-thumb v-if="!isLogin()" :image="'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'" class="panThumb"/>
        <mallki class-name="mallki-text" text="vue-element-admin"/>
        <div style="padding-top:35px;" class="progress-item">
          <el-input v-model="keyword" placeholder="请输入内容" class="input-with-select" clearable>
            <el-button slot="append" icon="el-icon-search" @click="handleClick('')"/>
          </el-input>
        </div>
        <div
          v-for="tag in tags"
          :key="tag.code"
          :type="tag.percentage"
          class="progress-item">
          <el-button type="text" @click="handleClick(tag)">{{ tag.code }}</el-button>
          <el-progress :stroke-width="8" :percentage="tag.percentage"/>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import { countTag } from '@/api/remoteSearch'
import PanThumb from '@/components/PanThumb'
import Mallki from '@/components/TextHoverEffect/Mallki'
import { getToken } from '@/utils/auth'

export default {
  components: { PanThumb, Mallki },

  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      percentage: 100,
      keyword: '',
      tags: [],
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles',
      'articleKeyword'
    ])
  },
  created() {
    this.keyword = this.articleKeyword
    this.remoteMethod()
  },
  methods: {
    isLogin() {
      return getToken()
    },
    handleClick(type) {
      this.$store.dispatch('SetPage', 1).then()
      this.$store.dispatch('SetKeyword', this.keyword).then()
      this.$store.dispatch('SetTag', type.code).then()
      this.$store.dispatch('FetchList').then().catch(() => {
      })
      this.$store.dispatch('SetTag', '').then()
    },
    remoteMethod() {
      countTag().then(response => {
        if (!response.data) {
          return
        } else {
          const res = response.data
          if (res && res.data) {
            this.tags = res.data.map(v => v)
          }
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" >
.box-card-component{
  .el-card__header {
    padding: 0px!important;
  }
}
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px!important;
    width: 70px!important;
    position: absolute!important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none!important;
    /deep/ .pan-info {
      box-shadow: none!important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px){
    .mallki-text{
      display: none;
    }
  }
}
</style>
