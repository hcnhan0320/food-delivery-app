import { ApiConstants } from '../constants';
import axios from 'axios';
import { authHeader } from '../utils/Generator';
import { getToken } from '../Store';

const getCartItems = async () => {
   console.log(`CartService | getCartItems`);
   try {
      let response = await axios.get(
         `${ApiConstants.BACKEND_API.BASE_URL}${ApiConstants.BACKEND_API.CART}`,
         {
            headers: authHeader(getToken()),
         }
      );
      if (response?.status === 200) {
         console.log(response?.data?.data);
         return {
            status: true,
            message: `Cart data fetched`,
            data: response?.data?.data,
         };
      } else {
         return {
            status: false,
            message: `Cart data not found`,
         };
      }
   } catch (error) {
      return {
         status: false,
         message: `Cart data not found`,
      };
   }
};

const addToCart = async ({ foodId }) => {
   console.log(`CartService | addToCart`);
   try {
      let response = await axios.post(
         `${ApiConstants.BACKEND_API.BASE_URL}${ApiConstants.BACKEND_API.CART}/${foodId}`,
         {},
         {
            headers: authHeader(getToken()),
         }
      );
      if (response?.status === 200) {
         return {
            status: true,
            message: `Item added to cart successfully`,
            data: response?.data?.data,
         };
      } else {
         return {
            status: false,
            message: `Item added to cart failed`,
         };
      }
   } catch (error) {
      return {
         status: false,
         message: `Item added to cart failed`,
      };
   }
};

const removeFromCart = async ({ foodId }) => {
   console.log(`CartService | addToCart`);
   try {
      let response = await axios.delete(
         `${ApiConstants.BACKEND_API.BASE_URL}${ApiConstants.BACKEND_API.CART}/${foodId}`,
         {
            headers: authHeader(getToken()),
         }
      );
      if (response?.status === 200) {
         return {
            status: true,
            message: `Item removed from cart successfully`,
            data: response?.data?.data,
         };
      } else {
         return {
            status: false,
            message: `Item removed from cart failed`,
         };
      }
   } catch (error) {
      return {
         status: false,
         message: `Item removed from cart failed`,
      };
   }
};

export default { getCartItems, addToCart, removeFromCart };
