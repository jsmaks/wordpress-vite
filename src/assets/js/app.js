// import '../scss/main.scss';
// const modules = import.meta.glob('./*.js', { eager: true });

// // Логика для каждого модуля (если необходимо)
// Object.values(modules).forEach(module => {
//   if (typeof module.default === 'function') {
//     module.default();
//   }
// });

import '../scss/main.scss';

const modules = import.meta.glob(['@/assets/js/*.js', '@/assets/js/*.ts']);

Object.values(modules).map(module => module());
