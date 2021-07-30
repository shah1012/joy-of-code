import { FormEvent, useRef, useState } from 'react'
import Confetti from 'react-dom-confetti'

import { CustomLink } from '@/root/components/shared/CustomLink'

export function Newsletter({ ...props }) {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const inputEl = useRef<HTMLInputElement>(null)

  async function subscribe(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()

    const response = await fetch('/api/newsletter', {
      body: JSON.stringify({
        email: inputEl?.current?.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    const { error } = await response.json()

    if (error) {
      setIsError(true)
      return
    }

    if (inputEl.current) {
      inputEl.current.value = ''
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 4000)
    }
  }

  return (
    <div className="p-8 border-4 rounded-md border-highlight" {...props}>
      <div>
        <span className="text-2xl font-bold text-white md:text-4xl">
          {'📬'} Subscribe for Updates
        </span>
        <p className="my-4 text-muted">
          I don't want your data, so there's also a
          <CustomLink href="/feed/rss.xml">
            {' '}
            <span className="underline text-highlight">RSS feed.</span>
          </CustomLink>
        </p>
      </div>

      <form className="mt-8" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          className="p-4 text-white rounded-tl rounded-bl bg-secondary"
          id="newsletter-email"
          name="newsletter-email"
          placeholder="unix@chad.com"
          required
          type="email"
        />
        <button
          className="p-4 font-bold border-0 rounded-tr rounded-br bg-highlight"
          type="submit"
        >
          {!isError && !isSubscribed && 'Subscribe'}
          {isError && '💩 Try again'}
          {isSubscribed && 'Subscribed! 🎉'}
          <Confetti active={isSubscribed} />
        </button>
      </form>
    </div>
  )
}
