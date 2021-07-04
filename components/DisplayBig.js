import React, { useEffect, useRef } from 'react';
import { Dimensions, Animated, Easing, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import Led from './Led'
import RoundBTN from './RoundBTN'

const COLOR_SHADOW = '#543539Df'
const COLOR_OUTLINE = '#54353a'


const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const GAP = SCREEN_WIDTH * .05









const DisplayBig = ({ children }) => {

    const transition_value = useRef(new Animated.Value(0)).current

    const oldScreenAnimation = () => {
        Animated.loop(
            Animated.timing(transition_value, {
                toValue: 100,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            -1).start()
    }
    useEffect(() => oldScreenAnimation(), [])

    console.log('RENDER DISPLAY_BIG')

    return (
        <View style={[
            { width: SCREEN_WIDTH - (GAP * 3), height: SCREEN_WIDTH - (GAP * 3) },
            { justifyContent: 'center', alignItems: 'center' }
        ]}>

            <Image source={require('../assets/img/frame.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />

            <View style={{ width: 50, position: 'absolute', top: 19, flexDirection: 'row', justifyContent: 'space-between' }} >

                <Led size={6} colorA={'#aaa'} colorB={'#fff'} speed={160} pulse={true} shiny={true} />
                <Led size={6} colorA={'#aaa'} colorB={'#fff'} speed={160} pulse={true} shiny={true} />
                <Led size={6} colorA={'#aaa'} colorB={'#fff'} speed={160} pulse={true} shiny={true} />
                <Led size={6} colorA={'#aaa'} colorB={'#fff'} speed={160} pulse={true} shiny={true} />

            </View>


            {/* SCREEN */}
            <View View style={
                [
                    { position: 'absolute', width: '68%', height: '68%' },
                    { justifyContent: 'center', alignItems: 'center' },
                    { backgroundColor: '#333', overflow: 'hidden' },
                    { borderRadius: 15, paddingLeft: 5 },
                    { borderLeftWidth: 4, borderTopWidth: 4 },
                    { borderRightWidth: 3, borderBottomWidth: 3 },

                    { borderColor: COLOR_OUTLINE }
                ]} >
                {children}

                {/* < Animated.Image source={require('../assets/img/screen_texture5.jpg')} style={[
                    { width: '100%', height: '300%', position: 'absolute', bottom: 0, opacity: .05 },
                    {
                        transform: [
                            {
                                translateY: transition_value
                            }
                        ]
                    }
                ]} resizeMode={'stretch'} /> */}
                <View style={{ position: 'absolute', left: -5, top: -5, width: '150%', height: '150%', borderColor: '#00000066', borderWidth: 10, borderRadius: 20 }} pointerEvents='none' />
            </View>

        </View >

    )
}
export default React.memo(DisplayBig)