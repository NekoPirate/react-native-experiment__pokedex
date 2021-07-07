import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, Animated, Text, View, Pressable, Image, ScrollView } from 'react-native';

import Page from './Page'
import DisplayBig from './DisplayBig'
import DisplayGreen from './DisplayGreen'
import Led from './Led'
import CrossPad from './CrossPad'
import CustomBTN from './CustomBTN';

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

const SPEED = 750



const ScreenLeft = ({ animationValue }) => {


    const translateShadow = animationValue.interpolate({
        inputRange: [0, 0.2, 1],
        outputRange: [0, 0, SCREEN_WIDTH * 1.2]
    })

    const shadowFadeInOut = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [.9, 0]
    })


    const getShadowAnimatedStyle = () => {
        let transform = {
            opacity: shadowFadeInOut,
            transform: [{ translateX: translateShadow }]
        }
        return transform
    }


    console.log('RENDER LEFT')
    return (
        <Page width={SCREEN_WIDTH}>


            {/* BACKGROUND::::BACKGROUND::::BACKGROUND::::BACKGROUND::::BACKGROUND::::BACKGROUND:::: */}

            {/*  PDX0  */}
            <View style={[
                { width: SCREEN_WIDTH, height: '100%', position: 'absolute' },
                { justifyContent: 'flex-start', alignItems: 'center' },
                // { backgroundColor: '#333' }
            ]}>

                <Image source={require('../assets/img/PDX0.png')} style={styles.IMG} resizeMode={'stretch'} />
            </View>


            {/* CONTENT::::CONTENT::::CONTENT::::CONTENT::::CONTENT::::CONTENT:::: */}
            <View style={[
                { width: SCREEN_WIDTH * .9, flex: 1, },
                { marginTop: SCREEN_WIDTH * .42, marginBottom: GAP * 1.3, marginLeft: GAP / 2 },
                // { backgroundColor: '#ff0' },
            ]}>


                <View style={{ height: GAP }} />


                {/*  DISPLAY  */}
                <View style={[styles.CENTER, { width: '100%' }]}>
                    <DisplayBig>

                        <Image source={require('../assets/img/pika_big.png')} style={{ width: '100%', height: '100%', position: 'absolute', backgroundColor: 'orange' }} resizeMode={'cover'} />
                        {/* <Image source={require('../assets/img/noise.gif')} style={{ width: '100%', height: '100%', position: 'absolute' }} resizeMode={'contain'} /> */}

                    </DisplayBig>
                </View>




                {/*  SPEAKER  */}
                {/* 
                <View style={[
                    { width: 75, height: 50 },
                    { position: 'absolute', top: -(50 - GAP / 2), right: GAP }
                ]}>
                    <Image source={require('../assets/img/SPEAKER2.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />

                </View> */}
                <View style={[
                    { width: 50, height: 20 },
                    { position: 'absolute', top: SCREEN_WIDTH * .805, right: GAP * 3.2 }
                ]}>
                    <Image source={require('../assets/img/SPEAKER3.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />

                </View>


                {/*  UNKNOW BUTTON  */}
                {/* 
                <View style={[
                    { position: 'absolute', top: SCREEN_WIDTH * .78, left: GAP * 3.2 },
                ]} >
                    <CustomBTN width={30} height={30} borderRadius={40} color={COLOR_RED} isActive={true} onPress={() => setIsDisplayON(isDisplayON => isDisplayON)} />


                </View>

                <View style={{ height: GAP * .4 }} /> */}



                <View style={[
                    { width: '100%', flex: 1 },
                    { flexDirection: 'row' },
                ]}>
                    <View style={[
                        { width: '50%', flex: 1 },
                        { justifyContent: 'flex-start', alignItems: 'center' },
                        // { backgroundColor: 'pink' }
                    ]}>



                        {/* GREEN-DISPLAY */}
                        <View style={[
                            { flex: 1, width: '100%', },
                            { justifyContent: 'space-around', alignItems: 'center' },
                            { paddingTop: 50 + GAP },
                            // { position: 'absolute', left: 0 }
                        ]}>

                            <DisplayGreen>
                                <Image source={require('../assets/img/pika_small.png')} style={styles.IMG} resizeMode={'cover'} />
                            </DisplayGreen>
                        </View>

                        {/* FLAT-BUTTONS */}
                        <View style={[
                            { width: '120%' },
                            { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
                            { position: 'absolute', left: 0 }]}>

                            <CustomBTN width={50} height={50} borderRadius={50} color={'#444'} isActive={true} onPress={() => null} />
                            <CustomBTN width={50} height={20} borderRadius={10} color={COLOR_RED} isActive={true} onPress={() => alert('RED BUTTON')} />
                            <CustomBTN width={50} height={20} borderRadius={10} color={COLOR_BLUE} isActive={true} onPress={() => alert('BLUE BUTTON')} />

                        </View>
                    </View>

                    <View style={[styles.CENTER, { width: '50%', flex: 1 }]}>
                        {/* CROSS-PAD */}
                        <CrossPad
                            onPressLeft={() => null}
                            onPressTop={() => null}
                            onPressRight={() => null}
                            onPressBottom={() => null} />
                    </View>
                </View>
            </View>


            {/* 
            COVER SHADOW:
            
            this shadow covers all CONTENT while the COVER animation is active*/}
            <Animated.View pointerEvents='none'
                style={[
                    styles.FULSCREEN,
                    { position: 'absolute' },
                    { backgroundColor: COLOR_SHADOW },
                    getShadowAnimatedStyle()

                ]} />








            {/* FOREGROUND::::FOREGROUND::::FOREGROUND::::FOREGROUND::::FOREGROUND::::FOREGROUND::::*/}

            {/*  PDX1   */}
            <View pointerEvents='none'
                style={[
                    { width: SCREEN_WIDTH, height: '100%', position: 'absolute', top: 0, botto: 0, left: 0, right: 0 },
                    { justifyContent: 'space-between', alignItems: 'center' },
                    // { backgroundColor: '#333' }
                ]}>

                <Image source={require('../assets/img/PDX1_A.png')} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * .5 }} resizeMode={'stretch'} />
                <Image source={require('../assets/img/PDX1_B.png')} style={{ flex: 1, width: SCREEN_WIDTH, }} resizeMode={'stretch'} />
                <Image source={require('../assets/img/PDX1_C.png')} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * .5 }} resizeMode={'stretch'} />

            </View>


            {/* BIG BLUE LED------------------------------------------- */}
            <View style={{ position: 'absolute', top: GAP, left: GAP }}>

                <Led
                    size={65}
                    colorA={COLOR_BLUE}
                    colorB={COLOR_BLUE_LIGHT}
                    border={true}
                    pulse={true}
                    shiny={true}
                    speed={500}
                    pos={'absolute'}
                    top={GAP}
                    left={GAP} />

            </View>


            {/* SMALL LEDS------------------------------------------- */}
            <View style={[
                { width: 80, height: 30 },
                { position: 'absolute', top: GAP * 1.5, left: (SCREEN_WIDTH / 2) - 40 },
                { flexDirection: 'row', justifyContent: 'space-between' },
            ]}>

                <Led size={21} colorA={COLOR_RED} colorB={COLOR_RED_LIGHT} speed={100} />
                <Led size={21} colorA={COLOR_GOLD} colorB={COLOR_GOLD_LIGHT} speed={100} />
                <Led size={21} colorA={COLOR_GREEN} colorB={COLOR_GREEN_LIGHT} speed={100} />

            </View>








        </Page >
    )
}

export default React.memo(ScreenLeft)

const styles = StyleSheet.create({
    FULSCREEN: {
        width: SCREEN_WIDTH, height: '100%'
    },
    CENTER: {
        justifyContent: 'center', alignItems: 'center'
    },
    IMG: {
        width: '100%', height: '100%'
    }

});

