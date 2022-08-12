import styled from "styled-components";

export const HomeContainer = styled.div`
   width: 100%;
   padding-bottom: 9.8125rem;
`;

export const SectionBanner = styled.div`
   width: 100%;
   height: 34rem;
   background-image: url('/src/assets/section-home-background.svg');
   background-size: cover;
   padding: 0 10rem;

   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 3.5rem;
`;

export const SectionBannerContent = styled.div`
   width: 36.75rem;

   display: flex;
   flex-direction: column;
   align-items: flex-start;

   h3 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 3rem;
      line-height: 130%;
      margin-bottom: 1rem;
      color: ${props => props.theme["base-title"]};
   }

   > p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.25rem;
      line-height: 130%;
      margin-bottom: 4.125rem;
      color: ${props => props.theme["base-subtitle"]};
   }
`;

export const SectionBannerCheckList = styled.div`
   display: grid;
   grid-template-columns: 1fr 1fr;
`;

export const SectionBannerCheckListItem = styled.div`
   display: flex;
   align-items: center;
   gap: 0.75rem;

   > div {
      border-radius: 50%;
      padding: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
   }

   p {
      font-family: 'Roboto', sans-serif;
      font-size: 1rem;
      line-height: 130%;
      color: ${props => props.theme["base-text"]};
   }

   &:nth-child(1) {
      margin-bottom: 1.25rem;
      margin-right: 2.5rem;

      > div {
         background: ${props => props.theme["yellow-dark"]};
      }
   }

   &:nth-child(2) {
      margin-bottom: 1.25rem;

      > div {
         background: ${props => props.theme["base-text"]};
      }
   }

   &:nth-child(3) {
      margin-right: 2.5rem;
      > div {
         background: ${props => props.theme["yellow"]};
      }
   }

   &:nth-child(4) {
      > div {
         background: ${props => props.theme["purple"]};
      }
   }
`;

export const SectionCoffeeListWrapper = styled.div`
   width: 100%;
   padding: 2rem 10rem;

   h3 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 2rem;
      line-height: 130%;
      color: ${props => props.theme["base-subtitle"]};
      margin-bottom: 3.375rem;
   }
`;

export const SectionCoffeeList = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 2rem;
`;

export const SectionCoffeeListItem = styled.div`
   width: 16rem;
   padding: 0 1.5rem 1.25rem;
   background: ${props => props.theme["base-card"]};
   border-radius: 6px 36px;

   display: flex;
   align-items: center;
   flex-direction: column;

   img {
      width: 7.5rem;
      height: 7.5rem;
      margin-top: -1.25rem;
      margin-bottom: 0.75rem;
   }

   > div {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      > span {
         color: ${props => props.theme["yellow"]};
         font-weight: 700;
         font-size: 0.625rem;
         line-height: 130%;
         background: ${props => props.theme["yellow-light"]};
         padding: 0.25rem 0.5rem;
         border-radius: 100px;
         margin-bottom: 1rem;
      }
   }
`;

export const CoffeeInfo = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

export const CoffeeInfoTitle = styled.p`
   font-family: 'Baloo 2', sans-serif;
   font-weight: 700;
   font-size: 1.25rem;
   line-height: 130%;
   color: ${props => props.theme["base-subtitle"]};
   margin-bottom: 0.5rem;
`;

export const CoffeeInfoDescription = styled.p`
   font-size: 0.875rem;
   line-height: 130%;
   color: ${props => props.theme["base-label"]};
   margin-bottom: 2.0625rem;
   text-align: center;
`;

export const PurchaseCoffee = styled.div`
   width: 100%;
   display: flex;
   align-items: center;

   > div:first-child {
      display: flex;
      align-items: baseline;
      margin-right: 1.4375rem;

      small {
         font-size: 0.875rem;
         margin-right: 0.25rem;
         line-height: 130%;
         color: ${props => props.theme["base-text"]};
      }

      p {
         font-family: 'Baloo 2';
         font-weight: 800;
         font-size: 1.5rem;
         line-height: 130%;
         color: ${props => props.theme["base-text"]};
      }
   }

   > div:nth-child(2) {
      width: 4.5rem;
      border-radius: 6px;
      background: ${props => props.theme["base-button"]};
      padding: 0.5rem;
      margin-right: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      div {
         svg {
            color: ${props => props.theme["purple"]};
         }
      }

      p {
         line-height: 130%;
         color: ${props => props.theme["base-title"]};
         text-align: center;
      }
   }

   > button:last-child {
      padding: 0.5rem;
      background: ${props => props.theme["purple-dark"]};
      border-radius: 6px;
      border: none;

      display: flex;
      align-items: center;
      justify-content: center;

      transition: background 0.2s;

      svg {
         color: ${props => props.theme["base-card"]}
      }

      &:hover {
         background: ${props => props.theme["purple"]};
      }
   }
`;

