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
    ...rest
  } = props;

  const [showContent, setShowContent] = useState(false);

  const handleToogle = () => {
    setShowContent(!showContent);
  };

  return (
    <div
      className={cn("pt-2 bg-transparent  rounded-xl   ", {
        className,
        "bg-white rounded-b-[40px]": variant === AccordionType.SECONDARY,
      })}
      {...rest}
    >
      <div
        className={cn(
          "flex items-center justify-between   sm:rounded-none border-b  border-dark ",
          {
            "rounded-2xl border-primary border-b-8 bg-white p-6":
              variant === AccordionType.SECONDARY,
          },
          {
            "border-b border-transparent rounded-t-2xl":
              showContent && variant === AccordionType.SECONDARY,
          }
        )}
      >
        <button
          className={cn(
            "flex items-center cursor-pointer sm:gap-x-4 gap-x-6  w-full  ",
            {
              "pb-4": variant === AccordionType.PRIMARY,
            }
          )}
          onClick={handleToogle}
        >
          {imageUrl && <img src={imageUrl} alt='icon' className='' />}
          <p
            className={cn("", {
              "font-semibold text-lg pl-4": variant === AccordionType.SECONDARY,
            })}
          >
            {buttonTitle}
          </p>
        </button>

        {showContent ? (
          <ChevronUpIcon
            className='h-7 w-7 cursor-pointer mr-5 sm:m-0 mb-4'
            onClick={handleToogle}
          />
        ) : (
          <>
            <ChevronDownIcon
              onClick={handleToogle}
              className='sm:block hidden h-7 w-7 cursor-pointer mb-4'
            />
            <PlusIcon
              onClick={handleToogle}
              className='sm:hidden block h-7 w-7 cursor-pointer mr-5 mb-4'
            />
          </>
        )}
      </div>

      <section
        className={cn(
          " block sm:my-8 my-5 text-justify  animate-slideDownAndFade",
          {
            "hidden animate-slideUpAndFade": !showContent,
          }
        )}
      >
        {children}
      </section>
    </div>
  );
};
