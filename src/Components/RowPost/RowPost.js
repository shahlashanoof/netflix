import React,{useEffect,useState} from 'react'
import './RowPost.css';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/Constants';
import YouTube from 'react-youtube';
function RowPost(props)
 {  const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },}
 const [movie, setmovie] = useState([]);
 const [urlid,setUrlId]=useState('');
 
   useEffect(() => {
     axios.get(props.url).then(response=>{
      console.log(response.data)
      setmovie(response.data.results)
    }).catch(err=>{})                       // eslint-disable-next-line
     } ,[]);
const handleMovie=(id)=>{console.log(id)
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
 if(response.data.results.length!==0){
  setUrlId(response.data.results[0])
 }
 else{
  console.log('No videos......')
 }
})
}
  return (
   
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {
          movie.map((obj)=>
<img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
          
          )
           
          }
        </div>
      {urlid && <YouTube videoId={urlid.key} opts={opts} />}
    </div>
    
  )
}

export default RowPost