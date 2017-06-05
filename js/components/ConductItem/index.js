import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';

import {
    Text,
    View,
    Animated,
    TouchableOpacity,
    LayoutAnimation,
} from 'react-native';

class ConductiveItem extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: true,
            rotate: new Animated.Value(0)
        };
        this.toggleButton = this.toggleButton.bind(this);
    }

    activeCheck () {
        LayoutAnimation.easeInEaseOut();
        this.setState({
            active: !this.state.active
        });
    }

    toggleButton () {
        if (this.state.active) {
            return <Text style={styles.infoButton}>+ </Text>
        } return <Text style={styles.infoButton}>- </Text>
    }
    render() {
        return (
            <View style={styles.itemContain}>
                <TouchableOpacity onPress={this.activeCheck.bind(this)}>
                    <Text style={styles.itemTitle}>
                        {this.toggleButton()}
                        {this.props.title}
                    </Text>
                </TouchableOpacity>
                <Text style={ this.state.active ? styles.infoClosed : styles.itemDesc}>
                    {this.props.description}
                </Text>
            </View>
        );
    }
}

ConductiveItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default ConductiveItem;
