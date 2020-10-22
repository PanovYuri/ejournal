import React from 'react'
import { Panel, PanelHeader, View } from '@vkontakte/vkui'

const CheckPage = () => {
    return (
        <View activePanel='feed'>
            <Panel id='feed'>
                <PanelHeader>Присутствие</PanelHeader>
            </Panel>
        </View>
    )
}

export default CheckPage