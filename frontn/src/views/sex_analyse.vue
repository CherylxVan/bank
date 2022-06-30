<template>
  <v-chart class="chart" :option="option"> 
  </v-chart>
</template>

<script>
export default {
  name: "sex_analyse",
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      },
    };
  },
};
</script>

<style lang="css" scoped>
.charts{
    height: 400px;
}
</style>
