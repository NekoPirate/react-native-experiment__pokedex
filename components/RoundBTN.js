import React, { useRef } from 'react';
import { StyleSheet, Dimensions, Animated, View, Pressable, Image } from 'react-native';

const COLOR_SHADOW = '#543539Df'
const COLOR_OUTLINE = '#54353a'

const ANGLE = 3
const PERSPECTIVE = 90
const BTN_HEIGHT = 5
const SPEED = 100
const SCREEN_WIDTH = Dimensions.get('screen').width
const SCREEN_HEIGHT = Dimensions.get('screen').height
const GAP = SCREEN_WIDTH * .05
const colore = '#2d2b2c'
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function RoundBTN({
    size,
    onPress,
}) {

    const translate = useRef(new Animated.Value(0)).current

    const defaultAnimation = () => {
        Animated.timing(translate, {
            toValue: 0,
            duration: SPEED,
            useNativeDriver: true,
        }).start()

    }
    const pressAnimation = () => {
        Animated.timing(translate, {
            toValue: BTN_HEIGHT,
            duration: SPEED,
            useNativeDriver: true,
        }).start()
    }

    const handle_PRESS = () => {
        onPress()
        defaultAnimation()
    }


    return (
        <View>

            {/* SHADOW */}
            <View style={[
                { width: size, height: size, borderRadius: size, backgroundColor: COLOR_SHADOW },
                { position: 'absolute', opacity: .5 },
                {
                    transform: [
                        {
                            translateY: BTN_HEIGHT
                        },
                        { scale: 1.2 }
                    ]
                }
            ]} />
            {/* FAKE 3D */}
            <View style={[
                { width: size, height: size, borderRadius: size, backgroundColor: COLOR_OUTLINE },
                { position: 'absolute' },

                {
                    transform: [
                        {
                            translateY: BTN_HEIGHT
                        },
                    ]
                }
            ]} />

            {/* BTN */}
            <AnimatedPressable
                onPressIn={() => pressAnimation()}
                onPressOut={() => handle_PRESS()}
                style={[
                    { width: size, height: size, borderRadius: size, backgroundColor: 'orange', marginBottom: GAP },
                    { justifyContent: 'center', alignItems: 'center' },

                    { borderColor: COLOR_OUTLINE, borderWidth: 4 },

                    {
                        transform: [
                            {
                                translateY: translate
                            }
                        ]
                    }
                ]} >
                {/* <View style={[
                    { position: 'absolute', justifyContent: 'center', alignItems: 'center' },
                    { width: '90%', height: '90%' },
                    { borderRadius: 30, borderWidth: 3, borderColor: '#54353922' },
                    { backgroundColor: '#54353955' },
                ]} ></View> */}
            </AnimatedPressable>
        </View>
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

