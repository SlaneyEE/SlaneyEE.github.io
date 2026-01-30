import { ButtonLink } from './button-link'

export interface ListItemProps {
  title: string
  subtitle: string
  buttonText: string
  url: string
}

export function ListItem(props: ListItemProps) {
  const { title, subtitle, buttonText } = props
  return (
    <div className="border border-purple-900 rounded-xl overflow-hidden shadow-md bg-black p-5">
      <div className="grid grid-cols-1 md:grid-cols-3 md:items-center">
        <div>{title}</div>
        <div>{subtitle}</div>
        <div className='h-12 pt-5 md:h-auto md:pt-0'>
          <ButtonLink
            isFullWidth={false}
            href={props.url}
            buttonText={buttonText}
          />
        </div>
      </div>
    </div>
  )
}
