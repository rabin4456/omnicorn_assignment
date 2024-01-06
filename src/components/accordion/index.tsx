import React, { useState } from "react";
import { cn } from "../../utils";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";

export const Accordion: React.FC<IAccordion> = (props) => {
  const { buttonTitle, children, imageUrl, className } = props;

  const [openContent, setOpenContent] = useState(false);

  const handleToogle = () => {
    setOpenContent(!openContent);
  };

  return (
    <div className={cn("py-7 bg-white rounded-xl   ", { className })}>
      <div className='flex items-center justify-between sm:border-b border-dark '>
        <button
          className='flex items-center cursor-pointer sm:gap-x-4 gap-x-6  w-full p-6  sm:pb-4 sm:pl-0'
          onClick={handleToogle}
        >
          {imageUrl && <img src={imageUrl} alt='icon' className='' />}
          <p>{buttonTitle}</p>
        </button>

        {openContent ? (
          <ChevronUpIcon
            className='h-7 w-7 cursor-pointer'
            onClick={handleToogle}
          />
        ) : (
          <>
            <ChevronDownIcon
              onClick={handleToogle}
              className='sm:block hidden h-7 w-7 cursor-pointer'
            />
            <PlusIcon
              onClick={handleToogle}
              className='sm:hidden block h-7 w-7 cursor-pointer'
            />
          </>
        )}
      </div>

      <section
        className={cn(" block my-10 animate-slideDownAndFade", {
          "hidden animate-slideUpAndFade": !openContent,
        })}
      >
        {children}
      </section>
    </div>
  );
};
