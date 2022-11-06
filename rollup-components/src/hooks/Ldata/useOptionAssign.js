import { cloneDeep } from 'lodash-es';
export default function optionAssign(dataOption, configObj) {
  const configOption = cloneDeep(configObj.option.option || {});
  const handlerFunc = (option, defaultOption) => {
    for (let key in defaultOption) {
      if (option[key] === undefined || typeof defaultOption[key] !== typeof option[key]) {
        option[key] = defaultOption[key];
      } else if (Object.prototype.toString.call(defaultOption[key]) === '[object Object]') {
        handlerFunc(option[key], defaultOption[key]);
      }
    }
  };
  handlerFunc(dataOption, configOption);
}
