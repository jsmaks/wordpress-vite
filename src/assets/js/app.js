
import '../scss/main.scss';

const modules = import.meta.glob(['@/assets/js/*.js', '@/assets/js/*.ts']);

// Object.values(modules).map(async module => await module());
Object.values(modules).map(module => module());

import './footer-year';

