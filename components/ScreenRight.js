import React, { useEffect, useRef } from 'react';
import { Dimensions, Animated, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

import Page from './Page'
import DisplayBig from './DisplayBig'
import DisplayGreen from './DisplayGreen'
import Led from './Led'
import FlatBTN from './FlatBTN'
import RoundBTN from './RoundBTN'
import CrossPad from './CrossPad'

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


const ScreenRight = () => {

    console.log('RENDER RIGHT')
    return (

        <Page width={SCREEN_WIDTH - GAP} >

            {/*  PDX2  */}
            <View pointerEvents='none'
                style={[
                    { width: SCREEN_WIDTH, height: '100%', position: 'absolute', top: 0, botto: 0, left: 0, right: 0 },
                    { justifyContent: 'space-between', alignItems: 'center' },
                ]}>

                <Image source={require('../assets/img/PDX2_A.png')} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * .5 }} resizeMode={'stretch'} />
                <Image source={require('../assets/img/PDX2_B.png')} style={{ flex: 1, width: SCREEN_WIDTH, }} resizeMode={'stretch'} />
                <Image source={require('../assets/img/PDX2_C.png')} style={{ width: SCREEN_WIDTH, height: SCREEN_WIDTH * .5 }} resizeMode={'stretch'} />

            </View>



            <View style={[
                { width: SCREEN_WIDTH * .9, flex: 1, },
                { marginTop: SCREEN_WIDTH * .42, marginBottom: GAP * 1.3, marginLeft: GAP / 2 },
                { justifyContent: 'flex-start', alignItems: 'center' },
                // { backgroundColor: '#f70' },
                { padding: GAP },
            ]}>
                {/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

                {/*  SCREEN_A HERE ----->  */}
                <View style={[
                    { width: '100%', flex: .3 },
                    { backgroundColor: '#222' },
                    { borderRadius: 5 },
                ]}></View>

                {/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

                <View style={[
                    { width: '100%', flex: .1 },
                    // { backgroundColor: '#fff' }
                ]} />

                {/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

                {/*  BLUE_BUTTONS HERE ----->  */}
                <View style={[
                    { width: '100%', flex: .2 },
                    { backgroundColor: COLOR_BLUE },
                    { borderRadius: 5 },

                ]} >
                    <View style={[
                        { width: '100%', flex: .5 },
                        { flexDirection: 'row' }

                    ]} >
                        <View style={[
                            { width: '100%', flex: 2 },
                            { backgroundColor: COLOR_BLUE },
                            { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },

                        ]} />
                        <View style={[
                            { width: '100%', flex: 2 },
                            { backgroundColor: COLOR_BLUE },
                            { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },

                        ]} />
                        <View style={[
                            { width: '100%', flex: 2 },
                            { backgroundColor: COLOR_BLUE },
                            { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },

                        ]} />
                        <View style={[
                            { width: '100%', flex: 2 },
                            { backgroundColor: COLOR_BLUE },
                            { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },

                        ]} />
                        <View style={[
                            { width: '100%', flex: 2 },
                            { backgroundColor: COLOR_BLUE },
                            { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },

                        ]} />
                    </View>
                    <View style={[
                        { width: '100%', flex: .5 },
                        { flexDirection: 'row' }

                    ]} >
                        <View style={[
                            { width: '100%', flex: 2 },
                            { backgroundColor: COLOR_BLUE },
                            { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },

                        ]} />
                        <View style={[
                            { width: '100%', flex: 2 },
                            { backgroundColor: COLOR_BLUE },
                            { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },

                        ]} />
                        <View style={[
                            { width: '100%', flex: 2 },
                            { backgroundColor: COLOR_BLUE },
                            { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },

                        ]} />
                        <View style={[
                            { width: '100%', flex: 2 },
                            { backgroundColor: COLOR_BLUE },
                            { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },

                        ]} />
                        <View style={[
                            { width: '100%', flex: 2 },
                            { backgroundColor: COLOR_BLUE },
                            { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },

                        ]} />
                    </View>



                </View>

                {/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

                {/*  CUSTOM_BUTTONS HERE ----->  */}
                <View style={[
                    { width: '100%', flex: .2 },
                    { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
                    { borderRadius: 5 },
                ]} >
                    <View style={[
                        { height: '100%', flex: .4 },
                        // { backgroundColor: '#222' },
                        { borderRadius: 5 },
                    ]} >
                        <View style={[
                            { width: '100%', flex: .5 },
                        ]} />
                        <View style={[
                            { width: '100%', flex: .5 },
                            { flexDirection: 'row' }

                        ]} >
                            <View style={[
                                { height: '100%', flex: .5 },
                                { backgroundColor: '#fff' },
                                { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },
                            ]} />
                            <View style={[
                                { height: '100%', flex: .5 },
                                { backgroundColor: '#fff' },
                                { borderRadius: 2, borderWidth: 4, borderColor: COLOR_OUTLINE },
                            ]} />
                        </View>

                    </View>
                    <View style={[
                        { height: '100%', flex: .2 },
                    ]} />
                    <View style={[
                        { height: '100%', flex: .4 },
                        // { backgroundColor: '#222' },
                        { borderRadius: 5 },
                    ]} >
                        <View style={[
                            { width: '100%', flex: .1 },
                            // { backgroundColor: '#222' },
                            { borderRadius: 5 },
                        ]} />
                        <View style={[
                            { width: '100%', flex: .1 },
                            // { backgroundColor: '#222' },
                            { borderRadius: 5 },
                            { flexDirection: 'row' }
                        ]} >
                            <View style={[
                                { width: '100%', flex: .45 },
                                { backgroundColor: COLOR_OUTLINE },
                                { borderRadius: 5 },
                            ]} />
                            <View style={[
                                { width: '100%', flex: .1 },
                                // { backgroundColor: '#222' },
                            ]} />
                            <View style={[
                                { width: '100%', flex: .45 },
                                { backgroundColor: COLOR_OUTLINE },
                                { borderRadius: 5 },
                            ]} />
                        </View>
                        <View style={[
                            { width: '100%', flex: .3 },
                            // { backgroundColor: '#222' },
                        ]} />
                        <View style={[
                            { width: '100%', flex: .5 },
                            // { backgroundColor: '#222' },
                            { flexDirection: 'row' }
                        ]} >
                            <View style={[
                                { height: '100%', flex: .4 },
                                // { backgroundColor: '#222' },
                            ]} />
                            <View style={[
                                { height: '100%', flex: .3 },
                                // { backgroundColor: '#222' },
                            ]} />
                            <View style={[
                                { height: '100%', flex: .3 },
                                // { backgroundColor: '#222' },
                            ]} >
                                <View style={[
                                    { height: 50, width: 50, position: 'absolute', right: 0, bottom: -20 },
                                    { backgroundColor: 'orange' },
                                    { borderRadius: 100, borderWidth: 4, borderColor: COLOR_OUTLINE },
                                ]} />
                            </View>
                        </View>
                    </View>
                </View>

                {/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

                <View style={[
                    { width: '100%', flex: .1 },
                    // { backgroundColor: '#fff' },
                ]} />

                {/*::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}

                {/*  SCREENS_B_&_C HERE ----->  */}
                <View style={[
                    { height: '100%', flex: .1 },
                    { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
                    // { backgroundColor: '#222' },
                ]} >
                    <View style={[
                        { height: '100%', flex: .45 },
                        { backgroundColor: '#222' },
                        { borderRadius: 5 },
                    ]} />
                    <View style={[
                        { height: '100%', flex: .1 },
                    ]} />
                    <View style={[
                        { height: '100%', flex: .45 },
                        { backgroundColor: '#222' },
                        { borderRadius: 5 },
                    ]} />
                </View>

                {/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
            </View>
        </Page >
    )
}

export default React.memo(ScreenRight)
