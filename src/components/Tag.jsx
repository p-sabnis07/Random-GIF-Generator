import React, { useState } from 'react'
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);
    const [tag, setTag] = useState('');

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     // console.log(output);
    //     // now, how to link this imageSource to the gif then,
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     // console.log(imageSource);
    //     setLoading(false);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])

    // here we call our custom useGif hook
    const {
        gif,
        loading,
        fetchData
    } = useGif(tag);  //we passed here a tag because we passed a tag to useGif custom hook

  return (
    <div className='w-1/2 bg-blue-500 border border-red-500 rounded-lg flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
        {
            loading ? (<Spinner />) : ( <img src={gif} alt="Gif" width='450' /> )
        }
        <input className='mb-[2px] w-10/12 bg-slate-100 rounded-lg text-lg py-2 text-center' onChange={(event) => setTag(event.target.value)} type="text" value={tag} />
        <button className='mb-[20px] w-10/12 bg-slate-300 rounded-lg text-lg py-2 font-bold uppercase' onClick={() => fetchData(tag)}>Generate</button>
    </div>
  )
}

export default Tag;