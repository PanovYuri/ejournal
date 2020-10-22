import React from 'react'
import { Panel, PanelHeader, View } from '@vkontakte/vkui'

const ProfilePage = () => {
    return (
        <View activePanel='feed'>
            <Panel id='feed'>
                <PanelHeader>Профиль</PanelHeader>
            </Panel>
        </View>
    )
}

export default ProfilePage