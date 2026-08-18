import type { EditorialImageKey } from '../content/imageAlt.ts'
import { imageAlt } from '../content/imageAlt.ts'
import { useLanguage } from '../hooks/useLanguage.tsx'

interface EditorialImageProps { image: EditorialImageKey; src: string; width: number; height: number; priority?: boolean; className?: string; imageClassName?: string }

export default function EditorialImage({ image, src, width, height, priority = false, className = '', imageClassName = '' }: EditorialImageProps) {
  const { language } = useLanguage()
  return (
    <figure className={`overflow-hidden rounded-[2rem] bg-stone/15 ${className}`}>
      <img src={src} alt={imageAlt[language][image]} width={width} height={height} loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'} decoding="async" className={`h-full w-full object-cover ${imageClassName}`} />
    </figure>
  )
}
