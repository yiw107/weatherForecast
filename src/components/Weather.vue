<script setup>
const props = defineProps({
  data:Object
})
console.log(props.data)
// 获取天气图标的 class 名称
const getWeatherIconClass = (info) => {
  switch (info) {
    case '晴':
      return 'iconfont icon-qing'
    case '多云':
      return 'iconfont icon-tianqi'
    case '中雨':
      return 'iconfont icon-dayu'
    // 其他天气情况的图标
    default:
      return 'iconfont icon-shouye'
  }
}
</script>



<template>
<!-- 当下天气 -->
<!-- <el-card shadow="hover">
    <h3>{{ data.city }}</h3>
    <p>天气：{{ data.realtime.info }}</p>
    <p>温度：{{ data.realtime.temperature }}</p>
    <p>湿度：{{ data.realtime.humidity }}</p>
    <p>风向：{{ data.realtime.direct }}</p>
    <p>风速：{{ data.realtime.power }}</p>
  </el-card> -->

  <el-card shadow="hover">
    <h3>{{ data?.city }} 天气详情</h3>
    <el-row :gutter="20">
      <!-- 第一列：天气图标和天气信息 -->
      <el-col :span="8">
        <div style="text-align: center;">
          <i :class="getWeatherIconClass(data?.realtime?.info)" style="font-size: 60px;"></i>
          <p>{{ data?.realtime?.info}}</p>
        </div>
      </el-col>

      <!-- 第二列：温度和湿度 -->
      <el-col :span="8">
        <p>温度：{{ data?.realtime?.temperature  }}°C</p>
        <p>湿度：{{ data?.realtime?.humidity  }}%</p>
      </el-col>

      <!-- 第三列：风向和风速 -->
      <el-col :span="8">
        <p>风向：{{ data?.realtime?.direct  }}</p>
        <p>风速：{{ data?.realtime?.power  }}</p>
      </el-col>
    </el-row>
  </el-card>
</template>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>