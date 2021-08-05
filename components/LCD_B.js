import React, { useState, useRef, useEffect } from 'react';
import {
    Dimensions,
    Animated,
    Easing,
    View,
    Text,
    Image,
    ScrollView,
    ActivityIndicator,

} from 'react-native';
//-------------------------------------------------
import LCD from './LCD'
//-------------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width

const LCD_B = React.memo(({
    textSizeValue,
    currentPokemon = null,
    toggleLcdAnimationValue,
}) => {
    //:::::::::::::::::::::::::::
    console.log('RENDER LCD_B')
    // console.log(currentPokemon.description)
    //:::::::::::::::::::::::::::
    return (
        <LCD animatedValue={toggleLcdAnimationValue}>

            {
                (currentPokemon)
                    ?
                    <View style={{ paddingHorizontal: 10, width: '100%', flex: 1, padding: 5, justifyContent: 'flex-start' }}>
                        {/* :::::::::::::::::::::::::::::::::::::::::::::: */}
                        <View style={{ borderBottomColor: '#111', borderBottomWidth: 3, opacity: .8, marginBottom: 5 }}>
                            <Animated.Text style={[
                                { textAlign: 'left' },
                                { fontSize: textSizeValue + textSizeValue * .3, fontFamily: 'lcd' },
                                { color: '#111', },
                            ]}>{`n°${currentPokemon.id < 10 ? `00${currentPokemon.id}` : ''}${(currentPokemon.id >= 10 && currentPokemon.id < 100) ? `0${currentPokemon.id}` : ''}${currentPokemon.id >= 100 ? currentPokemon.id : ''} ${currentPokemon.name}`}</Animated.Text>
                        </View>
                        <Animated.Text style={[
                            { textAlign: 'left' },
                            { fontSize: textSizeValue, fontFamily: 'lcd' },
                            { color: '#111', opacity: .8 },
                        ]}>{currentPokemon.description}</Animated.Text>
                        {/* :::::::::::::::::::::::::::::::::::::::::::::: */}
                    </View>
                    : <ActivityIndicator size={40} color={'#222'} />
            }


        </LCD >

    )
})

export default LCD_B
