import React from 'react';
import { Dimensions, View, Image, } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width


const Background = React.memo(({ imgA, imgB, imgC, size = SCREEN_WIDTH, left = null }) => {
    console.log('RENDER BACKGROUND')
    return (

        <View pointerEvents='none' style={[
            { width: size, height: '100%', },
            { justifyContent: 'flex-start', alignItems: 'center' },
            { position: 'absolute', left: left },
        ]}>

            <Image source={imgA} style={{ width: size, height: SCREEN_WIDTH * .5 }} resizeMode={'stretch'} />
            <Image source={imgB} style={{ width: size, flex: 1 }} resizeMode={'stretch'} />
            <Image source={imgC} style={{ width: size, height: SCREEN_WIDTH * .5 }} resizeMode={'stretch'} />

        </View>
    )
})

export default Background