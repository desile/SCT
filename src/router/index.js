import Vue from 'vue'
import Router from 'vue-router'
import AddAnswerPage from '../pages/AddAnswerPage'
import HomePage from '../pages/HomePage'
import AddQuestion from '../pages/AddQuestion'
import CheckAnswer from '../pages/CheckAnswer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add_answer',
      name: 'addAnswerPage',
      component: AddAnswerPage
    },
    {
      path: '/add_question',
      name: 'addQuestion',
      component: AddQuestion
    },
    {
      path: '/check_answer',
      name: 'checkAnswer',
      component: CheckAnswer
    },
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    }
  ]
})