const API_KEY = process.env.API_KEY 


export default {
    fetchTrending :{
        title:"Trending",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTopRated :{
        title:"Top Rated",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchActionMovies :{
        title:"Action",
        url:`/trending/all/week?api_key=${API_KEY}&with_genres=2B`
    },
    fetchComedyMovies :{
        title:"Comedy",
        url:`/trending/all/week?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorrorMovies :{
        title:"Horror",
        url:`/trending/all/week?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies :{
        title:"Romance",
        url:`/trending/all/week?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery :{
        title:"Mystery",
        url:`/trending/all/week?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi :{
        title:"Sci-Fi",
        url:`/trending/all/week?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern :{
        title:"Western",
        url:`/trending/all/week?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation :{
        title:"Animation",
        url:`/trending/all/week?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV :{
        title:"TV Movie",
        url:`/trending/all/week?api_key=${API_KEY}&with_genres=10770`
    }
}