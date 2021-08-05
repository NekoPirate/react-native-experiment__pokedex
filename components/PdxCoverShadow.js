import React from 'react';
import { Dimensions, Animated, View } from 'react-native';
//-------------------------------------------------
const COLOR_SHADOW = '#543539Df'
//-------------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width
//-------------------------------------------------

const PdxCoverShadow = React.memo(({ animationValue }) => {

    //COVER SHADOW:
    //this shadow covers all CONTENT while the COVER animation is active

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
    console.log('::::RENDER SHADOW')
    return (
        <View pointerEvents='none'
            style={[
                { width: SCREEN_WIDTH, height: '100%', },
                { alignItems: 'center', justifyContent: 'center' },
                { position: 'absolute', left: 0 },
            ]} >
            <Animated.View
                style={[
                    { width: SCREEN_WIDTH, height: '100%' },
                    { position: 'absolute' },
                    { backgroundColor: COLOR_SHADOW },
                    getShadowAnimatedStyle()

                ]} />
        </View>
    )
})
export default PdxCoverShadow