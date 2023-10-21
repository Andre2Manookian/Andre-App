import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryTextslider from './Components/CategoryTextslider'
import Colors from '../Shared/Colors'
import TopHeadlinSlider from './Components/TopHeadlinSlider'
import HeadlineList from './Components/HeadlineList'
import GlobalAPI from '../Services/GlobalAPI'

const News = () => {

  const [newsList , setNewsList]=useState([])

     useEffect(()=>{
        //getTopHeadline();
        getnewsbycategory

     },[])

     const getnewsbycategory=async(category)=>{
         const result=(await GlobalAPI.getbycategoy(category)).data;
         console.log(result)
         setNewsList(result.articles)
     }



  return (
    <ScrollView>
     
     

     {/*Category List*/}

     <CategoryTextslider selectcategory={(category)=>getnewsbycategory(category)}     />


       {/*Top headline slider  */}

       <TopHeadlinSlider  newsList={newsList}/>

       {/*Headlist */}

       <HeadlineList   newsList={newsList}/>
       
    
    </ScrollView>
  )
}

export default News

const styles = StyleSheet.create({

NewsName:{
  fontSize:24 , 
  fontWeight:'bold',
  color: Colors.primary,
}


})