import { Container, Filters, ProductsGroupList, Title } from "@/components/shared";
import { TopBar } from "@/components/shared/top-bar";
import React from "react";

export default function Home() {
  return <>
    <Container className="mt-10">
      <Title text="All pizzas" size="lg" className="font-extrabold" />



    </Container>
    <TopBar />
    <Container className="pb-14 mt-10">
      <div className="flex gap-[80px]">
        <div className="w-[250px]">
          <Filters />
        </div>
        <div className="flex-1">
          <div className="flex flex-col gap-16">
            <ProductsGroupList title="Pizza" categoryId={1} items={[
              {
                id: 1,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 2,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 3,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 4,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 5,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 6,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 7,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
            ]} />
            <ProductsGroupList title="Combo" categoryId={2} items={[
              {
                id: 1,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 2,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 3,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 4,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 5,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 6,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
              {
                id: 7,
                name: 'Test Pizza',
                price: 15,
                imageUrl: 'https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg',
                items: [{ price: 15 }]
              },
            ]} />
          </div>
        </div>
      </div>
    </Container>
  </>
}
