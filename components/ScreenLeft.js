import React, { useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, Animated, Text, View, Pressable, Image, ScrollView } from 'react-native';

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

const SPEED = 750
const ScreenLeft = ({ isOpen, onPressToggleOpen }) => {

    const animationValue = useRef(new Animated.Value(0)).current

    const translateShadow = animationValue.interpolate({
        inputRange: [0, 0.2, 1],
        outputRange: [0, 0, SCREEN_WIDTH * 1.2]
    })

    const shadowFadeInOut = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [.9, 0]
    })

    const openCover = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', `180deg`]
    })

    const fadeCover = animationValue.interpolate({
        inputRange: [0, 0.9, 1],
        outputRange: [1, 1, 0]
    })

    const getCoverAnimatedStyle = () => {
        let transform = {
            opacity: fadeCover,
        }
        return transform;
    }

    const getCoverSpecialAnimatedStyle = () => {
        let transform = {
            transform: [{ rotateY: openCover }, { perspective: 15000 }]
        }
        return withAnchorPoint(transform, { x: 1, y: 1 }, { width: SCREEN_WIDTH, height: SCREEN_HEIGHT });
    }

    const getShadowAnimatedStyle = () => {
        let transform = {
            opacity: shadowFadeInOut,
            transform: [{ translateX: translateShadow }]
        }
        return transform
    }

    const openAnimation = () => {
        Animated.timing(animationValue, {
            toValue: 1,
            duration: SPEED,
            useNativeDriver: true,
        }).start()
    }

    const closeAnimation = () => {
        Animated.timing(animationValue, {
            toValue: 0,
            duration: SPEED,
            useNativeDriver: true,
        }).start()
    }
    const handle_toggle_open = () => {
        isOpen
            ? closeAnimation()
            : openAnimation()

        onPressToggleOpen()
    }


    return (
        <Page width={SCREEN_WIDTH}>







            {/* BACKGROUND::::BACKGROUND::::BACKGROUND::::BACKGROUND::::BACKGROUND::::BACKGROUND:::: */}
            <View style={[
                { width: SCREEN_WIDTH, height: '100%', position: 'absolute' },
                { justifyContent: 'flex-start', alignItems: 'center' },
                // { backgroundColor: '#ff0' },
            ]}>

                <Image source={require('../assets/img/PDX-BG.png')} style={styles.IMG} resizeMode={'stretch'} />
            </View>









            {/* CONTENT::::CONTENT::::CONTENT::::CONTENT::::CONTENT::::CONTENT:::: */}
            <View style={[
                { width: SCREEN_WIDTH * .9, flex: 1, },
                { marginTop: SCREEN_WIDTH * .43, marginBottom: GAP * 1.3, marginLeft: SCREEN_WIDTH * .03 },
                // { backgroundColor: '#ff0' },
            ]}>


                <View style={{ height: GAP }} />


                {/* DISPLAY BIG-------------------------------------------------- */}
                <View style={[styles.CENTER, { width: '100%' }]}>
                    <DisplayBig >
                        <Image source={require('../assets/img/pika_big.png')} style={{ width: '100%', height: '100%', position: 'absolute' }} resizeMode={'contain'} />
                    </DisplayBig>
                </View>


                <View style={{ height: GAP }} />


                <View style={[
                    { width: '100%', flex: 1 },
                    { flexDirection: 'row' },
                ]}>
                    <View style={[
                        { width: '50%', flex: 1 },
                        { justifyContent: 'flex-start', alignItems: 'center' },
                    ]}>

                        {/* FLAT-BUTTONS */}
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-around', paddingBottom: GAP }}>
                            <FlatBTN color={COLOR_RED} isActive={true} onPress={() => alert('RED BUTTON')} />
                            <FlatBTN color={COLOR_BLUE} isActive={true} onPress={() => alert('BLUE BUTTON')} />
                        </View>

                        {/* GREEN-DISPLAY */}
                        <DisplayGreen>
                            <Image source={require('../assets/img/pika_small.png')} style={styles.IMG} resizeMode={'cover'} />
                        </DisplayGreen>
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

            {/* HEADER/HINGE IMAGE------------------------------------------- */}
            <View pointerEvents='none'
                style={[
                    { width: SCREEN_WIDTH, height: '100%', position: 'absolute' },
                    { justifyContent: 'flex-start', alignItems: 'center' },
                ]}>

                <Image source={require('../assets/img/PDX-header-hinge.png')} style={styles.IMG} resizeMode={'stretch'} />
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


            {/* BTN OPEN------------------------------------------- */}
            <View style={[styles.CENTER, { position: 'absolute', top: GAP - 5, right: GAP * 1.5 }]} >

                <RoundBTN onPress={() => handle_toggle_open()} size={50} >
                    <View style={[
                        { width: 30, height: 30, position: 'absolute', top: 7 },
                        { borderRadius: 50, borderWidth: 4, borderColor: COLOR_OUTLINE }
                    ]} />
                    <View style={[
                        { width: 12, height: 20, position: 'absolute', top: 4 },
                        { borderLeftWidth: 4, borderRightWidth: 4, borderRadius: 20, borderColor: 'orange', backgroundColor: COLOR_OUTLINE }
                    ]} />
                </RoundBTN>

            </View>


            {/* COVER----------------------------------------------------- */}
            <Animated.View
                pointerEvents='none'
                style={[
                    styles.FULSCREEN,
                    { justifyContent: 'flex-start', alignItems: 'center' },
                    { position: 'absolute' },

                ]}>
                <Animated.View style={[
                    styles.FULSCREEN,
                    { justifyContent: 'flex-start', alignItems: 'center' },
                    { position: 'absolute', right: 0 },
                    getCoverAnimatedStyle(),
                    getCoverSpecialAnimatedStyle(),
                ]}>
                    <Image source={require('../assets/img/PDX3.png')} style={styles.IMG} resizeMode={'stretch'} />

                </Animated.View>
            </Animated.View>



        </Page>
    )
}

export default ScreenLeft


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
