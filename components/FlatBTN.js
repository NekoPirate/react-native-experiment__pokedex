import React, { useRef } from 'react';
import { StyleSheet, Animated, View, Pressable, Image } from 'react-native';

const COLOR_SHADOW = '#543539Df'
const COLOR_OUTLINE = '#54353a'

const ANGLE = 3
const PERSPECTIVE = 90
const BTN_HEIGHT = 2
const SPEED = 100

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const FlatBTN = ({
    isActive,
    color,
    onPress,
}) => {

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

    console.log('RENDER FLAT_BTN')

    return (
        <View>

            {/* SHADOW */}
            <View style={[
                { width: 50, height: 20 },
                { backgroundColor: COLOR_SHADOW },
                { opacity: .5 },
                { position: 'absolute', top: 6 },
                { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
                {
                    transform: [
                        {
                            translateY: BTN_HEIGHT
                        },
                        {
                            scale: 1.2
                        }
                    ]
                }
            ]} />

            {/* FAKE 3D */}
            <View style={[
                { width: 50, height: 25 },
                { backgroundColor: COLOR_OUTLINE },
                { position: 'absolute' },
                { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
                {
                    transform: [
                        {
                            translateY: BTN_HEIGHT
                        }
                    ]
                }
            ]} />

            {/* BTN */}
            <AnimatedPressable
                onPressIn={() => pressAnimation()}
                onPressOut={() => handle_PRESS()}
                style={[
                    { width: 50, height: 20, overflow: 'hidden' },
                    { backgroundColor: color },
                    { borderTopLeftRadius: 10, borderTopRightRadius: 10 },
                    { borderBottomLeftRadius: 10, borderBottomRightRadius: 10 },
                    { borderColor: COLOR_OUTLINE, borderWidth: 4 },
                    {
                        transform: [
                            {
                                translateY: translate
                            }
                        ]
                    }
                ]} >
                {
                    isActive
                        ? <View style={{ width: '100%', height: '50%', backgroundColor: '#fff', opacity: .3 }}></View>
                        : <></>
                }

            </AnimatedPressable>

        </View>
    )

}
export default React.memo(FlatBTN)
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

