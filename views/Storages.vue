<template>
    <div id="App">
         <div id="main">
             
         </div>
    </div>
</template>
<script>
export default {
  name: "Total",
  methods: {
    drawChart() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      let option = {
    title: {
        // text: '某站点用户访问来源',
        // subtext: '纯属虚构',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['your space', 'used']
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                {value: 80, name: 'your space'},
                {value: 20, name: 'used'},
                // {value: 234, name: '联盟广告'},
                // {value: 135, name: '视频广告'},
                // {value: 1548, name: '搜索引擎'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>

<style>
  #App{
    width: 1280px;
    margin: 0 auto;
    }
   #main{
    margin: 0 auto;
    background-color: #5c5c5e;
     background-color:rgba(0,0,0,0.4);
    width: 50%;
    height: 300px;
}
@media screen and (max-width:600px){
       #App{
           width: 100%;
       }
       #main{
           width: 100%;
       }
}
</style>