import { ReactNode, useRef, useState } from 'react'
import Confetti from 'react-dom-confetti'

interface CodeBlockProps {
  children: ReactNode
}

export function CodeBlock({ children, ...props }: CodeBlockProps) {
  const [isCopied, setIsCopied] = useState<boolean>(false)
  const preEl = useRef<HTMLInputElement>(null)

  const config = {
    duration: 2000,
    angle: 90,
    spread: 360,
    stagger: 3,
    elementCount: 70,
    startVelocity: 40,
    dragFriction: 0.12,
    perspective: '500px',
  }

  async function copyToClipboard() {
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)

    try {
      const textareaEl = document.createElement('textarea')

      if (preEl && preEl.current) {
        textareaEl.value = preEl.current.innerText
      }

      // remove from the document flow
      textareaEl.style.position = 'absolute'
      textareaEl.style.visibility = 'none'
      document.body.appendChild(textareaEl)

      // copy code
      await navigator.clipboard.writeText(textareaEl.value)

      // cleanup
      document.body.removeChild(textareaEl)
    } catch (error) {
      console.error('💩 Copying failed!', error)
    }
  }

  return (
    <div className="relative mb-8 -mx-4 sm:-mx-8" {...props}>
      <div className="absolute z-10 right-4 -top-9">
        <div className="absolute right-10">
          <Confetti active={isCopied} config={config} />
        </div>
        <button className="select-none bg-[#2c323d]" onClick={copyToClipboard}>
          {isCopied ? '🎉 Copied!' : '📋 Copy'}
        </button>
      </div>

      <pre
        ref={preEl}
        className="relative z-20 p-6 overflow-auto rounded-md shadow-lg bg-[#1f2735] md:text-lg"
      >
        {children}
      </pre>
    </div>
  )
}
