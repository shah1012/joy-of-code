import { useEffect, useRef, useState } from 'react'

import type { ReactNode } from 'react'

interface PopoverProps {
  children: ReactNode
  isOpen: boolean
}

export function Popover({ children, isOpen = false }: PopoverProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(isOpen)
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function listener(event: Event) {
      const targetEl = event.target as HTMLElement

      // do nothing if clicking ref's element or descendant elements
      if (!popoverRef.current || popoverRef.current.contains(targetEl)) {
        return
      }

      setIsPopoverOpen(false)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return function cleanup() {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [popoverRef, setIsPopoverOpen])

  return (
    <>
      {isPopoverOpen && (
        <div
          ref={popoverRef}
          className="text-left max-w-[400px] absolute right-6 top-6 w-max"
        >
          <div className="relative p-4 m-10 border-t-4 border-highlight rounded-md shadow-lg after:absolute after:-top-4 after:right-[44px] after:border-t-0 after:border-r-[16px] after:border-r-transparent after:border-l-[16px] after:border-l-transparent after:border-b-[16px] after:border-highlight bg-secondary">
            {children}
            <p className="mt-4 text-muted">
              {`Tap anywhere on the page to close the pop-up. 👆`}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
