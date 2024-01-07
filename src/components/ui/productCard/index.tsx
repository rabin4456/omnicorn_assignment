import React from "react";
import { Button, Header, Typography } from "../..";
import { ArrowDownIcon } from "@heroicons/react/20/solid";

export const ProductCard: React.FC<IProductCard> = (props) => {
  const { title, content, handleCardClick, imageUrl ,btnClassName} = props;
  return (
    <section className='bg-white border-[3px] flex flex-col justify-between gap-y-7  border-gray rounded-2xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-[1.006]  duration-300'>
      <div className='px-4 pt-4'>
        <div className='flex justify-between items-start '>
          <Header variant='sm' className='mr-5 h-20'>
            {title}
          </Header>
          <img src={imageUrl} alt='cartIcon' />
        </div>
        <Typography className='py-4' variant='sm'>
          {content}
        </Typography>
      </div>
      <div className='w-44 '>
        <Button
          label='Discover'
          onClick={handleCardClick}
          className={btnClassName}
          iconRight={<ArrowDownIcon />}
        />
      </div>
    </section>
  );
};
