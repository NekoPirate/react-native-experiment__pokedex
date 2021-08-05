import React from 'react';
import { Dimensions, Animated, View, Pressable, Image } from 'react-native';
//-------------------------------------------------
import { withAnchorPoint } from 'react-native-anchor-point'
//-------------------------------------------------
import PdxCoverBTN from './PdxCoverBTN';
import Background from './Background'


const PDX3_A = require('../assets/img/PDX3_A.png')
const PDX3_B = require('../assets/img/PDX3_B.png')
const PDX3_C = require('../assets/img/PDX3_C.png')
//-------------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const GAP = SCREEN_WIDTH * .05
//-------------------------------------------------
/*  PDX3 - OPEN_A - OPEN_B */
const PdxCover = React.memo(({ animationValue, onPress }) => {

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

    console.log('RENDER COVER')

    return (
        <>

            <Animated.View style={[
                { width: SCREEN_WIDTH, height: '100%' },
                { justifyContent: 'space-between', alignItems: 'center' },
                { position: 'absolute', right: 0 },
                getCoverAnimatedStyle(),
                getCoverSpecialAnimatedStyle(),
            ]}>

                <Background
                    imgA={PDX3_A}
                    imgB={PDX3_B}
                    imgC={PDX3_C}
                />

                {/*  BTN OPEN  */}
                <View style={[{ position: 'absolute', left: GAP, top: SCREEN_WIDTH * .9 }]} >

                    <PdxCoverBTN size={120} onPress={onPress} />
                </View>

            </Animated.View >
        </>
    )
})

export default PdxCover
