import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import successImage from '../../assets/success-image.svg';

import {
   SuccessPageContainer,
   OrderInfoContainer,
   SuccessMessage,
   OrderInfo,
   AddressInfo,
   DeliveryForecastInfo,
   PaymentInfo,
} from './styles';
export function Success() {
   return (
      <SuccessPageContainer>
         <SuccessMessage>
               <h2>Uhu! Pedido confirmado</h2>
               <p>Agora é só aguardar que logo o café chegará até você</p>
         </SuccessMessage>

         <OrderInfoContainer>
            <OrderInfo>
               <div>
                  <AddressInfo>
                     <div>
                        <MapPin size={16} weight="fill" />
                     </div>
                     <div>
                        <p>Entrega em <b>Rua João Daniel Martinelli, 102</b></p>
                        <p>Farrapos - Porto Alegre, RS</p>
                     </div>
                  </AddressInfo>

                  <DeliveryForecastInfo>
                     <div>
                        <Timer size={16} weight="fill" />
                     </div>
                     <div>
                        <p>Previsão de entrega</p>
                        <p><b>20 min - 30 min</b></p>
                     </div>
                  </DeliveryForecastInfo>

                  <PaymentInfo>
                     <div>
                        <CurrencyDollar size={16} />
                     </div>
                     <div>
                        <p>Pagamento na entrega</p>
                        <p><b>Cartão de Crédito</b></p>
                     </div>
                  </PaymentInfo>
               </div>
            </OrderInfo>

            <img
               src={successImage}
               alt="Ilustração de um homem moreno, vestido com uma camiseta amarela, calça verde e um sapato preto,
               pilotando uma moto lilás pequena, com um baú marrom, e um arbusto verde no canto inferior esquerdo do
               desenho."
            />
         </OrderInfoContainer>
      </SuccessPageContainer>
   )
}