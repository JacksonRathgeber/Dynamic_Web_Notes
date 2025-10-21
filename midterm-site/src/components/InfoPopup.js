import {useEffect} from 'react'
import ReactDOM from 'react-dom'
import cx from 'classnames'

const Popup = (props) => {
  const {title, children, onClose} = props

  // Prevent scrolling when popup is active
  useEffect(() => {
    document.body.classList.add('overflow-hidden')

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [])

  return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className='fixed inset-0 bg-gray-600 opacity-50' />
      <div className={('fixed inset-20 p-10 bg-[--aic-white] rounded-md border-2 border-[--aic-red]')}>
          {children}
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Popup
