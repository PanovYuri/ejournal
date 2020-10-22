import React from 'react'
import { Panel, PanelHeader, View } from '@vkontakte/vkui'

const CalendarPage = () => {
    return (
        <View activePanel='feed'>
            <Panel id='feed'>
                <PanelHeader>Расписание</PanelHeader>
            </Panel>
        </View>
    )
}

export default CalendarPage