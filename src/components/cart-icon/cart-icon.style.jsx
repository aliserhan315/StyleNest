import styled from 'styled-components';
import { PiHandbagLight } from "react-icons/pi";


export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ShoppingIcon = styled(PiHandbagLight)`

    font-size: 34px;`


export const ItemCount = styled.span`
   position: absolute;
    font-size: 13px;
    font-weight: bold;
    bottom: 12px;
    color: #4a4a4a;
`;


//  .cart-icon-container {
  // width: 45px;
  // height: 45px;
  // position: relative;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // cursor: pointer;

  // .shopping-icon {
  //   font-size: 34px;
   
 
//   }

//   .item-count {
//     position: absolute;
//     font-size: 13px;
//     font-weight: bold;
//     bottom: 12px;
//     color: #4a4a4a;
//   }
// }
