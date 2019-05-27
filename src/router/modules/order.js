/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const orderRouter = {
  path: '/order',
  component: Layout,
  redirect: '/order/order-table',
  name: 'order',
  meta: {
    title: 'Table',
    icon: 'table'
  },
  children: [
    {
      path: 'order-table',
      component: () => import('@/views/order/orderTable'),
      name: 'OrderTable',
      meta: { title: 'order-table' }
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
