import React from 'react';
import { useTransition, animated } from 'react-spring';

export type ModalProps = {
  children?: React.ReactNode;
  visible: boolean;
  title?: string;
  description?: string;
  hideButtons?: boolean;
  cancellable?: boolean;
  cancelText: string;
  confirmText: string;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const Modal: React.FC<ModalProps> = ({
  children,
  visible,
  title,
  description,
  hideButtons,
  cancellable,
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
}) => {
  const transitions = useTransition(visible, {
    from: {
      // transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    enter: {
      // transform: `translateY(0px) scale(1)`,
      opacity: 1,
    },
    leave: {
      // transform: `translateY(200px) scale(0.8)`,
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 15,
    },
  });

  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          <div className='fixed z-10 inset-0 overflow-y-auto'>
            <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
              <div
                className='fixed inset-0 bg-gray-500 bg-opacity-20 transition-opacity'
                aria-hidden='true'
              />

              <span
                className='hidden sm:inline-block sm:align-middle sm:h-screen'
                aria-hidden='true'>
                &#8203;
              </span>

              <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
                <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      {title && (
                        <h3
                          className='text-lg leading-6 font-medium text-gray-900'
                          id='modal-title'>
                          {title}
                        </h3>
                      )}
                      {description && (
                        <div className='mt-2'>
                          <span className='text-sm text-gray-500 whitespace-pre-line'>
                            {description}
                          </span>
                        </div>
                      )}
                      {children}
                    </div>
                  </div>
                </div>
                {!hideButtons && (
                  <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:justify-end'>
                    <button
                      type='button'
                      className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm'
                      onClick={onConfirm}>
                      {confirmText}
                    </button>
                    {cancellable && (
                      <button
                        type='button'
                        className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                        onClick={onCancel}>
                        {cancelText}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </animated.div>
      ),
  );
};

Modal.defaultProps = {
  confirmText: '확인',
  cancelText: '취소',
};

export default Modal;
