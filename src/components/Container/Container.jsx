import styles from './Container.module.scss';

export const Container = ({children}) => {
  const {container} = styles;

  return (
    <div className={container}>
      {children}
    </div>
  )
}