import React from 'react'
import '@vkontakte/vkui/dist/vkui.css';
import {
    Cell,
    Group,
    Header,
    Panel,
    PanelHeader,
    View,
} from '@vkontakte/vkui'

const App = () => {
    return (
        <View activePanel="main">
            <Panel id="main">
                <PanelHeader>VKUI</PanelHeader>
                <Group header={<Header mode="secondary">Items</Header>}>
                    <Cell>Hello</Cell>
                    <Cell>World</Cell>
                </Group>
            </Panel>
        </View>
    )
}

export default App