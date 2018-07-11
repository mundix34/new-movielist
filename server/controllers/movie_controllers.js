let movies = [];
let id = 0;
const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
module.exports = {
    all:(res,req)=>{
        let promise=axios.get(baseUrl);
        promise.then((res)=>{
            // cons
            movies=res.data.results;
             res.status(200).json({data:movies})
        })
    },
    create:(req,res) =>{
        console.log(req.body);
        
        const{ title, genre, year, rating }=req.body;
        movies.push({ id, title, genre, year, rating });
        id++;
        console.log(movies);
        
        res.status(200).send(movies)
    },
read: (req, res) => {
    // axios.get('url').then((response) => {
    //     console.log(response.data)
    //     res.send(response.data);
    // })
    res.status(200).send(movies)
},
update: (req,res) => {
    let updateId = Number(req.params.id);
    // console.log(updateId);
    
    let movieIndex=movies.findIndex(movie =>  movie.id===updateId)
    console.log(movieIndex);
    if(movieIndex === -1){
        return res.status(404).send(movies)
    }
    
    let movie = movies[movieIndex];
    
    movies[movieIndex] = {
        id: movie.id,
        title: req.body.title || movie.title,
        genre: req.body.genre || movie.genre,
        year : req.body.year || movie.year,
        rating: req.body.rating || movie.rating

    }
    console.log(movies);
    
    res.status(200).send(movies);

},
delete: (req, res) => {
    let deleteId = Number(req.params.id);
    let movieIndex = movies.findIndex( movie => movies.id === deleteId)
    // if(movieIndex === -1){
    //     return res.status(404).send(movies)
    // }
    movies.splice(movieIndex, 1)
    res.status(200).send(movies)

}

}