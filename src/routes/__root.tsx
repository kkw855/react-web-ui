import { createRootRouteWithContext, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import { NotFound } from '@/routes/-not-found'

export const Route = createRootRouteWithContext()({
  component: Root,
  notFoundComponent: NotFound,
})

function Root() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  )
}
