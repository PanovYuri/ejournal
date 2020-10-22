import React from 'react'
import { Panel, PanelHeader, View } from '@vkontakte/vkui'

const JournalPage = () => {
    return (
        <View activePanel='feed'>
            <Panel id='feed'>
                <PanelHeader>Журнал</PanelHeader>
            </Panel>
        </View>
    )
}

export default JournalPage