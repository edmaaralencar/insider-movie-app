import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'
import { Container, ListMovies } from './styles'

import { getMoviesSave, deleteMovie } from '../../utils/storage'
import FavoriteItem from '../../components/FavoriteItem'

import { useNavigation, useIsFocused } from '@react-navigation/native'

const Movies = () => {
    const navigation = useNavigation()
    const isFocused = useIsFocused()

    const [movies, setMovies] = useState([])

    useEffect(() => {
        let isActive = true
        
        const getFavoritesMovies = async () => {
            const result = await getMoviesSave('@primereact')

            if (isActive) {
                setMovies(result)
            }
        }

        if (isActive) {
            getFavoritesMovies()
        }

        return () => {
            isActive = false
        }

    }, [isFocused])

    const handleDelete = async (id) => {
        const result = await deleteMovie(id)
        setMovies(result)
    }

    const navigateDetailsPage = item => {
        navigation.navigate('Detail', { id: item.id })
    }

    return (
        <Container>
            <Header title="Meus Filmes" />
    
            <ListMovies 
                showsVerticalScrollIndicator={false}
                data={movies}
                keyExtractor={item => String(item.id)}
                renderItem={ ({ item }) => (
                    <FavoriteItem 
                        data={item} 
                        deleteMovie={handleDelete} 
                        navigatePage={() => navigateDetailsPage(item)}
                    />
                )}
            />
        </Container> 
    )
}

export default Movies
