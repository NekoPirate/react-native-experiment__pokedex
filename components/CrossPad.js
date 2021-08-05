import React, { useRef, useCallback } from 'react';
import { Animated, View, Pressable, Image, Text } from 'react-native';
//-------------------------------------------------
const COLOR_SHADOW = '#543539Df'
const HIGHLIGHT = '#ffffff44'
const COLOR_OUTLINE = '#54353a'
//-------------------------------------------------
const BTN_HEIGHT = 3
const ANGLE = 3
const PERSPECTIVE = 90
const SPEED = 100
//-------------------------------------------------

const CrossPad = ({
    size,
    onPressLeft,
    onPressRight,
    onPressTop,
    onPressBottom,
}) => {


    const styles = {
        pressableHorizontal: {
            width: size / 3.7, height: size / 2.2,
            justifyContent: 'center', alignItems: 'center',
            // backgroundColor: '#ff0',


        },
        pressableVertical: {
            width: size / 2.2, height: size / 3.7,
            justifyContent: 'center', alignItems: 'center',
            // backgroundColor: '#f70'

        },
        img: {
            width: '100%', height: '100%',
            // backgroundColor: '#f00'
        }
    }

    const rotate_X_value = useRef(new Animated.Value(0.5)).current
    const rotate_Y_value = useRef(new Animated.Value(0.5)).current
    const translate_X = useRef(new Animated.Value(0)).current
    const translate_Y = useRef(new Animated.Value(0)).current


    const rotateX = rotate_X_value.interpolate({
        inputRange: [0, 0.5, 1,],
        outputRange: [`${ANGLE}deg`, '0deg', `-${ANGLE}deg`]
    })
    const rotateY = rotate_Y_value.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [`-${ANGLE}deg`, '0deg', `${ANGLE}deg`]
    })


    const defaultAnimation = () => {
        Animated.parallel([
            Animated.timing(rotate_X_value, {
                toValue: 0.5,
                duration: SPEED,
                useNativeDriver: true,
            }),
            Animated.timing(rotate_Y_value, {
                toValue: 0.5,
                duration: SPEED,
                useNativeDriver: true,
            }),
            Animated.timing(translate_X, {
                toValue: 0,
                duration: SPEED,
                useNativeDriver: true,
            }),
            Animated.timing(translate_Y, {
                toValue: 0,
                duration: SPEED,
                useNativeDriver: true,
            }),
        ]).start()
    }
    const leftAnimation = () => {
        Animated.parallel([
            Animated.timing(rotate_Y_value, {
                toValue: 0,
                duration: SPEED,
                useNativeDriver: true,
            }),
            Animated.timing(translate_X, {
                toValue: -BTN_HEIGHT,
                duration: SPEED,
                useNativeDriver: true,
            })
        ]).start()
    }
    const rightAnimation = () => {
        Animated.parallel([
            Animated.timing(rotate_Y_value, {
                toValue: 1,
                duration: SPEED,
                useNativeDriver: true,
            }),
            Animated.timing(translate_X, {
                toValue: BTN_HEIGHT,
                duration: SPEED,
                useNativeDriver: true,
            })
        ]).start()


    }
    const topAnimation = () => {
        Animated.parallel([
            Animated.timing(rotate_X_value, {
                toValue: 0,
                duration: SPEED,
                useNativeDriver: true,
            }),
            Animated.timing(translate_Y, {
                toValue: -BTN_HEIGHT,
                duration: SPEED,
                useNativeDriver: true,
            })
        ]).start()
    }
    const bottomAnimation = () => {
        Animated.parallel([
            Animated.timing(rotate_X_value, {
                toValue: 1,
                duration: SPEED,
                useNativeDriver: true,
            }),
            Animated.timing(translate_Y, {
                toValue: BTN_HEIGHT,
                duration: SPEED,
                useNativeDriver: true,
            })
        ]).start()
    }


    const handle_LEFT = () => {
        onPressLeft()
        defaultAnimation()
    }
    const handle_RIGHT = () => {
        onPressRight()
        defaultAnimation()
    }
    const handle_TOP = () => {
        onPressTop()
        defaultAnimation()
    }
    const handle_BOTTOM = () => {
        onPressBottom()
        defaultAnimation()
    }

    console.log('RENDER CROSS_PAD')

    return (
        <View style={[
            { width: size, height: size },
            { justifyContent: 'center', alignItems: 'center' },
        ]}>
            {/* SHADOW */}
            <Animated.View style={[
                { width: size, height: size / 2.2, position: 'absolute' },
                { flexDirection: 'row', justifyContent: 'space-between' },
                { backgroundColor: COLOR_SHADOW, borderRadius: 10 },
                { opacity: .5 },

                {
                    transform: [

                        { perspective: PERSPECTIVE },
                        { translateY: BTN_HEIGHT },
                        { scale: 1.08 }
                    ]
                }
            ]} />
            <Animated.View style={[
                { width: size / 2.2, height: size, position: 'absolute' },
                { justifyContent: 'space-between' },
                { backgroundColor: COLOR_SHADOW, borderRadius: 10 },
                { opacity: .5 },
                {
                    transform: [
                        { perspective: PERSPECTIVE },
                        { translateY: BTN_HEIGHT },
                        { scale: 1.1 }
                    ]
                }
            ]} />

            {/* FAKE 3D */}
            <Animated.View style={[
                { width: size, height: size / 2, position: 'absolute' },
                { flexDirection: 'row', justifyContent: 'space-between' },
                { backgroundColor: COLOR_OUTLINE, borderRadius: 10 },
                {
                    transform: [
                        { perspective: PERSPECTIVE },
                        { translateY: BTN_HEIGHT }
                    ]
                }
            ]} />
            <Animated.View style={[
                { width: size / 2, height: size, position: 'absolute' },
                { justifyContent: 'space-between' },
                { backgroundColor: COLOR_OUTLINE, borderRadius: 10 },
                {
                    transform: [
                        { perspective: PERSPECTIVE },
                        { translateY: BTN_HEIGHT }
                    ]
                }
            ]} />


            {/*CROSSPAD IMG */}
            <Animated.View style={[
                { width: size, height: size, position: 'absolute' },
                { justifyContent: 'center', alignItems: 'center' },
                // { backgroundColor: 'pink' },
                {
                    transform: [
                        { rotateY: rotateY },
                        { rotateX: rotateX },
                        { perspective: PERSPECTIVE },
                        { translateX: translate_X },
                        { translateY: translate_Y }
                    ]
                }
            ]}>
                {/* IMAGE */}
                <Image
                    source={require('../assets/img/CROSSPAD.png')}
                    style={[styles.img, { position: 'absolute', }]}
                    resizeMode={'stretch'} />



                <Pressable
                    onPressIn={leftAnimation}
                    onPressOut={handle_LEFT}
                    style={[styles.pressableHorizontal, { position: 'absolute', left: 0 }]} />

                <Pressable
                    onPressIn={rightAnimation}
                    onPressOut={handle_RIGHT}
                    style={[styles.pressableHorizontal, { position: 'absolute', right: 0 }]} />

                <Pressable
                    onPressIn={topAnimation}
                    onPressOut={handle_TOP}
                    style={[styles.pressableVertical, { position: 'absolute', top: 0 }]} />

                <Pressable
                    onPressIn={bottomAnimation}
                    onPressOut={handle_BOTTOM}
                    style={[styles.pressableVertical, { position: 'absolute', bottom: 0 }]} />
            </Animated.View>


        </View >
    )

}
export default React.memo(CrossPad)


