<template>
  <div class="app-container">

    <el-table v-loading="articleLoading" :data="articleList" stripe fit highlight-current-row style="width: 100%" @row-click="rowClick"	>
      <el-table-column
        type="index"/>
      <el-table-column min-width="120px" label="文章题目">
        <template slot-scope="scope">
          <span>{{ scope.row.title }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="80px" align="center" label="发布时间">
        <template slot-scope="scope">
          <span>{{ scope.row.displayTime | parseTime('{y}-{m}-{d}') }}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="240px" align="center" label="文章摘要">
        <template slot-scope="scope">
          <span>{{ scope.row.contentShort }}</span>
        </template>
      </el-table-column>

      <el-table-column width="100px" label="重要性">
        <template slot-scope="scope">
          <svg-icon v-for="n in +scope.row.importance" :key="n" icon-class="star" class="meta-item__icon"/>
        </template>
      </el-table-column>

      <el-table-column v-if="isLogin()" align="center" label="Actions" width="120">
        <template slot-scope="scope">
          <router-link :to="'/example/edit/'+scope.row.code">
            <el-button type="primary" size="small" icon="el-icon-edit">Edit</el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      v-show="articleTotal>0"
      :total="articleTotal"
      :current-page="articlePage"
      class="pagination-container"
      background
      layout="total, prev, pager, next"
      @current-change="handleCurrentChange"/>
  </div>
</template>

<script>
// import { fetchList } from '@/api/article'
import Pagination from '@/components/Pagination' // Secondary package based on el-pagination
import { getToken } from '@/utils/auth'

export default {
  name: 'ArticleList',
  components: { Pagination },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      limit: 10
    }
  },
  computed: {
    articlePage() {
      return this.$store.getters.articlePage
    },
    articleList() {
      return this.$store.getters.articleList
    },
    articleTotal() {
      return this.$store.getters.articleTotal
    },
    articleLoading() {
      return this.$store.getters.articleLoading
    }
  },
  created() {
    this.getList()
  },
  methods: {
    isLogin() {
      return getToken()
    },
    rowClick(row, event, column) {
      if (column && column.label && column.label === 'Actions') {
        // do nothing
      } else {
        this.$router.push('/example/view/' + row.code)
      }
    },
    getList() {
      this.$store.dispatch('FetchList').then(() => {}).catch(() => {
      })
    },
    handleCurrentChange(val) {
      this.$store.dispatch('SetPage', val).then()
      this.$store.dispatch('FetchList').then(() => {}).catch(() => {
      })
    }
  }
}
</script>

<style scoped>
.edit-input {
  padding-right: 100px;
}
.cancel-btn {
  position: absolute;
  right: 15px;
  top: 10px;
}
</style>
