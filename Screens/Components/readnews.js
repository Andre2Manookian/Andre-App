import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text, View ,Image, TouchableOpacity, Share, ScrollView} from 'react-native'
import News from '../News';
import Colors from '../../Shared/Colors';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';



function readnews() {
  
    const news=useRoute().params.news;
    const navigation=useNavigation();
    useEffect(()=>{
        console.log(news)
    })


    const shareNews=()=>{
        Share.share({
            message:news.title+"This is News"+news.description
        })
    }

    
    return (
   
    <ScrollView style={{flex:1}}>
       
        <View style={{marginBottom:10,marginTop:10 ,  flexDirection:"row" , display:"flex" , justifyContent:"space-between"}}>
            <TouchableOpacity onPress={()=>navigation.navigate('TabScreen')}>
            <Ionicons style={{marginTop:25 , marginLeft:5}} name="arrow-back" size={30} color="black" />
            </TouchableOpacity>

              <TouchableOpacity onPress={()=>shareNews()}>
              <Foundation style={{marginTop:25 , marginRight:10}} name="social-skillshare" size={30} color="black" />  
              </TouchableOpacity>
            
        
        </View>

      <Image style={{width:'100%' , height:300 , borderRadius:15 , }} source={{uri:news.urlToImage}}/>
      
      <Text style={{marginTop:10 , marginLeft:5,  fontWeight:"bold" , fontSize:22}}>{news.title}</Text>

      <Text style={{marginTop:10 , marginLeft:5, color:Colors.primary , fontSize:16}}>{news.source.name}</Text>
      <Text style={{marginTop:10 , marginLeft:5, fontSize:18 , color:Colors.gray , lineHeight:30}}>{news.description}</Text>



       <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(news.url)}>
      <Text style={{marginTop:10 , marginLeft:5, color:Colors.primary , fontSize:16 , fontWeight:'bold'}}>Read More</Text>

      </TouchableOpacity>
    </ScrollView>
  )
}

export default readnews