import React from "react";
import { Accordion, Button, Header } from "../..";
import { ButtonType } from "../../../enum";

export const ProductContent: React.FC<IProductContent> = (props) => {
  const { title, content, data } = props;
  return (
    <section className='sm:bg-primary grid sm:grid-cols-2 grid-cols-1 gap-7 rounded-2xl cursor-pointer '>
      <div className='py-14 px-12 flex flex-col bg-primary sm:bg-transparent rounded-2xl'>
        <Header variant='lg'>{title}</Header>
        <p className='py-4'>{content}</p>
        <div className='w-72 pt-6'>
          <Button
            label='Discover Product'
            // onClick={handleButtonClick}
            buttonType={ButtonType.SECONDARY}
          />
        </div>
      </div>
      <div className='p-4 flex flex-col gap-2'>
        {data?.map((product) => (
          <div>
            <Accordion
              buttonTitle={product.title}
              imageUrl={product.imageUrl}
              className='bg-primary pb-96'
            >
              {product.content}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
};
