import { MapPin, ShoppingCart } from 'phosphor-react';

import logo from '../../assets/logo.svg';
import { HeaderContainer } from './styles';

export function Header() {
   return (
      <HeaderContainer>
         <img src={logo} alt="" />
         <div>
            <div>
               <MapPin size={22} weight='fill' />
               <p>São Paulo, SP</p>
            </div>
            <div>
               <ShoppingCart size={22} weight="fill" />
            </div>
         </div>
      </HeaderContainer>
   )
}