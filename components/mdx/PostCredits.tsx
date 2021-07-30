import { useRouter } from 'next/router'

import { CustomLink } from '@/root/components/shared/CustomLink'

export function PostCredits() {
  const router = useRouter()
  const href = `https://github.com/mattcroat/joy-of-code/blob/main/posts/${router?.query?.slug}.mdx`

  return (
    <div className="gap-4 pb-12 md:flex">
      <div className="flex-1 px-6 py-4 mb-4 bg-green-900 rounded-md md:mb-0">
        <span className="block text-2xl text-center text-green-200">
          {'❤️ Contribute'}
        </span>

        <p className="my-4 text-green-200">
          Found a mistake? Contribute on GitHub by{' 📝 '}
          <CustomLink href={href}>
            <span className="underline text-highlight">editing</span> it.
          </CustomLink>
        </p>

        <p className="my-4 text-green-200">{'Thank you! 🥰'}</p>
      </div>

      <div className="flex-1 px-6 py-4 mb-4 bg-gray-900 rounded-md md:mb-0">
        <span className="block text-2xl text-center text-muted">
          {'☕ About Myself'}
        </span>

        <p className="my-4">
          I'm{' '}
          <CustomLink href="https://github.com/mattcroat">
            <span className="underline text-highlight">Matija</span>
          </CustomLink>{' '}
          from {'🇭🇷'} Croatia and I'm infinitely curious at how things work but
          mostly passionate about {'☕'} JavaScript and {'🎨'} UI/UX.
        </p>
      </div>
    </div>
  )
}
