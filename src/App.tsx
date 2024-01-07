import { BriefcaseIcon } from "@heroicons/react/16/solid";
import "./App.css";
import {
  Accordion,
  Button,
  Header,
  ProductCard,
  ProductContent,
  Typography,
} from "./components";
import { ButtonType } from "./enum";

function App() {
  return (
    <main className='h-screen'>
      <Header variant='lg'>123243</Header>
      <Button label='asdas' iconRight={<BriefcaseIcon />} />
      <Typography variant='md'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nulla
        aliquam accusamus nemo nesciunt, saepe consequuntur provident. Et quo
        quia eum velit sed id! Molestias fugit necessitatibus dignissimos
        consequuntur consectetur.
      </Typography>

      <Accordion
        buttonTitle='Acccordion'
        imageUrl={"./accordionIcons/Group 5078.svg"}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta error
        fugiat pariatur? Beatae molestiae laborum fuga numquam iure deleniti, ab
        odit nostrum natus possimus iste quas sint officia praesentium
        accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Delectus rem dolorum placeat asperiores libero cum dolores minus
        accusamus sint in cupiditate iusto eligendi officiis veniam repellat,
        doloremque repudiandae nisi ullam.
      </Accordion>

      <ProductCard
        title='sdfsdf'
        imageUrl='./cardIcons/Group 5077.svg'
        content=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta error
        fugiat pariatur? Beatae molestiae laborum fuga numquam iure deleniti, ab
        odit nostrum natus possimus iste quas sint officia praesentium
        accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Delectus rem dolorum placeat asperiores libero cum dolores minus
        accusamus sint in cupiditate iusto eligendi officiis veniam repellat,
        doloremque repudiandae nisi ullam.'
        handleButtonClick={() => console.log("clicked")}
      />
      <ProductContent
        title='Asdasd'
        content=' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta error
        fugiat pariatur? Beatae molestiae laborum fuga numquam iure deleniti, ab
        odit nostrum natus possimus iste quas sint officia praesentium
        accusantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Delectus rem dolorum placeat asperiores libero cum dolores minus
        accusamus sint in cupiditate iusto eligendi officiis veniam repellat,
        doloremque repudiandae nisi ullam.'
        data={[
          {
            title: "Product 1",
            content: "this is accordion content",
            imageUrl: "./cardIcons/Group 5077.svg",
          },
          {
            title: "Product 1",
            content: "this is accordion content",
            imageUrl: "./cardIcons/Group 5077.svg",
          },
          {
            title: "Product 1",
            content: "this is accordion content",
            imageUrl: "./cardIcons/Group 5077.svg",
          },
        ]}
      />
      <img
        src='/public/cardIcons/Group 5077.svg'
        className='h-20 w-20'
        alt=''
      />
      <div className='text-red-500'>asds</div>
    </main>
  );
}

export default App;
