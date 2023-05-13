import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'


if (process.browser) {
  Vue.use(require('bootstrap'))
}