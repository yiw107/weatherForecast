<script setup>
const props = defineProps({
  data: Object
})
console.log(props.data)
</script>

<template>
  <!-- 先检查 data.future 是否存在 -->
  <el-card shadow="hover" v-if="data && data.future && data.future.length > 0">
    <h4>{{ data.future[index].date }} 预报</h4>
    <p>温度：{{ data.future[index].temperature }}</p>
    <p>天气：{{ data.future[index].weather }}</p>
  </el-card>
  
  <div class="box">
    <span>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
  </div>
</template>

<style scoped>
.class {
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: space-between;
}
div span {
  width: 100px;
  height: 100px;
  background-color: purple;
}
</style>
