import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import pokemonDATA from '../data/pokemonDATA'
/*
{
        id: '',
        name: '',
        description: '',
        image: null,
    }
*/
const useFetchPokemon = () => {

    let pokemonList = []

    const updatePokemon = async () => {


        for (let i = 0; i < pokemonDATA.length - 1; i++) {
            let res = pokemonDATA.pokemon_entries[i]
            let url = res.pokemon_species.url
            let newPokemon = await fetch(url)
            let pokemonDetails = await newPokemon.json()
            const { id, color, name, flavor_text_entries } = await pokemonDetails

            pokemonList.push({
                id: await id,
                color: await color.name,
                name: await name,
                description: await flavor_text_entries[0].flavor_text,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${await id}.png`,
            })
        }



        console.log(pokemonList)
    }

    useEffect(() => {
        updatePokemon()
    }, [])

    return pokemonList
}
export default useFetchPokemon