import React, { useState } from "react";
import { Accordion, Button, Header, Modal, Typography } from "../..";
import { ButtonType } from "../../../enum";

export const ProductContent: React.FC<IProductContent> = (props) => {
  const { title, content, data, productModalText, productModalTitle } = props;
  const [openModal, setOpenModal] = useState(false);

  const handleModalOpen = () => {
    setOpenModal(true);
  };
  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <section className='bg-primary grid sm:grid-cols-2 grid-cols-1 gap-7 rounded-[40px]  animate-slideDownAndFade'>
        <div className='sm:py-14 py-7 px-12 flex flex-col justify-center gap-3  sm:bg-transparent rounded-2xl'>
          <Header variant='lg'>{title}</Header>
          <Typography variant='md'>{content}</Typography>
          <div className='w-72 pt-6'>
            <Button
              label='Discover Product'
              onClick={handleModalOpen}
              buttonType={ButtonType.SECONDARY}
            />
          </div>
        </div>
        <div className='px-10 sm:py-10 pb-10 flex flex-col gap-6'>
          {data?.map((product) => (
            <div key={product.title}>
              <Accordion
                buttonTitle={product.title}
                imageUrl={product.imageUrl}
              >
                {product.desc}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      <Modal
        title={productModalTitle}
        show={openModal}
        onModalClose={handleModalClose}
      >
        {productModalText}
      </Modal>
    </>
  );
};
