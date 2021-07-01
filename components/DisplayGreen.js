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
    return (
        <View>
            <View style={[
                { width: 125, height: 160, position: 'absolute' },
                { backgroundColor: COLOR_SHADOW, overflow: 'hidden' },
                { borderRadius: 20 },
                { opacity: .5 },


                {
                    transform: [
                        {
                            scale: 1.05
                        }
                    ]
                }

            ]} />
            <View style={[
                { width: 125, height: 160 },
                { backgroundColor: '#4fa95f', overflow: 'hidden' },
                { borderRadius: 20, borderWidth: 4 },
                { borderColor: COLOR_OUTLINE }

                // { borderRadius: 20, borderColor: '#54353a', borderWidth: 4 },

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

                <View style={{ position: 'absolute', left: -5, top: -5, width: '150%', height: '150%', borderColor: '#00000066', borderWidth: 10, borderRadius: 20 }} pointerEvents='none' />
            </View>
        </View>

    )
}
export default DisplayGreen