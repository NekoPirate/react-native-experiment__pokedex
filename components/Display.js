import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ActivityIndicator, Dimensions, Animated, Easing, StyleSheet, Text, View, Pressable, Image, ScrollView, FlatList } from 'react-native';

import Led from './Led'
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


const Display = React.memo(({
    size,
    animatedValue,
    currentPokemon = null,
    onPress
}) => {


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

    //:::::::::::::::::::::::::::::::
    console.log('RENDER DISPLAY_BIG')
    //:::::::::::::::::::::::::::::::
    return (
        <View style={[
            { width: size, height: size },
            { justifyContent: 'center', alignItems: 'center' }
        ]}>
            {/* BACKGROUND::::BACKGROUND::::BACKGROUND::::BACKGROUND::::BACKGROUND::::BACKGROUND:::: */}
            {/*  DISPLAY FRAME  */}
            <Image source={DISPLAY} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />


            {/* CONTENT::::CONTENT::::CONTENT::::CONTENT::::CONTENT::::CONTENT:::: */}
            {/*  LED  */}
            <View style={{ width: size * .12, position: 'absolute', top: size * .05, flexDirection: 'row', justifyContent: 'space-between' }} >
                <Led size={size * .025} color={'red'} />
                <Led size={size * .025} color={'red'} />
            </View>


            {/*  SCREEN  */}
            <View View style={
                [
                    { justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
                    { width: '68.5%', height: '68.5%', borderRadius: 5 },
                    { position: 'absolute', top: '11.5%' },
                    { padding: size * .03 },
                    // { backgroundColor: '#ff0' },
                ]} >
                <Animated.View style={[
                    { justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
                    { width: '100%', height: '100%', borderRadius: 5 },
                    { backgroundColor: '#111', },
                    { transform: [{ scaleX: scaleSquareX }, { scaleY: scaleSquareY }] }
                ]}>


                    {
                        (currentPokemon)
                            ? <View style={[
                                { width: '100%', height: '100%' },
                                { position: 'absolute' },
                                { backgroundColor: currentPokemon.color },
                                { justifyContent: 'center', alignItems: 'center' },

                            ]} >
                                <View style={[
                                    { width: '100%', height: '100%' },
                                    { position: 'absolute' },
                                    { backgroundColor: '#ffffffaa' },

                                ]} />
                                <Image
                                    source={{ uri: currentPokemon.artwork }}
                                    resizeMode={'cover'}
                                    style={[
                                        { width: '90%', height: '90%' },
                                        { position: 'absolute' },
                                    ]} />
                            </View>
                            : <ActivityIndicator size={120} color="#ffffff55" />
                    }
                </Animated.View>


                {/*  ON / OFF animation  */}
                {/*  circle  */}
                <Animated.View pointerEvents='none' style={[
                    { width: 20, height: 20, borderRadius: 20 },
                    { position: 'absolute' },
                    { backgroundColor: '#fff' },
                    { opacity: circleFade },
                    { transform: [{ scaleX: scaleCircleX }, { scaleY: scaleCircleY }] }
                ]} />
                {/*  square  */}
                <Animated.View pointerEvents='none' style={[
                    { width: '100%', height: '100%' },
                    { position: 'absolute' },
                    { backgroundColor: '#fff' },
                    { opacity: squareFade },

                    { transform: [{ scaleX: scaleSquareX }, { scaleY: scaleSquareY }] }
                ]} />

                <ReflexScreen />

            </View >

            {/*  SPEECH  BUTTON  */}
            {/* < View style={
                [
                    { position: 'absolute', bottom: size * .09, left: size * .187 },
                ]} >
                <CustomBTN
                    width={size * .09} height={size * .09} borderRadius={size * .09} color={COLOR_RED} isActive={true}
                    onPress={onPress}
                />
            </ View> */}

            <Speaker size={size} />

        </View >
    )
})
export default Display

const ReflexScreen = React.memo(() => {
    console.log('RRRRRRRRRREFLEX')

    return (
        <View pointerEvents='none' style={[
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
    )
})

const Speaker = React.memo(({ size }) => {
    console.log('SSSSSSSSSSPEAKERS')
    return (
        <View pointerEvents='none' style={[
            { width: size * .15, height: size * .067 },
            { position: 'absolute', bottom: size * .095, right: size * .17 }
        ]}>
            <Image source={require('../assets/img/SPEAKER3.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />
        </View>
    )
})