/*
..........................................yMMd...............oMMM-..................................................................................................................
.......................:::-...............yMMd...............-///.........::-.................::-.................-::-.........::-....................-::-........-:::-......-:::-..
hMMd...dMMm...mMMs..omMMMMMNh:..-MMMydNMs.yMMd..sMMN+........+MMM...mMMmdMMMMd:.........dMMmdMMMMd:..oMMMsmMM:./dMMMMMMd+...+dMMMMNMMM+..sMMNsmMM-./dMMmmMMd/../hNMNNMMN:.-yNMMNNMMo
-NMM/.oMNMMo.+MMm..yMMm:..oMMM:.-MMMhsos/.yMMd/mMMy-.........+MMM...mMMd/:/NMMh.........dMMd:-:hMMN..oMMMysos-+MMM/../NMMo.+MMMo-.-MMM+..sMMNysos.oMMm:::oMMM-.MMMh/---+-.hMMN/:--//
.oMMm-NM+yMN-mMM/..NMMy....MMMs.-MMM/.....yMMMMMMm-..........+MMM...mMMs...hMMh.........dMMh.../MMM:.oMMM.....hMMm....dMMd.yMMN....MMM+..sMMm.....dMMNmmmmmmm:.+mMMMMMNh:.:dMMMMMNd+
..dMMmMd.-NMmMMy...yMMm-..+MMM/.-MMM/.....yMMm-sMMN+.........+MMM...mMMs...hMMh.........dMMh..:dMMm..oMMM.....+MMM/..:NMMo./MMMy//oMMM+..sMMm.....sMMN/....:o..o:-:/+NMMh.+/--:+dMMN
..:MMMM:..+MMMN-....smMMNNMMh/..-MMM/.....yMMd../NMMy........+MMM...mMMs...hMMh.........dMMNMMMMNy-..oMMM......+dMMNNMMm+.../hNMMNhMMM+..sMMm......+dMMMNNMMN.-NMMNNNMNy-.hMMNNNMMd/
...----....---........-://:......---.......---....---.........---...---.....--..........dMMh.::-......---.........://:....../o/::/yMMN-...---.........-::::.....-::::-......-:::-...
........................................................................................hNNy................................+mNMMMNds-..............................................
*/
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
//-------------------------------------------------
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
//-------------------------------------------------
import Pokedex from './components/Pokedex'
//-------------------------------------------------
const COLOR_OUTLINE = '#54353a'
//-------------------------------------------------
const getFonts = () => { // fonts
  Font.loadAsync({
    'lcd': require('./assets/fonts/Renegade-Mistress.ttf'),
    'lcdB': require('./assets/fonts/lcd-rounded.ttf'),
    'lcdC': require('./assets/fonts/lcd-small.ttf'),
  })

}
//-------------------------------------------------
const fetchPokemon = async (pokemonID) => {

  const responceDetails = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonID}/`)
  const pokemonDetails = await responceDetails.json()

  const id = pokemonDetails.id
  const color = pokemonDetails.color.name

  const name = pokemonDetails.name
  const description = pokemonDetails.flavor_text_entries[1].flavor_text.toLowerCase()
  const artwork = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonID}.png`
  const sprite_front = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonID}.png`
  const sprite_back = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonID}.png`

  return { color, id, name, description, artwork, sprite_front, sprite_back }
}
//-------------------------------------------------


const App = () => {

  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [pokemonList, setPokemonList] = useState(null)

  //  FETCH POKEMON
  //::::::::::::::::::::::::::::::
  const updatePokemon = useCallback(async () => {

    let array = []
    for (let i = 1; i <= 151; i++) {
      const newPokemon = await fetchPokemon(i)
      array = [...array, newPokemon]
      console.log(newPokemon.name)
    }
    setPokemonList(array)
    console.log('::::::::::::::::::::DATA-FETCH')


  }, [])
  //::::::::::::::::::::::::::::::
  useEffect(() => {

    updatePokemon()
  }, [])
  //::::::::::::::::::::::::::::::
  if (fontsLoaded) {



    console.log('::::RENDER APP')
    return (
      <View style={[
        { flex: 1 },
        { alignItems: 'center', justifyContent: 'center' },
        { backgroundColor: COLOR_OUTLINE },
      ]}>

        <Pokedex DATA={pokemonList} />

        <StatusBar style="auto" hidden={true} />
      </View >
    )
  }
  else {

    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={() => console.error('error')} />
    )
  }

}

export default App
