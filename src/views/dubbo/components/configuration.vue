<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="Title">
        <template slot-scope="scope">
          {{ scope.row }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      
    </el-table>
  </div>
</template>

<script>
import { getDubboConfig } from '@/api/getDubboConfig'

export default {
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.getConfig()
  },
  methods: {
    getConfig() {
      this.listLoading = true
      getDubboConfig().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
