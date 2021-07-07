import React, { useEffect, useRef } from 'react';
import { Dimensions, Animated, Easing, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

const COLOR_SHADOW = '#543539Df'
const COLOR_OUTLINE = '#54353a'

const DisplayGreen = ({ children }) => {

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
    useEffect(() => oldScreenAnimation(), [])

    console.log('RENDER DISPLAY_GREEN')

    return (
        <View style={{ width: '100%', flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <View style={[
                { width: '100%', height: '100%', position: 'absolute' },
                { backgroundColor: COLOR_SHADOW },
                { borderRadius: 10 },
                { opacity: .5 },
                { transform: [{ scaleX: 1.03 }, { scaleY: 1.04 }, { translateY: 3 }] }
            ]} />

            <View style={[
                { width: '100%', flex: 1 },
                { backgroundColor: '#4fa95f', overflow: 'hidden' },
                { borderRadius: 10, },
                { borderLeftWidth: 6, borderTopWidth: 6 },
                { borderRightWidth: 3, borderBottomWidth: 3 },

                { borderColor: COLOR_OUTLINE }
            ]} >

                {children}

                <Animated.Image
                    source={require('../assets/img/screen_texture5.jpg')}
                    resizeMode={'stretch'}
                    style={[
                        { width: '100%', height: '300%', position: 'absolute', bottom: 0, opacity: .2 },
                        {
                            transform: [
                                {
                                    translateY: transition_value
                                }
                            ]
                        }
                    ]}
                />

                <View style={{ position: 'absolute', left: -5, top: -5, width: '150%', height: '150%', borderColor: '#00000066', borderWidth: 10, borderRadius: 15 }} pointerEvents='none' />
            </View>
        </View>

    )
}
export default React.memo(DisplayGreen)