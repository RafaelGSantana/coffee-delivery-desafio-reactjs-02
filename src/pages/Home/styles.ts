import styled from "styled-components";

export const HomeContainer = styled.div`
   width: 100%;
`;

export const SectionBanner = styled.div`
   width: 100vw;
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

export const SectionBannerImageWrapper = styled.div`

`;
