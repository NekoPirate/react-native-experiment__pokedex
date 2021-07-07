import React from 'react';
import { Dimensions, View } from 'react-native';
const SCREEN_WIDTH = Dimensions.get('screen').width

const Page = ({ children, width }) => {
    console.log('RENDER PAGE')

    return (
        <View style={[
            { width: width, flex: 1, },
            { alignItems: 'flex-start', justifyContent: 'center' },
        ]}>
            {children}

        </View>
    )
}
export default React.memo(Page)
