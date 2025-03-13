import { SVGProps } from 'react'

interface CloseProps extends SVGProps<SVGSVGElement> {
  color?: 'black' | 'white'
}

export function Close({ color = 'black', ...props }: CloseProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={color}
        d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
      />
    </svg>
  )
}
