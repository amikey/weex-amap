// polyfills
import './polyfills';
// 组建导入
import AMap from './components/amap.vue';
import AMapMarker from './components/amap-marker.vue';

require('./modules/amap');

const components = [
  AMap,
  AMapMarker
];
const VueAmap = {};
VueAmap.install = function(Vue) {
  components.map(_component => {
    console.log(Vue);
    Vue.component('weex-' + _component.name, _component);
  });
};
export default VueAmap;
