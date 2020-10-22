import { Epic, Tabbar, TabbarItem } from '@vkontakte/vkui'
import React, { Component } from 'react'

// Import icons
import Icon28GridSquareOutline  from '@vkontakte/icons/dist/28/grid_square_outline';
import Icon28CheckSquareOutline from '@vkontakte/icons/dist/28/check_square_outline';
import Icon28CalendarOutline    from '@vkontakte/icons/dist/28/calendar_outline';
import Icon28UserCircleOutline  from '@vkontakte/icons/dist/28/user_circle_outline';

// Import pages
import JournalPage  from '../journalPage'
import CheckPage    from '../checkPage'
import CalendarPage from '../calendarPage'
import ProfilePage  from '../profilePage'

export default class BottomNav extends Component {

    componentDidMount() {
        this.setState({ activeStory: this.pages[0].story })
    }

    state = {
        activeStory: 'journal',
    }

    // Отображаемые страницы
    pages = [
        {
            story: 'journal',
            text: 'Журнал',
            icon: <Icon28GridSquareOutline />,
            view: <JournalPage />
        },
        {
            story: 'check',
            text: 'Присутствие',
            icon: <Icon28CheckSquareOutline />,
            view: <CheckPage />
        },
        {
            story: 'calendar',
            text: 'Расписание',
            icon: <Icon28CalendarOutline />,
            view: <CalendarPage />
        },
        {
            story: 'profile',
            text: 'Профиль',
            icon: <Icon28UserCircleOutline />,
            view: <ProfilePage />
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
                {/* Список страниц переданных через объект */}
                { this.pages.map((e, i) => React.cloneElement(e.view, {key: i, id: e.story})) }
            </Epic>
        )
    }
}