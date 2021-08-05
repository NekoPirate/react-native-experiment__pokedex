import React from 'react';
import { Dimensions, View, Image } from 'react-native';

import Led from './Led'
import Background from './Background'

const PDX0 = require('../assets/img/PDX0.png')
// const PDX0_B = require('../assets/img/PDX0_B.png')
// const PDX0_C = require('../assets/img/PDX0_C.png')

const COLOR_RED = '#c2133a'
const COLOR_GOLD = '#f5c912'
const COLOR_GREEN = '#4fa95f'
const COLOR_BLUE = '#11709e'

const SCREEN_WIDTH = Dimensions.get('screen').width
const GAP = SCREEN_WIDTH * .05

const PdxHeader = ({ isOpen, isSpeaking }) => {
    console.log('RENDER HEADER')
    return (
        <>

            <Background imgA={PDX0} />


            {/* BIG BLUE LED------------------------------------------- */}

            <Led
                size={GAP * 3.7}
                color={COLOR_BLUE}
                border={true}
                pulse={isSpeaking ? true : false}
                shiny={true}
                speed={100}
                pos={'absolute'}
                top={GAP * 2}
                left={GAP * 2} />



            {/* SMALL LEDS------------------------------------------- */}
            <View style={[
                { width: 80, height: 30 },
                { position: 'absolute', top: GAP * 1.5, left: (SCREEN_WIDTH / 2) - 40 },
                { flexDirection: 'row', justifyContent: 'space-between' },
            ]}>

                <Led size={GAP * 1.15} color={COLOR_RED} pulse={isOpen} shiny={false} holeSize={GAP * 1.35} speed={8000} />
                <Led size={GAP * 1.15} color={COLOR_GOLD} pulse={isOpen} shiny={false} holeSize={GAP * 1.35} speed={2000} />
                <Led size={GAP * 1.15} color={COLOR_GREEN} pulse={isOpen} shiny={false} holeSize={GAP * 1.35} speed={500} />

            </View>
        </>
    )
}

export default React.memo(PdxHeader)
