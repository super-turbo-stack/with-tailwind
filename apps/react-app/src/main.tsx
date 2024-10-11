import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import '@repo/ui/styles.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RecoilRoot } from 'recoil'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@repo/ui'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])
const queryClient = new QueryClient()
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
            <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
                <RouterProvider router={router} />
            </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </StrictMode>,
)
