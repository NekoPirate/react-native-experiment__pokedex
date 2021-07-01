import React, { useRef } from 'react';
import { StyleSheet, Animated, View, Pressable, Image } from 'react-native';

const COLOR_SHADOW = '#543539Df'
const COLOR_OUTLINE = '#54353a'
const BTN_HEIGHT = 3
const ANGLE = 3
const PERSPECTIVE = 90
const SPEED = 100

export default function CrossPad({
    onPressLeft,
    onPressRight,
    onPressTop,
    onPressBottom,
}) {

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


    return (
        <View style={[
            { width: 120, height: 120 },
            { justifyContent: 'center', alignItems: 'center' },
        ]}>
            {/* SHADOW */}
            <Animated.View style={[
                { width: 125, height: 55, position: 'absolute' },
                { flexDirection: 'row', justifyContent: 'space-between' },
                { backgroundColor: COLOR_SHADOW, borderRadius: 10 },
                { opacity: .5 },

                {
                    transform: [

                        {
                            perspective: PERSPECTIVE
                        },
                        {
                            translateY: BTN_HEIGHT
                        },
                        {
                            scale: 1.1
                        }
                    ]
                }
            ]} />
            <Animated.View style={[
                { width: 55, height: 125, position: 'absolute' },
                { justifyContent: 'space-between' },
                { backgroundColor: COLOR_SHADOW, borderRadius: 10 },
                { opacity: .5 },
                {
                    transform: [
                        {
                            perspective: PERSPECTIVE
                        },
                        {
                            translateY: BTN_HEIGHT
                        },
                        {
                            scale: 1.1
                        }
                    ]
                }
            ]} />

            {/* FAKE 3D */}
            <Animated.View style={[
                { width: 125, height: 55, position: 'absolute' },
                { flexDirection: 'row', justifyContent: 'space-between' },
                { backgroundColor: COLOR_OUTLINE, borderRadius: 10 },
                {
                    transform: [
                        {
                            perspective: PERSPECTIVE
                        },
                        {
                            translateY: BTN_HEIGHT
                        }
                    ]
                }
            ]} />
            <Animated.View style={[
                { width: 55, height: 125, position: 'absolute' },
                { justifyContent: 'space-between' },
                { backgroundColor: COLOR_OUTLINE, borderRadius: 10 },
                {
                    transform: [
                        {
                            perspective: PERSPECTIVE
                        },
                        {
                            translateY: BTN_HEIGHT
                        }
                    ]
                }
            ]} />

            {/*LEFT <---> RIGHT */}
            <Animated.View style={[
                { width: 120, height: 50, position: 'absolute' },
                { backgroundColor: 'orange', borderRadius: 10, borderColor: COLOR_OUTLINE, borderWidth: 4 },
                { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
                {
                    transform: [
                        {
                            rotateY: rotateY
                        },
                        {
                            rotateX: rotateX
                        },
                        {
                            perspective: PERSPECTIVE
                        },
                        {
                            translateX: translate_X
                        },
                        {
                            translateY: translate_Y
                        }
                    ]
                }
            ]}>
                <Pressable
                    onPressIn={() => leftAnimation()}
                    onPressOut={() => handle_LEFT()}
                    style={styles.pressableHorizontal} >
                    <Image
                        source={require('../assets/img/triangle.png')}
                        style={[styles.img, { transform: [{ rotate: '-90deg' }] }]}
                        resizeMode={'center'} />
                </Pressable>

                <Pressable
                    onPressIn={() => rightAnimation()}
                    onPressOut={() => handle_RIGHT()}
                    style={styles.pressableHorizontal} >
                    <Image
                        source={require('../assets/img/triangle.png')}
                        style={[styles.img, { transform: [{ rotate: '90deg' }], paddingRight: 6 }]}
                        resizeMode={'center'} />
                </Pressable>
            </Animated.View>

            {/*TOP <---> BOTTOM */}
            <Animated.View style={[
                { width: 50, height: 120, position: 'absolute' },
                { justifyContent: 'space-between', alignItems: 'center' },
                { backgroundColor: 'orange', borderRadius: 10, borderColor: COLOR_OUTLINE, borderWidth: 4 },
                {
                    transform: [
                        {
                            rotateY: rotateY
                        },
                        {
                            rotateX: rotateX
                        },
                        {
                            perspective: PERSPECTIVE
                        },
                        {
                            translateX: translate_X
                        },
                        {
                            translateY: translate_Y
                        }
                    ]
                }
            ]}>
                <Pressable
                    onPressIn={() => topAnimation()}
                    onPressOut={() => handle_TOP()}
                    style={styles.pressableVertical} >
                    <Image
                        source={require('../assets/img/triangle.png')}
                        style={[styles.img, { transform: [{ rotate: '0deg' }] }]}
                        resizeMode={'center'} />
                </Pressable>

                <Pressable
                    onPressIn={() => bottomAnimation()}
                    onPressOut={() => handle_BOTTOM()} style={styles.pressableVertical} >
                    <Image
                        source={require('../assets/img/triangle.png')}
                        style={[styles.img, { transform: [{ rotate: '180deg' }] }]}
                        resizeMode={'center'} />
                </Pressable>
                <View style={[
                    { width: '100%', height: '100%' },
                    { justifyContent: 'center', alignItems: 'center' },
                    { position: 'absolute' },
                ]} >

                    <View style={[
                        { width: 65, height: 65 },
                        { justifyContent: 'center', alignItems: 'center' },
                        { backgroundColor: 'orange', borderRadius: 40 },
                    ]}>
                        <View pointerEvents='none' style={[
                            { width: 35, height: 35 },
                            { borderRadius: 30, borderWidth: 3, borderColor: '#54353922' },
                            { backgroundColor: '#54353955' }
                        ]} />
                    </View>

                </View>

            </Animated.View>




        </View >
    )

}

const styles = StyleSheet.create({
    pressableHorizontal: {
        width: 30, height: 50,
        justifyContent: 'center', alignItems: 'center',
        // backgroundColor: '#ff0'

    },
    pressableVertical: {
        width: 50, height: 30,
        justifyContent: 'center', alignItems: 'center',
        // backgroundColor: '#ff0'

    },
    img: {
        width: 20, height: 20,
        // backgroundColor: '#f00'
    }
});

/*

  <View style={[
        { width: 100, height: 100 },
        { position: 'absolute', top: GAP, left: GAP },
      ]}>
        <Image source={require('./assets/img/circle_blue.png')} style={{ width: '100%', height: '100%' }} resizeMode={'stretch'} />

      </View>

*/