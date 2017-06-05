import React, { Component } from 'react';

import Router from './../navigation/router';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, fonts } from './../configs/styles';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
        renderBackground: () => (
            <LinearGradient
                style={styles.linearGradient}
                colors={[ '#9963ea', '#cf392a' ]}
                start={{x: 0.5, y: 0.25}}
                end={{x: 0.0, y: 1.0}}
            />
        )
    }
}

var styles = ({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

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
                initialTab="schedule"
                tabBarColor={colors.black}
            >

                <TabItem
                    id="schedule"
                    title="Schedule"
                    renderIcon={(isSelected) => this.renderIcon( 'ios-calendar', isSelected)}
                    renderTitle={this.renderTitle}
                >
                    <StackNavigation
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                        defaultRouteConfig={defaultRouteConfig}
                    />
                </TabItem>

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

                <TabItem
                    id="faves"
                    title="Faves"
                    renderIcon={(isSelected) => this.renderIcon( 'ios-heart', isSelected)}
                    renderTitle={this.renderTitle}
                >
                    <StackNavigation
                        id="faves"
                        navigatorUID="faves"
                        initialRoute={Router.getRoute('faves')}
                        defaultRouteConfig={defaultRouteConfig}
                    />
                </TabItem>

            </TabNavigation>
        )
    }

    renderIcon( iconName, isSelected ) {
        return <Icon name={iconName} size={24} color={isSelected? colors.white: colors.mediumGrey} />
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
