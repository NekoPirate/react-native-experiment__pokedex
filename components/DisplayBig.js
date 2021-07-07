import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Dimensions, Animated, Easing, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import Led from './Led'
import RoundBTN from './RoundBTN'
import CustomBTN from './CustomBTN';
import DISPLAY from '../assets/img/DISPLAY.png'
const COLOR_SHADOW = '#543539Df'
const COLOR_OUTLINE = '#54353a'
const COLOR_RED = '#c2133a'

const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const GAP = SCREEN_WIDTH * .05

// const DISPLAY = require('../assets/img/DISPLAY.png')


const SPEED = 600


const DisplayBig = ({ children }) => {
    const [isDisplayON, setIsDisplayON] = useState(false)


    const animatedValue = useRef(new Animated.Value(0)).current



    const turnOnAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: SPEED,
            useNativeDriver: true,
        }).start()
        // setIsDisplayON(isDisplayON => !isDisplayON)

        console.log('on animation')
    }
    const turnOffAnimation = () => {
        Animated.timing(animatedValue, {
            toValue: 0,
            duration: SPEED,
            useNativeDriver: true,
        }).start()
        // setIsDisplayON(isDisplayON => !isDisplayON)

        console.log('off animation')

    }

    const scaleCircleX = animatedValue.interpolate({
        inputRange: [0, .3, .4, 1],
        outputRange: [0, 5, .4, 0]
    })
    const scaleCircleY = animatedValue.interpolate({
        inputRange: [0, .3, .4, 1],
        outputRange: [0, .5, .3, 0]
    })
    const scaleSquareX = animatedValue.interpolate({
        inputRange: [0, .4, .5, .6, 1],
        outputRange: [0, 0, .1, 1, 1]
    })
    const scaleSquareY = animatedValue.interpolate({
        inputRange: [0, .4, .6, .8, 1],
        outputRange: [0, 0, .0, .1, 1]
    })
    const circleFade = animatedValue.interpolate({
        inputRange: [0, .1, .9, 1],
        outputRange: [0, 0, 1, 0]
    })
    const squareFade = animatedValue.interpolate({
        inputRange: [0, .1, .9, 1],
        outputRange: [0, 1, 1, 0]
    })

    const handle_OnOff = () => {

        setIsDisplayON(isDisplayON => !isDisplayON)
    }

    useEffect(() => {

        isDisplayON
            ? turnOnAnimation()
            : turnOffAnimation()

    }, [isDisplayON])

    console.log('RENDER DISPLAY_BIG')
    return (
        <View style={[
            { width: SCREEN_WIDTH - (GAP * 2), height: SCREEN_WIDTH - (GAP * 2) },
            { justifyContent: 'center', alignItems: 'center' }
        ]}>

            {/*  DISPLAY FRAME  */}
            <Image source={DISPLAY} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />


            {/*  LED  */}
            <View style={{ width: 40, position: 'absolute', top: 18, flexDirection: 'row', justifyContent: 'space-between' }} >
                <Led size={8} colorA={'red'} colorB={'#fff'} speed={150} pulse={isDisplayON ? true : false} shiny={isDisplayON ? true : false} />
                <Led size={8} colorA={'red'} colorB={'#fff'} speed={150} pulse={isDisplayON ? true : false} shiny={isDisplayON ? true : false} />
            </View>


            {/*  SCREEN  */}
            <View View style={
                [
                    { justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
                    { width: '68.5%', height: '68.5%', borderRadius: 5 },
                    { position: 'absolute', top: '11.5%' },
                    { padding: 10 },

                ]} >
                {/*  CONTENT  */}
                <Animated.View style={[
                    { justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
                    { width: '100%', height: '100%', borderRadius: 5 },
                    { backgroundColor: '#111', },
                    { transform: [{ scaleX: scaleSquareX }, { scaleY: scaleSquareY }] }

                ]}>
                    {
                        isDisplayON
                            ? children
                            : <View style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'pink', opacity: .2 }} />
                    }
                </Animated.View>


                {/*  ON / OFF animation  */}
                {/*  circle  */}
                <Animated.View style={[
                    { width: 20, height: 20, borderRadius: 20 },
                    { position: 'absolute' },
                    { backgroundColor: '#fff' },
                    { opacity: circleFade },
                    { transform: [{ scaleX: scaleCircleX }, { scaleY: scaleCircleY }] }
                ]} />
                {/*  square  */}
                <Animated.View style={[
                    { width: '100%', height: '100%' },
                    { position: 'absolute' },
                    { backgroundColor: '#fff' },
                    { opacity: squareFade },

                    { transform: [{ scaleX: scaleSquareX }, { scaleY: scaleSquareY }] }
                ]} />



                {/*  REFLEX  */}
                <View style={[
                    { width: '98%', height: '98%', borderRadius: 5, overflow: 'hidden' },
                    { position: 'absolute' },

                ]}>
                    <Image
                        source={require('../assets/img/reflex.png')}
                        resizeMode={'stretch'}
                        style={[
                            { width: '100%', height: '100%', borderRadius: 10, overflow: 'hidden' },
                            { transform: [{ translateX: 10 }, { translateY: 10 }, { scale: 1.7 }] },
                            { opacity: .3 },
                        ]} />
                </View>


            </View>

            {/*  ON / OFF  BUTTON  */}
            <View style={[
                { position: 'absolute', bottom: SCREEN_WIDTH * .085, left: GAP * 3.2 },
            ]} >
                <CustomBTN
                    width={30} height={30} borderRadius={30} color={COLOR_RED} isActive={true}
                    onPress={() => handle_OnOff()}
                />
            </View>

            {/*  SPEAKER  */}
            <View style={[
                { width: 50, height: 20 },
                { position: 'absolute', bottom: SCREEN_WIDTH * .085, right: GAP * 3.2 }
            ]}>
                <Image source={require('../assets/img/SPEAKER3.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />
            </View>


        </View >
    )
}
export default React.memo(DisplayBig)