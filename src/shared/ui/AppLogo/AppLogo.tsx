import { memo } from 'react'
import AppSvg from 'shared/assets/icons/logo.svg'

interface AppLogoProps {
  className?: string
  width?: number
  height?: number
  alt?: string
}

export const AppLogo = memo(({ className, width, height, alt }: AppLogoProps) => {
  return <AppSvg width={width} height={height} className={className} />
})
