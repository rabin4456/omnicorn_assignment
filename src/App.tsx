import "./App.css";
import { Accordion, Header, ProductCard, ProductInfoCard } from "./components";
import { AccordionType, HeaderType } from "./enum";
import { useState } from "react";
import { cardData, productData } from "./utils/data";

function App() {
  const [selectedProductData, setSelectedProductData] =
    useState<IProducts | null>(null);

  const handleProductClick = (id: number) => {
    const tempData = productData?.find((el) => el.id === id);
    if (tempData) {
      setSelectedProductData(tempData);
    }
  };

  return (
    <main className='h-screen py-10 sm:px-20 px-4 overflow-y-auto'>
      <Header variant={HeaderType.LARGE} className='text-center'>
        Section title
      </Header>
      <Header variant={HeaderType.SMALL} className='text-center mb-4'>
        Section subtitle
      </Header>

      {/*  for destop */}
      <section className='sm:block hidden'>
        <div className=' grid xl:grid-cols-4 grid-cols-2 gap-4 mb-10  '>
          {cardData?.map((card) => (
            <div key={card.id}>
              <ProductCard
                title={card.title}
                imageUrl={card.imageUrl}
                content={card.desc}
                btnClassName={
                  card.id === selectedProductData?.id ? "bg-yellow border-l-0 border-t-0 border-b-[4px] border-r-[4px] border-neutral-500" : ""
                }
                handleCardClick={() => handleProductClick(card.id)}
              />
            </div>
          ))}
        </div>
        {selectedProductData ? (
          <ProductInfoCard
            title={selectedProductData?.title}
            content={selectedProductData?.desc}
            data={selectedProductData?.products}
            productModalText={selectedProductData?.desc}
            productModalTitle={selectedProductData?.title}
          />
        ) : null}
      </section>

      {/*  for mobile */}
      <section className='sm:hidden flex flex-col gap-y-3'>
        {cardData?.map((card) => (
          <div key={card.id}>
            <Accordion
              buttonTitle={card.title}
              imageUrl={card.imageUrl}
              variant={AccordionType.SECONDARY}
              onClick={() => handleProductClick(card.id)}
            >
              {card?.id === selectedProductData?.id ? (
                <ProductInfoCard
                  title={selectedProductData?.title}
                  content={selectedProductData?.desc}
                  data={selectedProductData?.products}
                  productModalText={selectedProductData?.desc}
                  productModalTitle={selectedProductData?.title}
                />
              ) : null}
            </Accordion>
          </div>
        ))}
      </section>
    </main>
  );
}

export default App;
