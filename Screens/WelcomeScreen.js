import { Dimensions, StyleSheet, Text, View } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';

import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const{width , height} = Dimensions.get('window')


const WelcomeScreen = () => {
    const navigation =useNavigation();


    const handledone = ()=>{
        navigation.navigate('TabScreen')
    }

  return (
    <View style={styles.Container}>
    
    <Onboarding
     onDone={handledone}
     onSkip={handledone}


    containerStyles={{paddingHorizontal:15}}
  pages={[
    {
      backgroundColor: '#000000',
      image: (

       <View style={styles.lottie}>
        <LottieView style={styles.EfImg} source={require('../assets/animation/animation_lmhoqqyp.json')} autoPlay loop />
        </View>

      ),
      title: 'Welcome To Andre Team',
      subtitle: 'The App wher you can Learn All About Trading',
    },

    {
        backgroundColor: '#14213d',
        image: (
  
         <View style={styles.lottie}>
                    <LottieView style={styles.EfImg} source={require('../assets/animation/Animation - 1697545041635.json')} autoPlay loop />

         </View>
  
        ),
       
        title: 'Learn With Us',
        subtitle: 'on this app you can find all about Trading free Course , and Traders chat , Learn from other Traders',
        subTitleStyles:{color:"#e5e5e5"}
      },

      { 
        backgroundColor: '#000000',
        image: (
  
         <View style={styles.lottie}>
        <LottieView style={styles.EfImg} source={require('../assets/animation/Animation - 1697545142821.json')} autoPlay loop />

         </View>
  
        ),
        title:'Important News ' ,
        subtitle : 'All last news you can find here', subTitleStyles:{color:"#fca311"}
        
      
      },
    
  ]}
/>

    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({

    Container:{
        flex: 1,
        backgroundColor:"white"
    },

    EfImg:{
        width: 400 , 
        height:300,
    },

    lottie:{
        height:width ,
        width: width*0.9 ,
      
    }


})