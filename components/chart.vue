<template  lang="pug">
  v-card(class="elevation-6 white")
    v-layout(align-center justify-center row wrap fill-height)
      v-flex(xs12 md12 pa-0 justify-right)
        v-card-title(primary-title class="layout justify-start")
          GChart(
            type="ColumnChart"
            :data="chartData"
            :options="chartOptions"
            :settings="{ packages: ['corechart'] }"
          )
        div(class="text-xs-left pa-3")
</template>

<script>
import { GChart } from 'vue-google-charts'
export default {
  name: 'Chart',
  data: () => ({
    chartData: [['Day', 'Score', 'Avg Score']],
    chartOptions: {
      title: 'Company Performance',
      vAxis: { title: 'Score' },
      hAxis: { title: 'Dayly performance' },
      seriesType: 'bars',
      series: { 1: { type: 'line' } }
    }
  }),
  mounted() {
    if (this.values != undefined || this.values.length > 0) {
      this.chartData = this.chartData.concat(this.values)
    }
    this.chartOptions.title = this.title
    this.chartOptions.hAxis.title = this.xName
    this.chartOptions.vAxis.title = this.yName
  },
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    values: {
      type: Array,
      required: false
    },
    xName: {
      type: String,
      default: 'xName'
    },
    yName: {
      type: String,
      default: 'yName'
    }
  },
  components: {
    GChart
  }
}
</script>

<style>
</style>
