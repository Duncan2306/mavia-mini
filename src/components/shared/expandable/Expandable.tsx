import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

import style from './Expandable.module.scss'

export type ExpandableProps = React.PropsWithChildren<{
  open: boolean
  wrapped?: string
}>

export const Expandable = ({ children, open, wrapped }: ExpandableProps) => {
  const container = useRef(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(open ? 'auto' : 0)

  useEffect(() => {
    if (container.current && contentRef.current) {
      if (open) {
        setHeight(contentRef.current.offsetHeight)
      } else {
        setHeight(0)
      }
    }
  }, [open])

  return (
    <div
      className={clsx(style.container, wrapped)}
      ref={container}
      style={{ height }}
    >
      <div ref={contentRef}>{children}</div>
    </div>
  )
}
