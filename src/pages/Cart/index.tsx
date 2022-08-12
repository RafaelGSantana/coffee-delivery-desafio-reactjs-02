import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";

import imageCoffee from '../../assets/image-coffees/expresso-tradicional.svg';

import {
   CartContainer,
   CartFormWrapper,
   AddressForm,
   AddressFormDescription,
   InputsWrapper,
   CepInput,
   StreetInput,
   NumberInput,
   ComplementInput,
   DistrictInput,
   CityInput,
   StateInput,
   PaymentInfoFormWrapper,
   PaymentInfoDescription,
   PaymentOptions,
   CartSelectedCoffeesWrapper,
   CartSelectedCoffees,
   SelectedCoffeeInfo,
   SelectedCoffeeDescription,
   SelectAmountOfSelectedCoffee,
   RemoveSelectedCoffeeButton,
   SelectedCoffeePrice,
   TotalPurchaseInfo,
   TotalItemsPrice,
   DeliveryPrice,
   TotalPurchasePrice,
   ConfirmPurchaseButton
} from './styles';

export function Cart() {
   return (
      <CartContainer>
         <CartFormWrapper>
            <h4>Complete seu pedido</h4>
            <AddressForm>
               <AddressFormDescription>
                  <MapPinLine size={22} />

                  <div>
                     <p>Endereço de Entrega</p>
                     <p>Informe o endereço onde deseja receber seu pedido</p>
                  </div>
               </AddressFormDescription>

               <InputsWrapper>
                  <CepInput type="text" placeholder="CEP" />
                  <StreetInput type="text" placeholder="Rua"/>
                  <div>
                     <NumberInput type="number" placeholder="Número"/>
                     <ComplementInput type="text" placeholder="Complemento"/>
                  </div>
                  <div>
                     <DistrictInput type="text" placeholder="Bairro"/>
                     <CityInput type="text" placeholder="Cidade"/>
                     <StateInput type="text" placeholder="UF"/>
                  </div>
               </InputsWrapper>
            </AddressForm>

            <PaymentInfoFormWrapper>
               <PaymentInfoDescription>
                  <CurrencyDollar size={22} />
               
                  <div>
                     <p>Pagamento</p>
                     <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                  </div>
               </PaymentInfoDescription>

               <PaymentOptions>
                  <button>
                     <div>
                        <CreditCard size={16} />
                     </div>
                     <p>Cartão de crédito</p>
                  </button>
                  <button>
                     <div>
                        <Bank size={16} />
                     </div>
                     <p>Cartão de débito</p>
                  </button>
                  <button>
                     <div>
                        <Money size={16} />
                     </div>
                        <p>dinheiro</p>
                  </button>
               </PaymentOptions>
            </PaymentInfoFormWrapper>
            
         </CartFormWrapper>

         <CartSelectedCoffeesWrapper>
            <h4>Cafés selecionados</h4>

            <CartSelectedCoffees>
               <SelectedCoffeeInfo>
                  <div>
                     <img
                        src="/src/assets/image-coffees/expresso-tradicional.svg"
                        alt="Foto tirada de cima, de uma chícara branca com café preto, em cima de um pirex branco"
                     />

                     <SelectedCoffeeDescription>
                        <p>Expresso Tradicional</p>
                        <div>
                           <SelectAmountOfSelectedCoffee>
                              <button>
                                 <Minus size={14} weight="bold" />
                              </button>
                              <p>1</p>
                              <button>
                                 <Plus size={14} weight="bold" />
                              </button>
                           </SelectAmountOfSelectedCoffee>

                           <RemoveSelectedCoffeeButton>
                              <Trash size={14} />
                              <p>REMOVER</p>
                           </RemoveSelectedCoffeeButton>
                        </div>
                     </SelectedCoffeeDescription>
                  </div>

                  <SelectedCoffeePrice>
                     <span>R$ 9,90</span>
                  </SelectedCoffeePrice>
               </SelectedCoffeeInfo>

               <SelectedCoffeeInfo>
                  <div>
                     <img
                        src="/src/assets/image-coffees/expresso-tradicional.svg"
                        alt="Foto tirada de cima, de uma chícara branca com café preto, em cima de um pirex branco"
                     />

                     <SelectedCoffeeDescription>
                        <p>Expresso Tradicional</p>
                        <div>
                           <SelectAmountOfSelectedCoffee>
                              <button>
                                 <Minus size={14} weight="bold" />
                              </button>
                              <p>1</p>
                              <button>
                                 <Plus size={14} weight="bold" />
                              </button>
                           </SelectAmountOfSelectedCoffee>

                           <RemoveSelectedCoffeeButton>
                              <Trash size={14} />
                              <p>REMOVER</p>
                           </RemoveSelectedCoffeeButton>
                        </div>
                     </SelectedCoffeeDescription>
                  </div>

                  <SelectedCoffeePrice>
                     <span>R$ 9,90</span>
                  </SelectedCoffeePrice>
               </SelectedCoffeeInfo>

               <TotalPurchaseInfo>
                  <TotalItemsPrice>
                     <p>Total de itens</p>
                     <span>R$ 29,70</span>
                  </TotalItemsPrice>
                  <DeliveryPrice>
                     <p>Entrega</p>
                     <span>R$ 3,50</span>
                  </DeliveryPrice>
                  <TotalPurchasePrice>
                     <p>Total</p>
                     <span>R$ 33,20</span>
                  </TotalPurchasePrice>

                  <ConfirmPurchaseButton>
                     CONFIRMAR PEDIDO
                  </ConfirmPurchaseButton>
               </TotalPurchaseInfo>

            </CartSelectedCoffees>

            
         </CartSelectedCoffeesWrapper>
      </CartContainer>
   )
}