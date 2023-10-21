import { create } from "apisauce";




const api = create({
    baseURL: 'https://newsapi.org/v2',
  })

  apiKey= '?country=us&apiKey=444e35ae431341a58321957ddb9dd2b6';

  const getTopHeadline=api.get('/top-headlines'+apiKey)
  const getbycategoy=(category)=>api.get('/everything?q='+category+"&apiKey=444e35ae431341a58321957ddb9dd2b6")


export default{
    getTopHeadline,
    getbycategoy, 
}