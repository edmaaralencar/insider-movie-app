import React from 'react'

import { Ionicons } from '@expo/vector-icons'
import { Container, Title, Rate, RateContainer, ActionContainer, DetailButton, DeleteButton } from './styles'

const FavoriteItem = ({ data, deleteMovie, navigatePage }) => {
    return (
        <Container>
            <Title size={22}>{data.title}</Title>

            <RateContainer>
                <Rate>{data.vote_average}/10</Rate>
                <Ionicons name="md-star" size={12} color="#E7A74e" />
            </RateContainer>

            <ActionContainer>
                <DetailButton onPress={ () => navigatePage(data) }>
                    <Title size={14}>Ver Detalhes</Title>
                </DetailButton>

                <DeleteButton onPress={ () => deleteMovie(data.id) }>
                    <Ionicons name="trash" size={24} color="#FFF" />
                </DeleteButton>
            </ActionContainer>
        </Container>
    )
}

export default FavoriteItem
