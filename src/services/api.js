import axios from 'axios'

// URL ILMES EM CARTAZ:
// movie/now_playing &language=pt-BR&page=1

export const key = 'd12bbe1c88d1d4d4ef55ea3e8fbcb739'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api