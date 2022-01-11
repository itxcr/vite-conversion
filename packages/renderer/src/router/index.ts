import {createRouter, createWebHistory} from 'vue-router';
import ElectronVersions from '/@/components/ElectronVersions.vue';

const Router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    name: 'home',
    component: ElectronVersions,
  }],
});

export default Router;
