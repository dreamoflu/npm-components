

// import 'echarts/extension/bmap/bmap';
// import * as echarts from 'echarts';
// import './theme';
// import {
//   dynamicApi
// } from '/@/api/Ldata/resource';
// import {
//   cloneDeep
// } from 'lodash-es';
// import {
//   markRaw
// } from 'vue';
import {
  randomId,
  deepClone,
  dataURLtoFile,
  findObject,
  validData,
  findArray,
  setPx,
  sortArrys,
  isJson,
  downFile,
  loadScript,
} from '/@//utils/util';
import { validatenull } from '/@/utils/validate.js';

export default (() => {
  return {
    props: {
      stylesFormatter: Function,
      dataFormatter: Function,
      titleFormatter: Function,
      labelFormatter: Function,
      clickFormatter: Function,
      sqlFormatter: Function,
      formatter: Function,
      echartFormatter: Function,
      dataQuery: Function,
      dataHeader: Function,
      dataFilter: {
        type: Object,
        default: () => {
          return {
            enabled: false,
            filterList: [],
          };
        },
      },
      autoUpdate: {
        type: Boolean,
        default: () => false,
      },
      updateTime: {
        type: Number,
        default: 10,
      },
      index: {
        type: String,
      },
      // child: Object,
      width: {
        type: [Number, String],
        default: 600,
      },
      height: {
        type: [Number, String],
        default: 600,
      },
      theme: {
        type: String,
      },
      child: {
        type: Object,
        default: () => {
          return {};
        },
      },
      sql: {
        type: String,
      },
      time: {
        type: Number,
        default: 0,
      },
      url: {
        type: String,
      },
      disabled: {
        type: Boolean,
        default: true,
      },
      dataType: {
        type: Number,
        default: 0,
      },
      dataMethod: {
        type: String,
        default: 'get',
      },
      id: {
        type: String,
        // default: 'main_' + uuid(),
      },
      data: {
        type: [Object, String, Array],
      },
      component: {
        type: Object,
        default: () => {
          return {};
        },
      },
      option: {
        type: Object,
        default: () => {
          return {};
        },
      },
      left: {
        type: Number,
      },
      top: {
        type: Number,
      },
      label: {
        type: String,
      },
      display: {
        type: Boolean,
      },
      noRander: {
        type: Boolean,
      },
    },
    data() {
      this.initLoad = true;
      return {
        dynamicQuery: {},
        propQuery: {},
        headerHeight: '',
        checkChart: '',
        myChart: '',
        dataChart: [],
        dataAxios: {},
        dataUrl: '',
        key: false,
        isChart: false,
        styles: {},
        appendCheck: {},
        appendObj: {},
        appendList: [],
        timeOutTimer: null,
        randomId,
        deepClone,
        dataURLtoFile,
        findObject,
        validData,
        findArray,
        setPx,
        sortArrys,
        isJson,
        downFile,
        loadScript,
        validatenull
      };
    },
    computed: {
      // 生成一个重新的对象，组合需要监听变化的配置项
      // componentOption() {
      //   let option = cloneDeep(this.option);
      //   let component = cloneDeep(this.component);
      //   const {
      //     left,
      //     top,
      //     display
      //   } = this;
      //   return {
      //     option,
      //     display
      //   };
      // },
      // // ...mapStores(useEventStore, useComStore),
      // isBackChange() {
      //   return this.comStore.isBackChange;
      // },
      // callbackParams() {
      //   return this.eventStore.callbackParams;
      // },
      // getData() {
      //   return JSON.parse(JSON.stringify(this.data ? this.data : []));
      // },
      // count() {
      //   return this.option.count;
      // },
      // dataAppend() {
      //   return this.option.dataAppend;
      // },
      // dataChartLen() {
      //   return (this.dataChart || []).length;
      // },
      // switchTheme() {
      //   return this.validData(this.option.switchTheme, false);
      // },
      // name() {
      //   const result = this.$el.className.replace(config.name, '');
      //   return result;
      // },
      // minWidth() {
      //   const val = this.option.minWidth;
      //   if (val > this.width) return val;
      // },
      // isApi() {
      //   return this.dataType === 1;
      // },
      // isSql() {
      //   return this.dataType === 2;
      // },
      // style() {
      //   return this.component.style || {};
      // },
      // styleChartName() {
      //   const obj = {
      //     width: setPx(this.minWidth || this.width),
      //     height: setPx(this.height),
      //   };
      //   return obj;
      // },
      // styleSizeName() {
      //   return Object.assign({
      //       width: setPx(this.width),
      //       height: setPx(this.height),
      //     },
      //     (() => {
      //       if (this.minWidth) {
      //         return {
      //           overflowX: 'auto',
      //           overflowY: 'hidden',
      //         };
      //       }
      //       return {};
      //     })(),
      //     this.styles,
      //   );
      // },
    },
    mounted() {
      // this.init();
    },
    methods: {

      // init() {
      //   const main = this.$refs[this.id];
      //   if (main) {
      //     // 判断是否图表去初始化
      //     this.isChart = config.echart.includes(this.name);
      //     if (this.isChart) this.myChart = markRaw(echarts.init(main, this.theme));
      //   }
      // },

    },
    beforeUnmount() {},
  };
})();