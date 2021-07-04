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
    return (

        <Page width={SCREEN_WIDTH - GAP} >

            {/* BACKGROUND IMAGE------------------------------------------- */}
            <View style={[
                { width: SCREEN_WIDTH, height: '100%', position: 'absolute' },
                { justifyContent: 'center', alignItems: 'center' },
                // { backgroundColor: '#ff0' },
            ]}>

                <Image source={require('../assets/img/PDX2.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />
            </View>
        </Page>

    )
}

export default ScreenRight