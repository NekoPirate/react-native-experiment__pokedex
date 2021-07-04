import React from 'react';
import { Dimensions, View } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('screen').width

const Page = ({ children, width }) => {
    return (
        <View style={[
            { width: width, flex: 1, },
            { alignItems: 'flex-start', justifyContent: 'flex-start' },
        ]}>
            {children}

        </View>
    )
}
export default Page
