import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { ApiConstants, Colors, Fonts } from '../constants';
import { StaticImageService } from '../services';
import { Display } from '../utils';
import AntDesign from '@expo/vector-icons/AntDesign';

const FoodCard = ({ name, description, price, image }) => {
   const [itemCount, setItemCount] = useState(0);

   return (
      <View style={styles.container}>
         <TouchableOpacity>
            <Image
               style={styles.image}
               source={{
                  uri: StaticImageService.getGalleryImage(
                     image,
                     ApiConstants.STATIC_IMAGE.SIZE.SQUARE
                  ),
               }}
            />
         </TouchableOpacity>
         <View style={styles.detailContainer}>
            <TouchableOpacity>
               <Text style={styles.titleText} numberOfLines={1}>
                  {name}
               </Text>
               <Text style={styles.descriptionText} numberOfLines={2}>
                  {description}
               </Text>
            </TouchableOpacity>
            <View style={styles.footerContainer}>
               <Text style={styles.priceText}>$ {price}</Text>
               <View style={styles.itemAddContainer}>
                  {itemCount > 0 ? (
                     <>
                        <AntDesign
                           name="minus"
                           color={Colors.DEFAULT_YELLOW}
                           size={18}
                           onPress={() => setItemCount(itemCount - 1)}
                        />
                        <Text style={styles.itemCountText}>{itemCount}</Text>
                     </>
                  ) : null}

                  <AntDesign
                     name="plus"
                     color={Colors.DEFAULT_YELLOW}
                     size={18}
                     onPress={() => setItemCount(itemCount + 1)}
                  />
               </View>
            </View>
         </View>
      </View>
   );
};

export default FoodCard;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      marginVertical: 5,
      borderRadius: 10,
      alignItems: 'center',
      elevation: 2,
      backgroundColor: Colors.LIGHT_GREY,
   },
   image: {
      height: 100,
      width: 100,
      margin: 6,
      borderRadius: 8,
   },
   detailContainer: {
      marginHorizontal: 5,
   },
   titleText: {
      width: Display.setWidth(60),
      color: Colors.DEFAULT_BLACK,
      fontFamily: Fonts.POPPINS_BOLD,
      fontSize: 13,
      lineHeight: 13 * 1.4,
      marginBottom: 8,
   },
   descriptionText: {
      width: Display.setWidth(60),
      color: Colors.DEFAULT_GREY,
      fontFamily: Fonts.POPPINS_SEMI_BOLD,
      fontSize: 10,
      lineHeight: 10 * 1.4,
      marginBottom: 8,
   },
   priceText: {
      color: Colors.DEFAULT_YELLOW,
      fontFamily: Fonts.POPPINS_BOLD,
      fontSize: 14,
      lineHeight: 14 * 1.4,
   },
   footerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: 5,
   },
   itemAddContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: Colors.LIGHT_GREY2,
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 8,
   },
   itemCountText: {
      color: Colors.DEFAULT_BLACK,
      fontFamily: Fonts.POPPINS_MEDIUM,
      fontSize: 14,
      lineHeight: 14 * 1.4,
      marginHorizontal: 8,
   },
});
