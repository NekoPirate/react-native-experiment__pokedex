import React, { useEffect, useRef } from 'react';
import { Dimensions, Animated, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import Page from './Page'
import DisplayBig from './DisplayBig'
import DisplayGreen from './DisplayGreen'
import Led from './Led'
import FlatBTN from './FlatBTN'
import RoundBTN from './RoundBTN'
import CrossPad from './CrossPad'


import { withAnchorPoint } from 'react-native-anchor-point'

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
const HINGE_WIDTH = GAP
const ScreenRight = () => {

    console.log('RENDER RIGHT')
    return (

        <Page width={SCREEN_WIDTH - GAP} >

            {/*  PDX2  */}
            <View pointerEvents='none'
                style={[
                    { width: SCREEN_WIDTH, height: '100%', position: 'absolute', top: 0, botto: 0, left: 0, right: 0 },
                    { justifyContent: 'space-between', alignItems: 'center' },
                    // { backgroundColor: '#333' }
                ]}>

                <Image source={require('../assets/img/PDX2_A.png')} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * .5 }} resizeMode={'stretch'} />
                <Image source={require('../assets/img/PDX2_B.png')} style={{ flex: 1, width: SCREEN_WIDTH, }} resizeMode={'stretch'} />
                <Image source={require('../assets/img/PDX2_C.png')} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * .5 }} resizeMode={'stretch'} />

            </View>
        </Page>

    )
}

export default React.memo(ScreenRight)