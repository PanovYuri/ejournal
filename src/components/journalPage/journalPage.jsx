import React, { Component } from 'react'
import { ActionSheet, ActionSheetItem, Panel, PanelHeader, View, IOS, platform, PanelHeaderContent, Cell, List, PanelHeaderContext } from '@vkontakte/vkui'
import { Icon16Dropdown, Icon28CalendarOutline, Icon24Done } from '@vkontakte/icons'

export default class JournalPage extends Component {

    state = {
        popout: null,
        contextOpened: false,
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

    toggleContext = () => {
        this.setState(prevState => ({
            contextOpened: !prevState.contextOpened
        }))
    }

    select = (e) => {
        const mode = e.currentTarget.dataset.mode;
        this.setState({ mode });
        requestAnimationFrame(this.toggleContext);
    }

    render() {
        return (
            <View activePanel='feed' popout={this.state.popout}>
                <Panel id='feed'>
                    <PanelHeader
                        right={<Icon28CalendarOutline onClick={this.openActions} />}>
                        <PanelHeaderContent
                            aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
                            onClick={this.toggleContext}>
                            {this.state.selectedGroup.group}
                        </PanelHeaderContent>
                    </PanelHeader>
                    <PanelHeaderContext opened={this.state.contextOpened} onClose={this.toggleContext}>
                        <List>
                            <Cell
                                before={<Icon28CalendarOutline />}
                                asideContent={this.state.mode === 'all' ? <Icon24Done fill="var(--accent)" /> : null}
                                onClick={this.select}
                                data-mode="all"
                                >
                                Communities
                            </Cell>
                            <Cell
                                before={<Icon28CalendarOutline />}
                                asideContent={this.state.mode === 'managed' ? <Icon24Done fill="var(--accent)" /> : null}
                                onClick={this.select}
                                data-mode="managed"
                                >
                                Managed Communities
                            </Cell>
                        </List>
                    </PanelHeaderContext>
                </Panel>
            </View>
        )
    }
}