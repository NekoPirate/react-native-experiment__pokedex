import React from 'react';
import { Dimensions, View, Image } from 'react-native';

import Page from './Page'
import Background from './Background'

import LCD from './LCD'
import CustomBTN from './CustomBTN';

const PDX2_A = require('../assets/img/PDX2_A.png')
const PDX2_B = require('../assets/img/PDX2_B.png')
const PDX2_C = require('../assets/img/PDX2_C.png')

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


const PdxRight = ({

    LCD_B,
    LCD_C,
    LCD_D,

    WhiteBTN_A,
    WhiteBTN_B,

    onPressOpen }) => {

    console.log('RENDER RIGHT')
    // console.log(DATA)
    return (

        <Page >

            <Background
                imgA={PDX2_A}
                imgB={PDX2_B}
                imgC={PDX2_C}
            />

            {/* CONTENT::::CONTENT::::CONTENT::::CONTENT::::CONTENT::::CONTENT:::: */}
            <View style={[
                { width: SCREEN_WIDTH * .9, flex: 1, },
                { marginTop: SCREEN_WIDTH * .4, marginBottom: GAP * 1.3, marginLeft: GAP * 1.2 },
                { justifyContent: 'flex-start', alignItems: 'center' },
                // { backgroundColor: '#19f' },
                { paddingHorizontal: GAP }

            ]}>
                {/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
                <View style={{ height: GAP * 2 }} />
                {/*::::::::::::::::::::::::::::: */}

                {/*  SCREEN_A HERE ----->  */}
                <View style={[
                    { width: '100%', height: SCREEN_WIDTH * .3 },
                    { borderRadius: 5 },
                ]}>
                    {
                        /*-    `sdhd+ ddhdd/                                        
                        hd-    hd- +hodd. sd+                                       
                        dm-    hm- ```dm. sd+                                       
                        dm:...`ym/.sdodm-.yd/                                       
                        syyyyy/`+yyy: yysy*/
                        LCD_B
                    }
                </View>

                {/*::::::::::::::::::::::::::::: */}
                <View style={{ height: GAP * 1.5 }} />
                {/*::::::::::::::::::::::::::::: */}

                {/*  BLUE_BUTTONS HERE ----->  */}
                <View style={[
                    { width: '100%', height: SCREEN_WIDTH * .3 },
                    { justifyContent: 'center', alignItems: 'center' },
                    { borderRadius: 5 },
                ]}>
                    {/*  SHADOW  */}
                    <View style={[
                        { width: '100%', height: SCREEN_WIDTH * .3 },
                        { justifyContent: 'center', alignItems: 'center' },
                        { borderRadius: 5 },
                        { backgroundColor: COLOR_SHADOW, opacity: .5 },
                        { position: 'absolute' },
                        { transform: [{ scaleX: 1.02 }, { scaleY: 1.1 }, { translateY: 7 }] }
                    ]} />
                    {/*  BUTTONS  */}
                    <View style={[
                        { width: '100%' },
                        { justifyContent: 'center', alignItems: 'center' },
                        { flexDirection: 'row' }
                    ]} >
                        <CustomBTN
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={COLOR_BLUE}
                            onPress={() => alert('BLUE BUTTON')} />
                        <CustomBTN
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={COLOR_BLUE}
                            onPress={() => alert('BLUE BUTTON')} />
                        <CustomBTN
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={COLOR_BLUE}
                            onPress={() => alert('BLUE BUTTON')} />
                        <CustomBTN
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={COLOR_BLUE}
                            onPress={() => alert('BLUE BUTTON')} />
                        <CustomBTN
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={COLOR_BLUE}
                            onPress={() => alert('BLUE BUTTON')} />
                    </View>
                    <View style={[
                        { width: '100%' },
                        { flexDirection: 'row' },
                        { justifyContent: 'center', alignItems: 'center' },

                    ]} >

                        <CustomBTN
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={COLOR_BLUE}
                            onPress={() => alert('BLUE BUTTON')} />
                        <CustomBTN
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={COLOR_BLUE}
                            onPress={() => alert('BLUE BUTTON')} />
                        <CustomBTN
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={COLOR_BLUE}
                            onPress={() => alert('BLUE BUTTON')} />
                        <CustomBTN
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={COLOR_BLUE}
                            onPress={() => alert('BLUE BUTTON')} />
                        <CustomBTN
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={COLOR_BLUE}
                            onPress={() => alert('BLUE BUTTON')} />
                    </View>
                </View>

                {/*::::::::::::::::::::::::::::: */}
                <View style={{ height: GAP }} />
                {/*::::::::::::::::::::::::::::: */}

                {/*  FLAT_BUTTONS HERE ----->  */}
                <View style={[
                    { width: '100%' },
                    { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' },
                    { borderRadius: 5 },
                ]} >
                    <CustomBTN
                        width={(SCREEN_WIDTH - GAP * 2) * .155}
                        height={(SCREEN_WIDTH - GAP * 2) * .04}
                        borderRadius={100}
                        color={COLOR_OUTLINE}
                        isActive={true}
                        onPress={() => alert('DARK BUTTON')} />
                    {/*::::::::::::::::::::::::::::: */}
                    <View style={{ width: (SCREEN_WIDTH - GAP * 2) * .022 }} />
                    {/*::::::::::::::::::::::::::::: */}
                    <CustomBTN
                        width={(SCREEN_WIDTH - GAP * 2) * .155}
                        height={(SCREEN_WIDTH - GAP * 2) * .04}
                        borderRadius={100}
                        color={COLOR_OUTLINE}
                        isActive={true}
                        onPress={() => alert('DARK BUTTON')} />

                </View>

                {/*::::::::::::::::::::::::::::: */}
                <View style={{ height: GAP - ((SCREEN_WIDTH - GAP * 2) * .04) }} />
                {/*::::::::::::::::::::::::::::: */}

                {/*  WHITE_BUTTONS HERE ----->  */}
                <View style={[
                    { width: '100%' },
                    { flexDirection: 'row' },
                    { borderRadius: 5 },
                ]} >

                    <View style={[
                        { flexDirection: 'row' },

                    ]}>
                        <View style={[
                            { width: '100%', height: '100%' },
                            { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },
                            { borderRadius: 5 }, { position: 'absolute' },
                            { backgroundColor: COLOR_SHADOW, opacity: .5 },
                            { transform: [{ scaleX: 1.07 }, { scaleY: 1.1 }, { translateY: 7 }] }
                        ]} />
                        {
                            /*hhh/ hhhhhh+hh/ oh+                                       
                            dm-`odo``hm/``dmdyhdo                                       
                            hdhddh   yd:  hd-sdh+                                       
                            dm-`odo  ym:  dm. sdo                                       
                            yhhhh/   sh:  hh. o*/
                            WhiteBTN_A
                        }
                        {
                            /*hhh/ hhhhhh+hh/ oh+                                       
                            dm-`odo``hm/``dmdyhdo                                       
                            hdhddh   yd:  hd-sdh+                                       
                            dm-`odo  ym:  dm. sdo                                       
                            yhhhh/   sh:  hh. o*/
                            WhiteBTN_B
                        }
                        {/* <CustomBTN
                            shadow={false}
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={'#ccc'}
                            isActive={true}
                            onPress={() => alert('WHITE BUTTON')} />

                        <CustomBTN
                            shadow={false}
                            width={(SCREEN_WIDTH - GAP * 2) * .177}
                            height={(SCREEN_WIDTH - GAP * 2) * .177}
                            borderRadius={5}
                            color={'#ccc'}
                            isActive={true}
                            onPress={() => alert('WHITE BUTTON')} /> */}
                    </View>
                    {/* BTN OPEN------------------------------------------- */}
                    <View style={[
                        { justifyContent: 'center', alignContent: 'center' },
                        { position: 'absolute', bottom: -GAP, right: 0 }
                    ]}
                    >
                        <CustomBTN
                            width={50} height={50} borderRadius={40} color={'#fe9f00ff'}
                            onPress={onPressOpen}
                        />
                    </View>
                </View>


                {/*::::::::::::::::::::::::::::: */}
                <View style={{ height: GAP * 2 }} />
                {/*::::::::::::::::::::::::::::: */}

                {/*  SCREEN_B & SCREEN_C HERE ----->  */}
                <View style={[
                    { width: '100%', flex: 1 },
                    { borderRadius: 5 },
                    { flexDirection: 'row' }
                ]}>
                    {/* <LCD animatedValue={toggleLcdAnimationValue}></LCD> */}
                    {
                        /*-    `sdhd+ ddhdd/                                        
                        hd-    hd- +hodd. sd+                                       
                        dm-    hm- ```dm. sd+                                       
                        dm:...`ym/.sdodm-.yd/                                       
                        syyyyy/`+yyy: yysy*/
                        LCD_C
                    }
                    {/*::::::::::::::::::::::::::::: */}
                    <View style={{ width: GAP * 2 }} />
                    {/*::::::::::::::::::::::::::::: */}
                    {/* <LCD animatedValue={toggleLcdAnimationValue}></LCD> */}
                    {
                        /*-    `sdhd+ ddhdd/                                        
                        hd-    hd- +hodd. sd+                                       
                        dm-    hm- ```dm. sd+                                       
                        dm:...`ym/.sdodm-.yd/                                       
                        syyyyy/`+yyy: yysy*/
                        LCD_D
                    }
                </View>
                {/*::::::::::::::::::::::::::::: */}
                <View style={{ height: GAP * .5 }} />
                {/*::::::::::::::::::::::::::::: */}

                {/*:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: */}
            </View>

        </Page >
    )
}

export default React.memo(PdxRight)
