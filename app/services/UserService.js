import { ApiConstants } from '../constants';
import axios from 'axios';
import { authHeader } from '../utils/Generator';
import { getToken } from '../Store';

const getUserData = async () => {
   console.log(`userService | getUserData`);
   try {
      let userResponse = await axios.get(
         `${ApiConstants.BACKEND_API.BASE_URL}${ApiConstants.BACKEND_API.USER}/get-user`,
         {
            headers: {
               Authorization: authHeader(getToken()),
            },
         }
      );
      if (userResponse?.status === 200) {
         console.log(userResponse?.data);
         return {
            status: true,
            message: `User data fetched`,
            data: userResponse?.data,
         };
      } else {
         return {
            status: false,
            message: `User data not found`,
         };
      }
   } catch (error) {
      return {
         status: false,
         message: `User data not found`,
      };
   }
};

export default { getUserData };
