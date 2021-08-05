//-------------------------------------------------
import React from 'react';
import { Dimensions, View } from 'react-native';
//-------------------------------------------------
const SCREEN_WIDTH = Dimensions.get('screen').width
//-------------------------------------------------
const Page = ({ children }) => {
    console.log('RENDER PAGE')

    return (
        <View style={[
            { width: SCREEN_WIDTH, flex: 1, },
            { alignItems: 'center', justifyContent: 'center' },
        ]}>
            {children}

        </View>
    )
}
export default React.memo(Page)
