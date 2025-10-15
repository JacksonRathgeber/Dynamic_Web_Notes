import { useEffect } from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
    const {onClose, actionBar, children} = props;

    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return ReactDOM.createPortal(
    <>
      <div onClick={onClose} className="fixed inset-0 bg-black opacity-30"></div>
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg">
            <div className="flex flex-col justify-between h-full">
                {children}
                <div className="flex flex-row justify-end">
                    {actionBar}
                </div>
            </div>
        </div>
    </>,
    document.getElementById('portal')
    );
}

export default Modal;
