import React, { useEffect, useState, useCallback } from 'react';
import { Dimensions, StyleSheet, Animated, View, Image, FlatList, ScrollView, Text } from 'react-native';

import Page from './Page'
import DisplayBig from './DisplayBig'
import DisplayGreen from './DisplayGreen'
import CrossPad from './CrossPad'
import CustomBTN from './CustomBTN'
import pokemonDATA from '../data/pokemonDATA'

const COLOR_RED = '#c2133a'
const COLOR_RED_LIGHT = '#f6a9b2'
const COLOR_GOLD = '#f5c912'
const COLOR_GOLD_LIGHT = '#fcf0be'
const COLOR_GREEN = '#4fa95f'
const COLOR_GREEN_LIGHT = '#c1e2c7'
const COLOR_BLUE = '#11709e'
const COLOR_BLUE_LIGHT = '#d2d2d2'
const COLOR_SHADOW = '#543539Df'
const COLOR_OUTLINE = '#54353a'


const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const GAP = SCREEN_WIDTH * .05





const PokemonList = React.memo(({ DATA, pokeID }) => {
    // const [isStart, setIsStart] = useState(false)

    const [flatListRef, setFlatListRef] = useState(0)

    const renderItem = ({ item, index }) => {
        console.log(item.name)
        let id = item.id
        let name = item.name
        return (
            <View style={[
                { width: '100%', height: 20 },
                { backgroundColor: (index % 2 == 0) ? '#33333399' : '#11111199' },
                { justifyContent: 'flex-start', alignItems: 'flex-start' },
                // { paddingHorizontal: 10 }
            ]}>
                <Text style={{ color: '#ddd' }}>{`# ${id} ${name}`}</Text>
            </View>
        )
    }

    // //----------------------------------------
    const getItemLayout = (data, index) => (
        { length: 20, offset: 20 * index, index }
    )

    useEffect(() => { // SCROLL
        if (flatListRef != 0) {

            flatListRef.scrollToIndex({ animated: true, index: pokeID - 1 })
            console.log('::::SCROLL')
        }
    }, [pokeID])
    return (
        <FlatList
            // contentContainerStyle={{ width: '100%', height: '100%', }}
            // ListHeaderComponent={() => <View style={{ height: SCREEN_WIDTH * .05 }} />}
            // ListFooterComponent={() => <View style={{ height: SCREEN_WIDTH * .05 }} />}
            // ItemSeparatorComponent={() => <View style={{ height: SCREEN_WIDTH * .05 }} />}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}

            refreshing={false}

            ref={(ref) => setFlatListRef(ref)}
            getItemLayout={getItemLayout}

            data={DATA}
            keyExtractor={(item) => JSON.stringify(item.id)}

            renderItem={renderItem} />

    )
})

// export default React.memo(PokemonList)
export default PokemonList

