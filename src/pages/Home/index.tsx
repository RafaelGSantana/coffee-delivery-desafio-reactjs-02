import { Coffee, Minus, Package, Plus, ShoppingCart, Timer } from "phosphor-react";

import imageBanner from '../../assets/section-home-image-banner.svg';
import imageCoffee from '../../assets/img-coffee.svg';

import {
   HomeContainer,
   SectionBanner,
   SectionBannerContent,
   SectionBannerCheckList,
   SectionBannerCheckListItem,
   SectionCoffeeListWrapper,
   SectionCoffeeList,
   SectionCoffeeListItem,
   CoffeeInfo,
   CoffeeInfoTitle,
   CoffeeInfoDescription,
   PurchaseCoffee
} from './styles';

export function Home() {
   return (
      <HomeContainer>
         <SectionBanner>
            <SectionBannerContent>
               <h3>Encontre o café perfeito para qualquer hora do dia</h3>
               <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
               <SectionBannerCheckList>
                     <SectionBannerCheckListItem>
                        <div>
                           <ShoppingCart weight="fill" size={16}/>
                        </div>
                        <p>Compra simples e segura</p>
                     </SectionBannerCheckListItem>

                     <SectionBannerCheckListItem>
                        <div>
                           <Package weight="fill" size={16}/>
                        </div>
                        <p>Embalagem mantém o café intacto</p>
                     </SectionBannerCheckListItem>

                     <SectionBannerCheckListItem>
                        <div>
                           <Timer weight="fill" size={16}/>
                        </div>
                        <p>Entrega rápida e rastreada</p>
                     </SectionBannerCheckListItem>

                     <SectionBannerCheckListItem>
                        <div>
                           <Coffee weight="fill" size={16}/>
                        </div>
                        <p>O café chega fresquinho até você</p>
                     </SectionBannerCheckListItem>
               </SectionBannerCheckList>
            </SectionBannerContent>

            <img src={imageBanner} alt="" />
         </SectionBanner>

         <SectionCoffeeListWrapper>
            <h3>Nossos cafés</h3>
            <SectionCoffeeList>
               <SectionCoffeeListItem>
                  <img src={imageCoffee} alt="" />
                  <span>TRADICIONAL</span>
                  <CoffeeInfo>
                     <CoffeeInfoTitle>Expresso Tradicional</CoffeeInfoTitle>
                     <CoffeeInfoDescription>O tradicional café feito com água quente e grãos moídos</CoffeeInfoDescription>
                  </CoffeeInfo>

                  <PurchaseCoffee>
                     <div>
                        <small>R$</small>
                        <p>9,90</p>
                     </div>

                     <div>
                        <div>
                           <Minus size={14} weight="bold" />
                        </div>
                        <p>1</p>
                        <div>
                           <Plus size={14} weight="bold" />
                        </div>
                     </div>
                     
                     <div>
                        <ShoppingCart size={22} weight="fill"/>
                     </div>
                  </PurchaseCoffee>
               </SectionCoffeeListItem>

               <SectionCoffeeListItem>
                  <img src={imageCoffee} alt="" />
                  <span>TRADICIONAL</span>
                  <CoffeeInfo>
                     <CoffeeInfoTitle>Expresso Tradicional</CoffeeInfoTitle>
                     <CoffeeInfoDescription>O tradicional café feito com água quente e grãos moídos</CoffeeInfoDescription>
                  </CoffeeInfo>

                  <PurchaseCoffee>
                     <div>
                        <small>R$</small>
                        <p>9,90</p>
                     </div>

                     <div>
                        <div>
                           <Minus size={14} weight="bold" />
                        </div>
                        <p>1</p>
                        <div>
                           <Plus size={14} weight="bold" />
                        </div>
                     </div>
                     
                     <div>
                        <ShoppingCart size={22} weight="fill"/>
                     </div>
                  </PurchaseCoffee>
               </SectionCoffeeListItem>

               <SectionCoffeeListItem>
                  <img src={imageCoffee} alt="" />
                  <span>TRADICIONAL</span>
                  <CoffeeInfo>
                     <CoffeeInfoTitle>Expresso Tradicional</CoffeeInfoTitle>
                     <CoffeeInfoDescription>O tradicional café feito com água quente e grãos moídos</CoffeeInfoDescription>
                  </CoffeeInfo>

                  <PurchaseCoffee>
                     <div>
                        <small>R$</small>
                        <p>9,90</p>
                     </div>

                     <div>
                        <div>
                           <Minus size={14} weight="bold" />
                        </div>
                        <p>1</p>
                        <div>
                           <Plus size={14} weight="bold" />
                        </div>
                     </div>
                     
                     <div>
                        <ShoppingCart size={22} weight="fill"/>
                     </div>
                  </PurchaseCoffee>
               </SectionCoffeeListItem>

               <SectionCoffeeListItem>
                  <img src={imageCoffee} alt="" />
                  <span>TRADICIONAL</span>
                  <CoffeeInfo>
                     <CoffeeInfoTitle>Expresso Tradicional</CoffeeInfoTitle>
                     <CoffeeInfoDescription>O tradicional café feito com água quente e grãos moídos</CoffeeInfoDescription>
                  </CoffeeInfo>

                  <PurchaseCoffee>
                     <div>
                        <small>R$</small>
                        <p>9,90</p>
                     </div>

                     <div>
                        <div>
                           <Minus size={14} weight="bold" />
                        </div>
                        <p>1</p>
                        <div>
                           <Plus size={14} weight="bold" />
                        </div>
                     </div>
                     
                     <div>
                        <ShoppingCart size={22} weight="fill"/>
                     </div>
                  </PurchaseCoffee>
               </SectionCoffeeListItem>

               <SectionCoffeeListItem>
                  <img src={imageCoffee} alt="" />
                  <span>TRADICIONAL</span>
                  <CoffeeInfo>
                     <CoffeeInfoTitle>Expresso Tradicional</CoffeeInfoTitle>
                     <CoffeeInfoDescription>O tradicional café feito com água quente e grãos moídos</CoffeeInfoDescription>
                  </CoffeeInfo>

                  <PurchaseCoffee>
                     <div>
                        <small>R$</small>
                        <p>9,90</p>
                     </div>

                     <div>
                        <div>
                           <Minus size={14} weight="bold" />
                        </div>
                        <p>1</p>
                        <div>
                           <Plus size={14} weight="bold" />
                        </div>
                     </div>
                     
                     <div>
                        <ShoppingCart size={22} weight="fill"/>
                     </div>
                  </PurchaseCoffee>
               </SectionCoffeeListItem>
            </SectionCoffeeList>
         </SectionCoffeeListWrapper>
      </HomeContainer>
   )
}