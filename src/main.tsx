import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { routeTree } from '@/routeTree.gen'

import '@/globals.css'

const router = createRouter({
  routeTree,
  defaultPreload: false,
  // Since we're using React Query, we don't want loader calls to ever be stale.
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
})

const domNode = document.getElementById('root')
if (!domNode) throw new Error('No root element found')

const root = createRoot(domNode)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
