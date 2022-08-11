import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";

import imageCoffee from '../../assets/img-coffee.svg';

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
                  <div>
                     <CreditCard size={16} />
                     <p>CARTÃO DE CRÉDITO</p>
                  </div>
                  <div>
                     <Bank size={16} />
                     <p>CARTÃO DE DÉBITO</p>
                  </div>
                  <div>
                     <Money size={16} />
                     <p>DINHEIRO</p>
                  </div>
               </PaymentOptions>
            </PaymentInfoFormWrapper>
            
         </CartFormWrapper>

         <CartSelectedCoffeesWrapper>
            <h4>Cafés selecionados</h4>

            <CartSelectedCoffees>
               <SelectedCoffeeInfo>
                  <div>
                     <img
                        src={imageCoffee}
                        alt="Foto tirada de cima, de uma chícara branca com café preto, em cima de um pirex branco"
                     />

                     <SelectedCoffeeDescription>
                        <p>Expresso Tradicional</p>
                        <div>
                           <SelectAmountOfSelectedCoffee>
                              <div>
                                 <Minus size={14} weight="bold" />
                              </div>
                              <p>1</p>
                              <div>
                                 <Plus size={14} weight="bold" />
                              </div>
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
                        src={imageCoffee}
                        alt="Foto tirada de cima, de uma chícara branca com café preto, em cima de um pirex branco"
                     />

                     <SelectedCoffeeDescription>
                        <p>Expresso Tradicional</p>
                        <div>
                           <SelectAmountOfSelectedCoffee>
                              <div>
                                 <Minus size={14} weight="bold" />
                              </div>
                              <p>1</p>
                              <div>
                                 <Plus size={14} weight="bold" />
                              </div>
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
            </CartSelectedCoffees>

            
         </CartSelectedCoffeesWrapper>
      </CartContainer>
   )
}