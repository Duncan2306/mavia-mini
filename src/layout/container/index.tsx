import clsx from 'clsx'

import styles from './container.module.scss'

type ContainerLayoutProps = {
  children: React.ReactNode
  className?: string
}

const ContainerLayout = ({
  children,
  className
}: ContainerLayoutProps) => {
  return <div className={clsx(styles.container, className)}>{children}</div>
}

export default ContainerLayout