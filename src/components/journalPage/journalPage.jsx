import React, { Component } from 'react'
import { ActionSheet, ActionSheetItem, Panel, PanelHeader, View, IOS, platform } from '@vkontakte/vkui'
import { Icon28CalendarOutline } from '@vkontakte/icons'

export default class JournalPage extends Component {

    state = {
        popout: null,
        selectedGroup: {
            date: '27.10.2020',
            group: '16И-1',

        }
    }

    openActions = () => {
        this.setState({
            popout:
                <ActionSheet onClose={() => this.setState({ popout: null })}>
                    <ActionSheetItem autoclose>
                        По дням
                    </ActionSheetItem>
                    <ActionSheetItem autoclose>
                        По неделям
                    </ActionSheetItem>
                    <ActionSheetItem autoclose>
                        По месяцам
                    </ActionSheetItem>
                    {platform() === IOS && <ActionSheetItem autoclose mode="cancel">Отменить</ActionSheetItem>}
                </ActionSheet>
        })
    }

    render() {
        return (
            <View activePanel='feed' popout={this.state.popout}>
                <Panel id='feed'>
                    <PanelHeader
                        right={<Icon28CalendarOutline onClick={this.openActions} />}
                        >{this.state.selectedGroup.group}</PanelHeader>
                </Panel>
            </View>
        )
    }
}