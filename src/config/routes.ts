import * as pages from '../pages'

export default [
  {
    path: '/',
    component: pages.Landing,
    exact: true
  },
  {
    path: '/pullrequests',
    component: pages.PullRequests,
    exact: true
  },
  {
    path: '/pipelines',
    components: pages.Pipelines,
    exact: true
  }
]
