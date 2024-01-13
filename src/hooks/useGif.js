// creating custom hook
import { useEffect, useState } from 'react'
import  axios  from 'axios';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

const useGif = () => {
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    // const [tag, setTag] = useState('');  //we don't need the tag also

    async function fetchData(tag) {
        setLoading(true);
        // const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
        // if the tag is passed then use tagMemeUrl and if the tag is false then use randomMemeUrl
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
        // console.log(output);
        // now, how to link this imageSource to the gif then,
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        // console.log(imageSource);
        setLoading(false);
    }

    useEffect(() => {
        fetchData();
    }, [])
//   while creating custom hooks we don't need the jsx code

// we need to use useGif custom hook hence we have to return the some values
    return {
        gif,
        loading,
        fetchData
    }
}

export default useGif;