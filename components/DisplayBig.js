import React, { useEffect, useRef } from 'react';
import { Dimensions, Animated, Easing, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import Led from './Led'
const COLOR_SHADOW = '#00000066'
const COLOR_GREEN = '#4fa95f'

const COLOR_RED = '#dc1830'
const COLOR_RED_LIGHT = '#f6a9b2'
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
    return (
        <View style={[
            { width: SCREEN_WIDTH * .75, height: (SCREEN_WIDTH * .75) },
            { position: 'absolute', left: SCREEN_WIDTH * .1, top: SCREEN_WIDTH * .53 },
            { justifyContent: 'center', alignItems: 'center' }
        ]}>
            <Image source={require('../assets/img/display_frame.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />

            <View style={{ width: 50, position: 'absolute', top: 19, flexDirection: 'row', justifyContent: 'space-between' }} >

                <Led size={12} colorA={COLOR_RED} colorB={COLOR_RED_LIGHT} speed={160} />
                <Led size={12} colorA={COLOR_RED} colorB={COLOR_RED_LIGHT} speed={160} />

            </View>


            {/* <Led
                size={25}
                color={'red'}
                pos={'absolute'}
                bottom={14}
                left={50}
            /> */}

            {/* SCREEN */}
            <View View style={
                [
                    { position: 'absolute', width: '68%', height: '68%' },
                    { backgroundColor: '#333', overflow: 'hidden' },
                    { borderRadius: 15, borderColor: '#54353a', borderWidth: 4 },
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
export default DisplayBig