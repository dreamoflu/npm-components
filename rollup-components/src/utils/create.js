// import common from './common';
import bem from './bem';

export default (sfc) => {
  // sfc.name = 'avue-echart-' + sfc.name;
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(bem);
  // sfc.mixins.push(common);
  return sfc;
};
