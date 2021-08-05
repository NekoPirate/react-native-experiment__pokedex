import React, { useEffect, useRef } from 'react';
import {
    Animated,
    Easing,
    View,
} from 'react-native';

const COLOR_SHADOW = '#543539Df'
const COLOR_OUTLINE = '#54353a'

const LCD = React.memo(({ children, animatedValue }) => {


    const opacity = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0]
    })


    const transition_value = useRef(new Animated.Value(0)).current

    const oldScreenAnimation = () => {
        Animated.loop(
            Animated.timing(transition_value, {
                toValue: 100,
                duration: 10000,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            -1).start()
    }
    useEffect(oldScreenAnimation, [])

    console.log('RENDER LCD')

    return (
        <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <View style={[
                { width: '100%', height: '100%', position: 'absolute' },
                { backgroundColor: COLOR_SHADOW },
                { borderRadius: 10 },
                { opacity: .5 },
                { transform: [{ scaleX: 1.03 }, { scaleY: 1.06 }] }
            ]} />

            <View style={[
                { width: '100%', flex: 1 },
                { backgroundColor: '#4fa95f', overflow: 'hidden' },
                { borderRadius: 10, },
                { borderLeftWidth: 6, borderTopWidth: 6 },
                { borderRightWidth: 3, borderBottomWidth: 3 },
                { borderColor: COLOR_OUTLINE }
            ]} >

                <View style={[
                    { width: '100%', height: '100%' },
                    { backgroundColor: '#61F11944' },
                    { justifyContent: 'center', alignItems: 'center' },
                ]}>
                    {children}

                </View>
                <Animated.View style={[
                    { width: '100%', height: '100%', position: 'absolute', },
                    { backgroundColor: '#111' },
                    { opacity: opacity },
                ]}
                />
                <Animated.Image
                    source={require('../assets/img/screen_texture5.jpg')}
                    resizeMode={'stretch'}
                    style={[
                        { width: '100%', height: '300%', position: 'absolute', bottom: 0, opacity: 0.3 },
                        { transform: [{ translateY: transition_value }] }
                    ]}
                />

                <View style={{ position: 'absolute', left: -5, top: -5, width: '150%', height: '150%', borderColor: '#00000066', borderWidth: 10, borderRadius: 15 }} pointerEvents='none' />
            </View>
        </View>

    )
})

export default LCD
