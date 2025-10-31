import cx from 'classnames'
import PropTypes from 'prop-types'
import {twMerge} from 'tailwind-merge'

const Button = (props) => {
  const {
    children,
    red,
    white,
    outline,
    ...otherProps
  } = props;

  // first establish shared properties, then specifics for each type
  const baseClass = 'relative flex items-center px-8 py-3 m-2 text-xl border rounded-md hover:opacity-80 active:opacity-70 active:translate-y-1 transition-all duration-60'
  const classes = twMerge(
    cx(otherProps.className, baseClass, {
      // color variants, pick one
      'bg-[--aic-red] border-[--aic-red] text-[--aic-white]': red,
      'bg-[--aic-white] border-[--aic-gray] text-[--aic-white]': white,

      'bg-white': outline,
      'border-[--aic-red] text-[--aic-red]': outline && red,
      'border-[--aic-gray] text-[--aic-black]': outline && white,
    })
  )
  
  return (
    <button {...otherProps} className={classes}>
      {children}
    </button>
  )
}

export default Button;