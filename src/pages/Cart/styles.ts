import styled from "styled-components";

export const CartContainer = styled.div`
   width: 100%;
   padding: 2.5rem 10rem;

   display: flex;
   gap: 2rem;
`;

export const CartFormWrapper = styled.div`
   width: 40rem;

   display: flex;
   flex-direction: column;

   h4 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 130%;
      color: ${props => props.theme["base-subtitle"]};
      margin-bottom: 0.9375rem;
   }
`;

export const AddressForm = styled.div`
   width: 100%;
   padding: 2.5rem;
   background-color: ${props => props.theme["base-card"]};
   border-radius: 6px;
   margin-bottom: 0.75rem;

   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;

export const AddressFormDescription = styled.div`
   display: flex;
   gap: 0.5rem;
   margin-bottom: 2rem;

   svg {
      color: ${props => props.theme["yellow-dark"]};
   }

   div {
      p:first-child {
         line-height: 130%;
         color: ${props => props.theme["base-subtitle"]};
      }

      p:last-child {
         line-height: 130%;
         color: ${props => props.theme["base-text"]};
         font-size: 0.875rem;
      }
   }
`;

export const InputsWrapper = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   gap: 1rem;

   > div {
      display: flex;
      gap: 0.75rem;
   }
`;

const BaseInput = styled.input`
   height: 2.625rem;
   padding: 0.75rem;
   background: ${props => props.theme["base-input"]};
   border: 1px solid ${props => props.theme["base-button"]};
   border-radius: 4px;
`;

export const CepInput = styled(BaseInput)`
   width: 12.5rem;
`;

export const StreetInput = styled(BaseInput)`
   width: 100%;
`;

export const NumberInput = styled(BaseInput)`
   width: 12.5rem;
`;

export const ComplementInput = styled(BaseInput)`
   width: 21.75rem;
`;

export const DistrictInput = styled(BaseInput)`
   width: 12.5rem;
`;

export const CityInput = styled(BaseInput)`
   width: 17.25rem;
`;

export const StateInput = styled(BaseInput)`
   width: 3.75rem;
`;

export const PaymentInfoFormWrapper = styled.div`
   width: 100%;
   padding: 2.5rem;
   background-color: ${props => props.theme["base-card"]};
   border-radius: 6px;

   display: flex;
   flex-direction: column;
   gap: 2.5rem;
`;

export const PaymentInfoDescription = styled.div`
   display: flex;
   gap: 0.5rem;

   svg {
      color: ${props => props.theme["purple"]};
   }

   div {
      p:first-child {
         line-height: 130%;
         color: ${props => props.theme["base-subtitle"]};
      }

      p:last-child {
         line-height: 130%;
         color: ${props => props.theme["base-text"]};
         font-size: 0.875rem;
      }
   }

`;

export const PaymentOptions = styled.div`
   display: flex;
   align-items: center;
   gap: 0.75rem;

   div {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      padding: 1rem;
      width: 11.166rem;
      background: ${props => props.theme["base-button"]};
      border-radius: 6px;

      svg {
         color: ${props => props.theme["purple"]};
      }

      p {
         font-size: 0.75rem;
         line-height: 130%;
         text-transform: capitalize;
         color: ${props => props.theme["base-text"]};
      }
   }
`;

export const CartSelectedCoffeesWrapper = styled.div`
   width: 28rem;

   h4 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 130%;
      color: ${props => props.theme["base-subtitle"]};
      margin-bottom: 0.9375rem;
   }
`;

export const CartSelectedCoffees = styled.div`
   width: 100%;
   padding: 2.5rem;
   border-radius: 6px 44px;
   background: ${props => props.theme["base-card"]};

   display: flex;
   flex-direction: column;
   align-items: flex-start;
`;

export const SelectedCoffeeInfo = styled.div`
   width: 100%;
   padding-bottom: 1.5rem;
   border-bottom: 1px solid ${props => props.theme["base-button"]};

   display: flex;
   justify-content: space-between;
   align-items: flex-start;

   > div {
      display: flex;
      align-items: center;
      gap: 1.25rem;

      img {
         width: 4rem;
         height: 4rem;
      }
   }

   & + div {
      margin-top: 1.5rem;
   }
`;

export const SelectedCoffeeDescription = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 0.5rem;

   p {
      line-height: 130%;
      color: ${props => props.theme["base-subtitle"]};
   }

   > div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
   }
`;

export const SelectAmountOfSelectedCoffee = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.5rem;
   height: 2rem;

   padding: 0.5rem;
   background: ${props => props.theme["base-button"]};
   border-radius: 6px;

   > div {
      svg {
         color: ${props => props.theme["purple"]};
      }
   }

   p {
      color: ${props => props.theme["base-title"]};
      line-height: 130%;
   }
`;

export const RemoveSelectedCoffeeButton = styled.button`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0.5rem;
   gap: 0.5rem;
   border: none;
   height: 2rem;

   background: ${props => props.theme["base-button"]};
   border-radius: 6px;

   svg {
      color: ${props => props.theme["purple"]};
   }

   p {
      font-size: 0.75rem;
      color: ${props => props.theme["base-text"]};;
      line-height: 130%;
   }

   &:hover {
      background: ${props => props.theme["base-hover"]};

      svg {
         color: ${props => props.theme["purple-dark"]};
      }

      p {
         color: ${props => props.theme["base-subtitle"]};;
      }
   }
`;

export const SelectedCoffeePrice = styled.div`
   span {
      font-weight: 700;
      line-height: 130%;
      color: ${props => props.theme["base-text"]};
   }
`;
