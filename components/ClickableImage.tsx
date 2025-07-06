import React, { useState } from 'react'
import styles from './ClickableImage.module.scss'

interface ClickableImageProps {
  src: string
  alt: string
  caption?: string
  width?: string | number
  height?: string | number
  className?: string
  style?: React.CSSProperties
  borderColor?: 'green' | 'blue' | 'purple' | 'red' | 'gray' | string
  hoverScale?: number
  fadeIn?: boolean
}

export const ClickableImage: React.FC<ClickableImageProps> = ({
  src,
  alt,
  caption,
  width,
  height,
  className = '',
  style = {},
  borderColor = 'green',
  hoverScale = 1.02,
  fadeIn = false
}) => {
  const [isHovered, setIsHovered] = useState(false)

  // Get the appropriate border class
  const getBorderClass = (color: string) => {
    const colorMap: { [key: string]: string } = {
      green: styles.borderGreen,
      blue: styles.borderBlue,
      purple: styles.borderPurple,
      red: styles.borderRed,
      gray: styles.borderGray
    }
    return colorMap[color] || styles.borderGreen
  }

  // Combine classes
  const imageClasses = [
    styles.image,
    styles.default,
    getBorderClass(borderColor),
    isHovered ? styles.hovered : '',
    fadeIn ? styles.fadeIn : '',
    className
  ].filter(Boolean).join(' ')

  // Custom styles for dynamic properties
  const customStyle: React.CSSProperties = {
    transform: isHovered ? `scale(${hoverScale})` : 'scale(1)',
    ...(width && { width }),
    ...(height ? { height } : { height: 'auto' }),
    // Custom border color if not in predefined list
    ...(borderColor && !['green', 'blue', 'purple', 'red', 'gray'].includes(borderColor) && {
      border: `2px solid ${borderColor}`
    }),
    ...style
  }

  return (
    <div className={styles.container}>
      <a href={src} target="_blank" rel="noopener noreferrer" className={styles.imageLink}>
        <img
          src={src}
          alt={alt}
          className={imageClasses}
          style={customStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </a>
      {caption && (
        <p className={styles.caption}>
          {caption}
        </p>
      )}
    </div>
  )
}

export default ClickableImage
