<template>
<div class="kk">
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-header style="text-align: right; font-size: 12px">
     
      
    </el-header>

    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="navie"></i>基本属性分析</template>

            <el-menu-item index="1-1">用户基本属性展现</el-menu-item>
            <el-menu-item index="1-2">用户性别聚合分析</el-menu-item>

            <el-menu-item index="1-3">用户年龄聚合分析</el-menu-item>
            <el-menu-item index="1-4">用户持卡聚合分析</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="navie"></i>地域分析</template>

            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>

            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="navie"></i>支付偏好分析</template>

            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>

            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="navie"></i>消费分析</template>

            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>

            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title"
              ><i class="navie"></i>用户价值与风险</template
            >

            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>

            <el-menu-item index="1-3">选项3</el-menu-item>
            <el-menu-item index="1-4">选项4</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</div>
</template>

<script>
export default {};
</script>

<style>
.kk{
    
    float:center;
}

.el-header {
  background-color: rgb(69, 44, 44);
  color: #333;
  line-height:80px ;
}

.el-aside {
  color: #333;
}
</style>
