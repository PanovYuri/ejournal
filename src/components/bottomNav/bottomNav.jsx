import { Icon28NewsfeedOutline } from '@vkontakte/icons'
import { Epic, Panel, PanelHeader, Tabbar, TabbarItem, View } from '@vkontakte/vkui'
import React, { Component } from 'react'

export default class BottomNav extends Component {

    state = {
        activeStory: 'feed',
    }

    pages = [
        {
            story: 'feed',
            text: 'Новости',
            icon: <Icon28NewsfeedOutline />,
            view: (
                <View activePanel='feed'>
                    <Panel id='feed'>
                        <PanelHeader>Новости</PanelHeader>
                    </Panel>
                </View>
            )
        },
        {
            story: 'services',
            text: 'Сервисы',
            icon: <Icon28NewsfeedOutline />,
            view: (
                <View activePanel='feed'>
                    <Panel id='feed'>
                        <PanelHeader>Новости</PanelHeader>
                    </Panel>
                </View>
            )
        },
        {
            story: 'messages',
            text: 'Сообщения',
            icon: <Icon28NewsfeedOutline />,
            view: (
                <View activePanel='feed'>
                    <Panel id='feed'>
                        <PanelHeader>Новости</PanelHeader>
                    </Panel>
                </View>
            )
        },
        {
            story: 'clips',
            text: 'Клипы',
            icon: <Icon28NewsfeedOutline />,
            view: (
                <View activePanel='feed'>
                    <Panel id='feed'>
                        <PanelHeader>Новости</PanelHeader>
                    </Panel>
                </View>
            )
        },
    ]

    onStoryChange = (e) => {
        this.setState({ activeStory: e.currentTarget.dataset.story })
    }

    render() {
        const { activeStory } = this.state
        const tabs = this.pages.map((e, i) => {
            return (
                <TabbarItem
                    onClick={this.onStoryChange}
                    selected={activeStory === e.story}
                    data-story={e.story}
                    text={e.text}
                    key={i}>
                    {e.icon}
                </TabbarItem>
            )
        })
        return (
            <Epic activeStory={activeStory} tabbar={
                <Tabbar>
                    {tabs}
                </Tabbar>
            }>
                { this.pages.map((e, i) => React.cloneElement(e.view, {key: i, id: e.story})) }
            </Epic>
        )
    }
}