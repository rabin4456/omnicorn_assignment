import React from "react";
import clsx from "clsx";
import { Header, Typography } from "..";

export const Modal: React.FC<IModal> = (props) => {
  const { title, show = false, className = "", onModalClose, children } = props;
  return (
    <>
      {show && (
        <div className='fixed inset-0 z-50 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen'>
            <div
              className={clsx(
                "fixed inset-0 bg-dark bg-opacity-80 backdrop-blur-none h-screen w-full bg-gary transition-opacity",
                className
              )}
              onClick={onModalClose}
            />
            <div className='inline-block cursor-pointer w-full max-w-3xl p-6 m-4 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg'>
              {title && (
                <div className='border-b border-gray bg-white'>
                  <Header variant='sm'>{title}</Header>
                </div>
              )}
              <div className='py-5'>
                <Typography variant='sm'>{children}</Typography>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
