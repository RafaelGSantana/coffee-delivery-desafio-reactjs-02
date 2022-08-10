import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import imageBanner from '../../assets/section-home-image-banner.svg';

import {
   HomeContainer,
   SectionBanner,
   SectionBannerContent,
   SectionBannerCheckList,
   SectionBannerCheckListItem,
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

            {/* <SectionBannerImageWrapper> */}
               <img src={imageBanner} alt="" />
            {/* </SectionBannerImageWrapper> */}
         </SectionBanner>
      </HomeContainer>
   )
}