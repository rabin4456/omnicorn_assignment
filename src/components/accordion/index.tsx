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
    <div
      className={cn("py-2 sm:bg-transparent bg-white rounded-xl   ", {
        className,
      })}
    >
      <div
        className={cn(
          "flex items-center justify-between  sm:rounded-none sm:border-b  sm:border-dark border-transparent",
          { "rounded-2xl border-primary border-b-8": !openContent },
          { "border-b border-gray": openContent }
        )}
      >
        <button
          className='flex items-center cursor-pointer sm:gap-x-4 gap-x-6  w-full p-6  sm:pb-4 sm:pl-0'
          onClick={handleToogle}
        >
          {imageUrl && <img src={imageUrl} alt='icon' className='' />}
          <p>{buttonTitle}</p>
        </button>

        {openContent ? (
          <ChevronUpIcon
            className='h-7 w-7 cursor-pointer mr-5 sm:m-0'
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
              className='sm:hidden block h-7 w-7 cursor-pointer mr-5'
            />
          </>
        )}
      </div>

      <section
        className={cn(" block my-8 sm:p-0 px-10 animate-slideDownAndFade", {
          "hidden animate-slideUpAndFade": !openContent,
        })}
      >
        {children}
      </section>
    </div>
  );
};
