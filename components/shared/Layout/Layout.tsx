import { ReactNode } from 'react'

import { Seo } from '@/root/components/shared/Layout/Seo'

interface LayoutProps {
  [key: string]: any
  children: ReactNode
}

export function Layout({ children, ...metadata }: LayoutProps) {
  return (
    <div className="px-4 mx-auto sm:px-0">
      <Seo {...metadata} />
      <div className="ml-20">
        <main className="ml-20">{children}</main>
      </div>
    </div>
  )
}
