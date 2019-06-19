/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const orderRouter = {
  path: '/order',
  component: Layout,
  redirect: '/order/order-table',
  name: 'order',
  meta: {
    title: '订单',
    icon: 'table'
  },
  children: [
    {
      path: 'order-table',
      component: () => import('@/views/order/orderTable'),
      name: 'OrderTable',
      meta: { title: '纪念墙' }
    },
    {
      path: 'order-index',
      component: () => import('@/views/order/orderTable'),
      name: 'OrderIndex',
      meta: { title: 'order-index' }
    }
  ]
}
export default orderRouter
