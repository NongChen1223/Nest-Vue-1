import { createApp } from "vue";
import ElementPlus from "element-plus";
import router from "./router";
import "element-plus/dist/index.css";
import "./style.css";
import App from "./App.vue";

const app = createApp(App);
app.use(ElementPlus, { size: "small", zIndex: 3000 });
app.use(router);
app.mount("#app");
