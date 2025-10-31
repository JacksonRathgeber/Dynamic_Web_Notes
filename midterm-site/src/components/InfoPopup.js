import {useEffect, useState} from 'react'
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

  // control mount animation visibility
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30)
    return () => clearTimeout(t)
  }, [])

  // requestClose triggers the exit animation and then calls the parent's onClose
  const requestClose = () => {
    // start exit animation
    setVisible(false)
    // match duration-700 used in classes (700ms)
    const t = setTimeout(() => {
      if (typeof onClose === 'function') onClose()
    }, 700)
    return () => clearTimeout(t)
  }

  return ReactDOM.createPortal(
    <>
    <div onClick={requestClose} className={`fixed inset-0 bg-gray-600 transition-opacity duration-700 ${visible ? 'opacity-50' : 'opacity-0'}`} />
    <div onClick={(e) => e.stopPropagation()} className={`fixed inset-20 p-10 bg-[--aic-white] rounded-md border-2 border-[--aic-red] transform-gpu transition-opacity transition-transform duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          {children}
      </div>
    </>,
    document.getElementById('portal')
  );
}

export default Popup
