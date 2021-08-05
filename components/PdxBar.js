import React from 'react';
import { Dimensions, View, Image } from 'react-native';
import Background from './Background'
const PDX_BAR_A = require('../assets/img/PDX_BAR_A.png')
const PDX_BAR_B = require('../assets/img/PDX_BAR_B.png')
const PDX_BAR_C = require('../assets/img/PDX_BAR_C.png')
const SCREEN_WIDTH = Dimensions.get('screen').width
const GAP = SCREEN_WIDTH * .05

const PdxBar = () => {
    console.log('RENDER BAR')
    return (

        <Background
            imgA={PDX_BAR_A}
            imgB={PDX_BAR_B}
            imgC={PDX_BAR_C}
            size={GAP * 2}
            left={SCREEN_WIDTH - GAP}
        />
    )
}

export default React.memo(PdxBar)