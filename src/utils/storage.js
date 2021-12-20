import AsyncStorage from "@react-native-async-storage/async-storage";

// Buscar filmes salvos

export const getMoviesSave = async (key) => {
    const myMovies = await AsyncStorage.getItem(key)

    let moviesSave = JSON.parse(myMovies) || []

    return moviesSave
}

// Salvar filme
export const saveMovie = async (key, newMovie) => {
    let moviesStored = await getMoviesSave(key)

    // Se tiver algum filme salvo com esse mesmo i d, precisamos ignorar
    const hasMovie = moviesStored.some(item => item.id === newMovie.id)

    if (hasMovie) {
        console.log('Esse filme já está na sua lista.')
        return;
    }

    moviesStored.push(newMovie)

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored))
    console.log('Filme salvo com sucesso.')
}

// Deletar algum filme específico

export const deleteMovie = async (id) => {
    let moviesStored = await getMoviesSave('@primereact')

    let myMovies = moviesStored.filter(item => {
        return (item.id !== id)
    })

    await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies))
    console.log('Filme deletado com sucesso.')
    return myMovies
}

// Filtrar se algum filme está salvo

export const hasMovie = async (movie) => {
    let moviesStored = await getMoviesSave('@primereact')
    const hasMovie = moviesStored.find(item => item.id === movie.id)

    if (hasMovie) {
        return true
    }

    return false
} 