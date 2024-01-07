import React, { useState } from "react";
import { cn } from "../../utils";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import { AccordionType } from "../../enum";

export const Accordion: React.FC<IAccordion> = (props) => {
  const {
    buttonTitle,
    children,
    imageUrl,
    className,
    variant = AccordionType.PRIMARY,
  } = props;

  const [openContent, setOpenContent] = useState(false);

  const handleToogle = () => {
    setOpenContent(!openContent);
  };

  return (
    <div
      className={cn("pt-2 bg-transparent  rounded-xl   ", {
        className,
      })}
    >
      <div
        className={cn(
          "flex items-center justify-between   sm:rounded-none border-b  border-dark ",
          {
            "rounded-2xl border-primary border-b-8 bg-white p-6":
              variant === AccordionType.SECONDARY,
          },
          {
            "border-b border-gray":
              openContent && variant === AccordionType.SECONDARY,
          }
        )}
      >
        <button
          className={cn('flex items-center cursor-pointer sm:gap-x-4 gap-x-6  w-full  ',{
            "pb-4":
             variant === AccordionType.PRIMARY,
          })}
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
        className={cn(
          " block my-8 sm:p-0 px-2 text-justify  animate-slideDownAndFade",
          {
            "hidden animate-slideUpAndFade": !openContent,
          }
        )}
      >
        {children}
      </section>
    </div>
  );
};
