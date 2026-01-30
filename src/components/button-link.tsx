import classNames from 'classnames'

export interface ButtonLinkProps {
  buttonText: string
  isFullWidth: boolean
  href: string
}

export function ButtonLink({ buttonText, isFullWidth, href }: ButtonLinkProps) {
  return (
    <a
      href={href}
      className={classNames(
        'px-5 py-2.5 bg-purple-800 text-white rounded-md cursor-pointer font-semibold text-base hover:bg-yellow-500 transition-colors uppercase',
        {
          'block w-full': isFullWidth,
        },
      )}
    >
      {buttonText}
    </a>
  )
}
