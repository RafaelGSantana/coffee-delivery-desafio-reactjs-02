import styled from "styled-components";

export const SuccessPageContainer = styled.div`
   width: 100%;
   padding: 2.5rem 10rem;

   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: space-between;
   gap: 2.5rem;
`;

export const OrderInfoContainer = styled.div`
   width: 100%;

   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 2.5rem;
`;

export const SuccessMessage = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 0.25rem;

   h2 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      font-weight: 800;
      line-height: 130%;
      color: ${props => props.theme["yellow-dark"]};
   }

   p {
      font-size: 1.25rem;
      line-height: 130%;
      color: ${props => props.theme["base-subtitle"]};
   }
`;

export const OrderInfo = styled.div`
   width: 32.875rem;
   padding: 1px;
   border-radius: 6px 36px;
   background: linear-gradient(105deg, #DBAC2C, #8047F8);

   > div {
      width: 100%;
      padding: 2.5rem;
      background: ${props => props.theme.background};;
      border-radius: 5px 35px;

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 2rem;
   }
`;

export const AddressInfo = styled.div`
   display: flex;
   align-items: center;
   gap: 0.75rem;

   div:first-child {
      width: 2rem;
      height: 2rem;
      padding: 8px;
      border-radius: 50%;
      background: ${props => props.theme["purple"]};

      display: flex;
      align-items: center;
      justify-content: center;
      
      svg {
         color: ${props => props.theme["background"]};
      }
   }

   div:last-child {
      p {
         line-height: 130%;
         color: ${props => props.theme["base-text"]};
      }
   }
`;

export const DeliveryForecastInfo = styled.div`
   display: flex;
   align-items: center;
   gap: 0.75rem;

   div:first-child {
      width: 2rem;
      height: 2rem;
      padding: 8px;
      border-radius: 50%;
      background: ${props => props.theme["yellow"]};

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
         color: ${props => props.theme["background"]};
      }
   }

   div:last-child {
      p {
         line-height: 130%;
         color: ${props => props.theme["base-text"]};
      }
   }
`;

export const PaymentInfo = styled.div`
   display: flex;
   align-items: center;
   gap: 0.75rem;

   div:first-child {
      width: 2rem;
      height: 2rem;
      padding: 8px;
      border-radius: 50%;
      background: ${props => props.theme["yellow-dark"]};

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
         color: ${props => props.theme["background"]};
      }
   }

   div:last-child {
      p {
         line-height: 130%;
         color: ${props => props.theme["base-text"]};
      }
   }
`;
