import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
    // const [gif, setGif] = useState('');
    // const [loading, setLoading] = useState(false);

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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
    } = useGif();

  return (
    <div className='w-1/2 bg-green-500 border border-red-500 rounded-lg flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className=' mt-[15px] text-2xl underline uppercase font-bold'>A Random Gif</h1>
        {
            loading ? (<Spinner />) : ( <img src={gif} alt="Gif" width='450' /> )
        }
        <button className='mb-[20px] w-10/12 bg-slate-300 rounded-lg text-lg py-2 font-bold uppercase' onClick={() => fetchData()}>Generate</button>
    </div>
  )
}

export default Random;