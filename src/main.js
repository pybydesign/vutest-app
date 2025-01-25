import { createApp } from 'vue';   // Здесь импортируем createApp из 'vue'
import App from './Appp.vue';
import router from './router';      // Импортируем настройки маршрутов

createApp(App)      // Создаем Vue приложение
  .use(router)       // Подключаем маршруты
  .mount('#application');     // Монтируем приложение на элемент с id="application"
