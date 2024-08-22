import '../scss/main.scss';

const modules = import.meta.glob(['@/assets/js/*.js', '@/assets/js/*.ts']);

// Импорт всех модулей
Object.values(modules).forEach(async (module) => {
  await module();
});



