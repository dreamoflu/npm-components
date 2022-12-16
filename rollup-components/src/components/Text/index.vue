<template>
  <div :class="b()" ref="main" >
    1111111333434343888888

  </div>
</template>

<script>
// import create from "../../utils/create.js";
import create from "/@/utils/create.js";
export default create({
  name: "HaloText",
  props: {
    LdataConfig: Object,
  },
  data() {
    return {
      check: "",
      date: new Date(),
      newLeft: 0,
    };
  },
});
</script>

