import React, { useEffect, useRef } from 'react';
import { Dimensions, Animated, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

const COLOR_SHADOW = '#00000066'
const COLOR_OUTLINE = '#54353a'






const Led = ({
    size,
    colorA,
    colorB,
    speed,
    pos = null,
    top = null,
    bottom = null,
    left = null,
    right = null,
    border = null,
    pulse = null,
    shiny = null,

}) => {


    const opacity_value = useRef(new Animated.Value(0)).current

    const pulseAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity_value, {
                    toValue: .4,
                    duration: speed,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity_value, {
                    toValue: 0,
                    duration: speed,
                    useNativeDriver: true,
                }),
            ])
            , -1).start()
    }
    useEffect(() => {
        if (pulse) {
            pulseAnimation()
        }
    }, [])
    console.log('RENDER LED')

    return (<>
        <View style={{
            position: pos,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }} >
            {/* BORDER*/}
            {border
                ? <>
                    <Animated.View style={[
                        { width: size * 1.65, height: size * 1.65, borderRadius: size },
                        { backgroundColor: COLOR_SHADOW },
                        { position: 'absolute' },
                        {
                            opacity: opacity_value.interpolate({
                                inputRange: [0, .4],
                                outputRange: [.4, .7]
                            })
                        },
                    ]} />

                    <View style={[
                        { width: size * 1.5, height: size * 1.5, borderRadius: size },
                        { backgroundColor: '#ddd', borderColor: COLOR_OUTLINE, borderWidth: 3 },
                        { position: 'absolute' },
                    ]} />

                </>

                : <></>
            }

            {/* SHADOW */}
            <Animated.View style={[
                { width: size * 1.2, height: size * 1.2, borderRadius: size * 1.2, backgroundColor: COLOR_SHADOW },
                { position: 'absolute', top: size / 25 },
                {
                    opacity: opacity_value.interpolate({
                        inputRange: [0, .4],
                        outputRange: [.7, .4]
                    })
                },

            ]} />

            {/* HOLE */}
            <View style={[
                { width: size * 1.15, height: size * 1.15, borderRadius: size, backgroundColor: COLOR_OUTLINE },
                { position: 'absolute' },
            ]} />

            {/* CIRCLE A - BASE COLOR */}
            <View style={[
                { width: size, height: size, borderRadius: size },
                { backgroundColor: colorA },
            ]} />

            {/* CIRCLE B - HIGHLIGHT COLOR */}
            <Animated.View style={[
                { width: size * 1.05, height: size * 1.05, borderRadius: size },
                { backgroundColor: colorB },
                { position: 'absolute' },
                { opacity: opacity_value },
            ]} />


            {/* GLASS*/}
            <Animated.View style={[
                { width: size, height: size, borderRadius: size },
                { borderWidth: size / 30, borderColor: COLOR_SHADOW },
                { position: 'absolute' },
                {
                    opacity: opacity_value.interpolate({
                        inputRange: [0, .4],
                        outputRange: [1, 0]
                    })
                },
            ]} />

            {/* HIGHLIGHT*/}
            <Animated.View style={[
                { width: size, height: size, position: 'absolute' },
                { opacity: .4 },
            ]}>
                {
                    shiny
                        ? <>
                            <View style={[
                                { width: size / 2, height: size / 2, borderRadius: size, backgroundColor: '#ffffff' },
                                { position: 'absolute', left: size / 6, top: size / 8.5 },
                            ]} />
                            <View style={[
                                { width: size / 3, height: size / 3, borderRadius: size, backgroundColor: '#ffffffbb' },
                                { position: 'absolute', left: size / 3.3, top: size / 3.3 },
                            ]} />
                            <View style={[
                                { width: size / 1.2, height: size / 1.2, borderRadius: size, backgroundColor: '#ffffff99' },
                                { position: 'absolute', left: size / 20, top: size / 20 },
                            ]} />
                        </>
                        : <>
                            <View style={[
                                { width: size / 1.5, height: size / 1.5, borderRadius: size, backgroundColor: '#ffffff' },
                                { position: 'absolute', left: size / 6, top: size / 8 },
                            ]} />
                            {/* <View style={[
                                { width: size / 3, height: size / 3, borderRadius: size, backgroundColor: '#ffffffbb' },
                                { position: 'absolute', left: size / 3.3, top: size / 3.3 },
                            ]} />
                            <View style={[
                                { width: size / 1.2, height: size / 1.2, borderRadius: size, backgroundColor: '#ffffff99' },
                                { position: 'absolute', left: size / 20, top: size / 20 },
                            ]} /> */}
                        </>
                }


            </Animated.View>

        </View>
    </>)
}

export default React.memo(Led)