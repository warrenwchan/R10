import React, { Component } from 'react';

import Router from './../navigation/router';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors, fonts } from './../configs/styles';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  StackNavigation,
  DrawerNavigation,
  DrawerNavigationItem,
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
  header: {
    height: 20
  },

  selectedItemStyle: {
    backgroundColor: colors.lightGrey
  },

  titleText: {
    fontWeight: 'bold',
    color: colors.mediumGrey,
    paddingLeft: 10
  },

  selectedTitleText: {
    color: colors.purple
  }
});

class NavigationLayout extends Component {
    static route = {
        navigationBar: {
        visible: false,
        }
    }

    renderIcon( iconName, isSelected ) {
        return <Icon name={iconName} size={24} color={isSelected? colors.purple: colors.mediumGrey} />
    }

    renderTitle( title, isSelected) {
        return (
            <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
                {title}
            </Text>
        );
    }

    render () {
        return (
            <DrawerNavigation
                id="root"
                navigatorUID="root"
                initialItem="about"
                drawerWidth={150}
                renderHeader={this._renderHeader}
            >

                <DrawerNavigationItem
                    id="about"
                    selectedStyle={styles.selectedItemStyle}
                    renderIcon={(isSelected) => this.renderIcon( 'md-information-circle', isSelected)}
                    renderTitle={isSelected => this.renderTitle('About', isSelected)}
                >
                    <StackNavigation
                        id="about"
                        navigatorUID="about"
                        initialRoute={Router.getRoute('about')}
                        defaultRouteConfig={defaultRouteConfig}
                    />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id="schedule"
                    selectedStyle={styles.selectedItemStyle}
                    renderIcon={(isSelected) => this.renderIcon( 'md-calendar', isSelected)}
                    renderTitle={isSelected => this.renderTitle('Schedule', isSelected)}
                >
                    <StackNavigation
                        id="schedule"
                        navigatorUID="schedule"
                        initialRoute={Router.getRoute('schedule')}
                        defaultRouteConfig={defaultRouteConfig}
                    />
                </DrawerNavigationItem>

            </DrawerNavigation>
        )
    }
}

export default NavigationLayout;
