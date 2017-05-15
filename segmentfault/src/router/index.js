import Vue from 'vue'
import Router from 'vue-router'
import Headline from '@/components/Headline'
import Column from '@/components/Column'
import Question from '@/components/Question'
import User from '@/components/User'
import HeadlineContent from '@/components/contentComps/HeadlineContent'
import ColumnContent from '@/components/contentComps/ColumnContent'
import QuestionContent from '@/components/contentComps/QuestionContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Headline'
    },
    {
      path: '/headline',
      redirect: '/headline/all',
      component: Headline,
      children: [
        {
          path: '*',
          component: HeadlineContent
        }
      ]
    },
    {
      path: '/column',
      redirect: '/column/recommend',
      component: Column,
      children: [
        {
          path: '*',
          component: ColumnContent
        }
      ]
    },
    {
      path: '/question',
      redirect: '/question/new',
      component: Question,
      children: [
        {
          path: '*',
          component: QuestionContent
        }
      ]
    }, /*
    {
      path: '/discovery',
      name: 'Discovery',
      component: Discovery
    }, */
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
