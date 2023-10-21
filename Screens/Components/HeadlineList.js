import React from 'react'
import { View , Text, FlatList, TouchableOpacity , Image} from 'react-native'
import Colors from '../../Shared/Colors'
import { useNavigation } from '@react-navigation/native'

function HeadlineList({newsList}) {

  const navigation = useNavigation();
  
  
    return (
   <View>
    
      <FlatList
      data={newsList}
      renderItem={({item})=>(
      <View>
                  <View style={{height:1 , backgroundColor:Colors.lightGray , marginTop:10, marginLeft:-20 }}></View>   

        <TouchableOpacity onPress={()=>navigation.navigate('readnews',{news:item})} style={{marginTop:25 , marginLeft:6, display:"flex", flexDirection:"row"}}>
            <Image style={{height:130, width:130 , borderRadius:10}} source={{uri:item.urlToImage}} />
            
            <View style={{marginRight:135 , marginLeft:10}}>
            <Text numberOfLines={4} style={{fontSize:18, fontWeight:"bold"}}>{item.title}</Text>
            <Text style={{marginTop:6 , color:Colors.primary}}>{item?.source?.name}</Text>
            </View>

        </TouchableOpacity>

          <View style={{height:1 , backgroundColor:Colors.lightGray , marginTop:10, marginLeft:-20 }}></View>   

      </View>   

   
      )}
      />

   </View>
  )
}

export default HeadlineList