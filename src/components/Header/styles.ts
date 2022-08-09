import styled from "styled-components";

export const HeaderContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 2rem 0;

   div {
      display: flex;
      align-items: center;
      gap: 0.75rem;

      div:first-child {
         max-width: 10rem;
         width: auto;
         height: 2.375rem;

         background-color: ${props => props.theme["purple-light"]};
         color: ${props => props.theme["purple"]};
         border-radius: 6px;
         padding: 0.5rem;
         gap: 0.25rem;

         display: flex;
         align-items: center;
      }

      div:last-child {
         width: 2.375rem;
         height: 2.375rem;

         background-color: ${props => props.theme["yellow-light"]};
         color: ${props => props.theme["yellow"]};
         border-radius: 6px;
         padding: 0.5rem;

         display: flex;
         align-items: center;
         justify-content: center;
      }
   }
`;