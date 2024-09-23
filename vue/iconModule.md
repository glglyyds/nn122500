**vue3封装阿里图标库选择器**
```js
// main.js引入css
import '@/assets/iconFont/iconfont.css'
```
```vue
// iconModule.vue  封装下拉选择组件
<template>
  <el-select class="admin_tel iconSelect" :placeholder=props.placeholder>
    <template #prefix v-if="props.modelValue !== ''">
     <i class="iconfont myIconStyle" v-html="'&#x' + props.modelValue"></i>
    </template>
    <el-option class="icon-picker-option" :value="props.modelValue" style="display:flex;">
      <ul v-for="icon in iconJsonList" :key="icon.icon_id" @click="props.iconClick(icon.unicode)" style="list-style: none;">
        <li> <i class="iconfont myIconStyle" v-html="'&#x' + icon.unicode"></i></li>
      </ul>
    </el-option>
  </el-select>
</template>
<script setup>
import iconJson from "@/assets/iconFont/iconfont.json";
const iconJsonList = ref(iconJson.glyphs)
import {ref,onMounted} from 'vue'
const props = defineProps({
  modelValue:String,
  placeholder:String,
  iconClick:{
    type: Function,
    default: function (icon) {},
  },
})
</script>
```
```vue
// iconFont.vue  使用
<template>
     <iconSelect
    :modelValue="iconModelValue"
    :placeholder="iconPlaceholder"
    :iconClick="iconClick"/>
</template>
<script setup>
import {ref} from 'vue'
import iconSelect from './iconModule.vue'
const iconModelValue = ref('')
const iconPlaceholder = ref('请选择图标')
const iconClick = (icon) => {
    iconPlaceholder.value = ''
    iconModelValue.value = icon
}
</script>
```