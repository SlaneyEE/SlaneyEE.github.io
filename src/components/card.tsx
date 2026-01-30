import type React from 'react'
import { ButtonLink } from './button-link'

interface ProductCardProps {
  image: string
  title: string
  subtitle: string
  buttonText: string
  href: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  subtitle,
  buttonText,
}) => {
  return (
    <div className="border border-purple-900 rounded-xl overflow-hidden shadow-md bg-black">
      <img src={image} alt={title} className="w-full h-44 object-cover" />
      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="mb-4 text-base">{subtitle}</p>
        <ButtonLink isFullWidth={true} href="#" buttonText={buttonText} />
      </div>
    </div>
  )
}

export default ProductCard
