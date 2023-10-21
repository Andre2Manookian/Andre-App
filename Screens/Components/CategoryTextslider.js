import React, { useState } from 'react'
import { View , Text, FlatList, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import Colors from '../../Shared/Colors'




function CategoryTextslider({selectcategory}) {
  

const [active,setActive]=useState(1)

const categoryList = [
       
     
       {
        id:1,
        name: 'Latest',
       },

       {
        id:2,
        name: 'World',
       },


       {
        id:3,
        name: 'Bussiness',
       },

       {
        id:4,
        name: 'Sport',
       },

       {
        id:5,
        name: 'Life',
       },

       {
        id:6,
        name: 'Movies',
       },
      



   ]

   const onCategoryClick=(id)=>{
    setActive(id)
   }

   return(
    <View style={{marginTop:20}}>
        <FlatList
        data={categoryList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=>(
            <TouchableOpacity onPress={()=>{onCategoryClick(item.id);selectcategory(item.name)}}>
                <Text style={ item.id==active? styles.selectedtext  : styles.unselectedtext}>{item.name}</Text>
            </TouchableOpacity>
        )}
        />
    </View>

   )

}



const styles = StyleSheet.create({

unselectedtext:{
    marginRight:15 ,  
    fontSize:17 ,
     fontWeight:"800",
     color: Colors.gray
},

selectedtext:{
    marginRight:15 , 
    marginLeft:7,
    fontSize:17 ,
     fontWeight:"800",
     color: Colors.primary
},



})

export default CategoryTextslider