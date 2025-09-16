import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.main}>
      <h1>Recipe Center</h1>
      <h3>See Recipes</h3>
      <h3>Login</h3>
    </div>
  )
}

export default Header