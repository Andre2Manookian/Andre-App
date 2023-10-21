import React, { useEffect, useState } from 'react'
import { View , Text, FlatList, TouchableOpacity , Image, Dimensions} from 'react-native'
import GlobalAPI from '../../Services/GlobalAPI'
import Colors from '../../Shared/Colors'
import { useNavigation } from '@react-navigation/native'



function TopHeadlinSlider({newsList}) {
    
   const navigation= useNavigation();



  return (
   <View style={{marginTop:15}}>

  <FlatList
   data={newsList}
   horizontal
   showsHorizontalScrollIndicator={false}
   renderItem={({item})=>(
    <TouchableOpacity onPress={()=> navigation.navigate("readnews", {news:item})} style={{width:Dimensions.get('screen').width*0.80 , marginRight:15 , marginLeft:10}}>
        <Image style={{height:Dimensions.get('screen').width*0.77   , borderRadius:10}} source={{uri:item.urlToImage}}/>
        <Text numberOfLines={3} style={{marginTop:10 , fontSize:20 , fontWeight:"800"}}>{item.title}</Text>
        <Text style={{marginTop:5 , color:Colors.primary}}>{item?.source?.name}</Text>
    </TouchableOpacity>
   )}
  
  />
   </View>
  )
}

export default TopHeadlinSlider