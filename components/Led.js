import React, { useEffect, useRef } from 'react';
import { Dimensions, Animated, StyleSheet, Text, View, Pressable, Image, ScrollView } from 'react-native';

const COLOR_SHADOW = '#00000066'
const COLOR_OUTLINE = '#54353a'






const Led = React.memo(({
    size,
    color,
    speed,
    holeSize = size * 1.1,

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
    const pulseAnimationOFF = () => {

        Animated.timing(opacity_value, {
            toValue: 0,
            duration: speed,
            useNativeDriver: true,
        }).start()
    }
    useEffect(() => {
        pulse ?
            pulseAnimation()
            // console.log('toggle pulse on')
            :
            pulseAnimationOFF()
        // console.log('toggle pulse off')

    }, [pulse])
    console.log('RENDER LED')

    return (<>
        <View style={{
            position: pos,
            top: top,
            bottom: bottom,
            left: left,
            right: right,
            // flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center'
        }} >
            {/* BORDER*/}
            {
                border
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
                { position: 'absolute', transform: [{ translateY: size * .12 }] },
                {
                    opacity: opacity_value.interpolate({
                        inputRange: [0, .4],
                        outputRange: [.7, .4]
                    })
                },

            ]} />

            {/* HOLE */}
            <View style={[
                { width: holeSize, height: holeSize, borderRadius: holeSize, backgroundColor: COLOR_OUTLINE },
                { position: 'absolute' },
            ]} />

            {/* CIRCLE A - BASE COLOR */}
            <View style={[
                { width: size, height: size, borderRadius: size },
                { backgroundColor: color },
            ]} />

            {/* CIRCLE B - HIGHLIGHT COLOR */}
            <Animated.View style={[
                { width: size * 1.05, height: size * 1.05, borderRadius: size },
                { backgroundColor: '#ffffff55' },
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



            </Animated.View>

        </View>
    </>)
})

export default Led