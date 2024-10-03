<template>
<div id="out">
  <div id="left">
    <input type="text" id="city" placeholder="请输入地级市" v-model="city">
  </div>
    
  <div id="right">
      <span id="huoqu"> 
        <i class="iconfont icon-huoqushuju"></i>
      </span>
      <button id="gt" @click="getWeatherData">获取天气</button>
  </div>

</div>

      
  
  <Weather :data="weatherData" v-if="weatherData"/>
  <WeatherForecast/>
</template>

<script setup>
import Weather from './components/Weather.vue'
import WeatherForecast from './components/WeatherForecast.vue'
import {getweatherAPI} from './apis/getWeather'
import {onMounted, ref} from 'vue'

//用户输入的城市名称
const city = ref('')

//获取天气数据
const weatherData = ref({})

// 获取天气数据的函数
const getWeatherData = async () => {
  
  try {
    const res = await getweatherAPI(city.value)
    weatherData.value = res.result
    // console.log(weatherData.value)
  } catch (error) {
    console.error('获取天气信息失败', error)
  }
}
onMounted(()=>getWeatherData())



</script>

<style scoped>
#out {
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* 输入框 */
#left {
    margin-right: 10px; /* 给按钮留出空间 */
}

#city {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 200px;
}

/* 获取数据图标和按钮 */
#right {
    display: flex;
    align-items: center;
}

#huoqu {
    margin-right: 10px;
    cursor: pointer;
    color: #555;
}

#huoqu:hover {
    color: #000; /* 悬停效果 */
}

#gt {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
}

#gt:hover {
    background-color: #0056b3; /* 悬停效果 */
}

/* 图标样式 */
.iconfont {
    font-size: 24px;
}

</style>
 