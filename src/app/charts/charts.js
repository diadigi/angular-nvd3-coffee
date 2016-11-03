class ChartsController {
  /** @ngInject */
  constructor(statService, chartType = 'multiBar', dimension = 450, showControls = true, showValues = true, animationDuration = 500) {
    /** configuration */

    /** default d3 options */
    this.defaultConf = {
      margin: {
        left: 100
      },
      x: d => d.label,
      y: d => d.value,
      xAxis: {
        showMaxMin: false
      },
      yAxis: {
        axisLabel: '60kg bags (000s)'
      }
    };

    /** chart type specific d3 options */
    this.miscConf = {
      multiBar: {
        type: 'multiBarChart'
      },
      discreteBar: {
        type: 'discreteBarChart'
      },
      multiBarHorizontal: {
        type: 'multiBarHorizontalChart'
      }
    };

    /** user-configurable chart options */
    this.chartType = this.miscConf.hasOwnProperty(chartType) ? chartType : 'multiBar'; /** can be: multiBar, discreteBar, multiBarHorizontal */
    this.dimension = dimension; /** width & height of chart in pixels */
    this.showControls = showControls; /** boolean */
    this.showValues = showValues; /** boolean */
    this.animationDuration = animationDuration; /** ms */

    this.statService = statService;
    this.error = false;
    this.charts = [];
    this.options = {};

    this.setChartOptions();
    this.getChartData();
  }

  getChartData() {
    this.statService.getAll()
    .then(response => {
      this.charts = response.data;
    })
    .catch(() => {
      this.error = true;
    });
  }

  setChartOptions() {
    const dimensions = {
      height: this.dimension,
      width: this.dimension
    };

    const showControlsValues = {
      showControls: this.showControls,
      showValues: this.showValues
    };

    const animation = {
      duration: this.animationDuration
    };

    this.options = {
      chart: Object.assign(this.defaultConf, this.miscConf[this.chartType], dimensions, showControlsValues, animation)
    };
  }
}

export const charts = {
  template: require('./charts.html'),
  controller: ChartsController
};
