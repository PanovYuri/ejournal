import React, { Component } from 'react'
import { ActionSheet, ActionSheetItem, Panel, PanelHeader, View, IOS, platform, Button } from '@vkontakte/vkui'

export default class JournalPage extends Component {

    state = {
        popout: null,
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
                    <PanelHeader>Журнал</PanelHeader>
                    <Button onClick={this.openActions}>Open actions</Button>
                </Panel>
            </View>
        )
    }
}