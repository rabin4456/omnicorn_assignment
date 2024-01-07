import React from "react";
import { Button, Header, Typography } from "../..";

export const ProductCard: React.FC<IProductCard> = (props) => {
  const { title, content, handleButtonClick, imageUrl } = props;
  return (
    <section className='bg-white border-[3px] flex flex-col gap-y-7  border-gray rounded-2xl cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-[1.006] hover:bg-neutral-50 duration-300'>
      <div className='px-4 pt-4'>
        <div className='flex justify-between'>
          <Header variant='sm'>{title}</Header>
          <img src={imageUrl} alt='cartIcon' />
        </div>
        <Typography className='py-4' variant='sm'>
          {content}
        </Typography>
      </div>
      <div className='w-44'>
        <Button label='Discover' onClick={handleButtonClick} />
      </div>
    </section>
  );
};
