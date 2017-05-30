import React, { Component } from 'react';

import Router from './../navigation/router';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, fonts } from './../configs/styles';
import { Text } from 'react-native';

import {
  StackNavigation,
  TabNavigation,
  TabNavigationItem as TabItem,
} from '@expo/ex-navigation';

const defaultRouteConfig = {
    navigationBar: {
        tintColor: colors.white,
        titleStyle: {
            fontFamily: fonts.fontMain
        },
        backgroundColor: colors.red
    }
}

class NavigationLayout extends Component {
    static route = {
        navigationBar: {
        visible: false,
        }
    }

    render () {
        return (
            <TabNavigation
                id="root"
                navigatorUID="root"
                initialTab="about"
                tabBarColor={colors.black}
            >

                <TabItem
                    id="about"
                    title="About"
                    renderIcon={(isSelected) => this.renderIcon( 'ios-information-circle', isSelected)}
                    renderTitle={this.renderTitle}
                >
                    <StackNavigation
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute('about')}
                        defaultRouteConfig={defaultRouteConfig}
                    />
                </TabItem>

                {/*<TabItem
                    id="schedule"
                    title="Schedule"
                    renderIcon={(isSelected) => this.renderIcon( 'ios-information-circle', isSelected )}
                >
                    <StackNavigation
                        id="about"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                    />
                </TabItem>*/}

            </TabNavigation>
        )
    }

    renderIcon( iconName, isSelected ) {
        return <Icon name={"ios-information-circle"} size={24} color={isSelected? colors.white: colors.mediumGrey} />
    }

    renderTitle( isSelected, title ) {
        const titleStyle = {
            color: isSelected ? colors.white: colors.mediumGrey,
            fontSize: 12,
            fontFamily: fonts.fontMain
        }
        return <Text style={titleStyle}>{title}</Text>
    }
}

export default NavigationLayout;
