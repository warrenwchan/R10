import React, { Component } from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';

import LinearGradient from 'react-native-linear-gradient';

import {
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity
} from 'react-native';

class Session extends Component {

    favedCheck (favedId) {
        return this.props.favedIds.includes(favedId) ? this.props.deleteFaves(favedId) : this.props.addFaves(favedId)
        console.log(this.props.favedIds)
    }

    toggleFave (favedId) {
        return this.props.favedIds.includes(favedId) && <Icon style={styles.heart} name={Platform.OS === 'ios'? 'ios-heart': 'md-heart'} size={14} />
    }

    buttonTitle(favedId) {
        return this.props.favedIds.includes(favedId) ? `Remove from favorites` : `Add to favorites`
    }

    render() {
        console.log(this.props.session.session_id)
        console.log(this.props.favedIds)
        return (
            <View style={styles.sessionContain}>
                <View style={styles.sessionHeading}>
                    <Text style={styles.sessionGreyText}>{this.props.session.location}</Text>
                    {this.toggleFave(this.props.session.session_id)}
                </View>
                <Text style={styles.sessionTitle}>{this.props.session.title}</Text>
                <Text style={styles.sessionTime}>{moment(this.props.session.start_time).format('LT')}</Text>
                <Text style={styles.sessionDescription}>{this.props.session.description}</Text>
                <Text style={styles.sessionGreyText}>Presented by:</Text>
                <View style={styles.speakerContain} >
                    <Image
                        style={styles.speakerImage}
                        source={{uri: this.props.speaker.image}}
                    />
                    <Text style={styles.sessionSpeakerName}>{this.props.speaker.name}</Text>
                </View>
                <TouchableOpacity style={styles.faveButton} onPress={() => (this.favedCheck(this.props.session.session_id))}>
                    <LinearGradient
                        style={styles.linearGradient}
                        colors={[ '#9963ea', '#cf392a' ]}
                        start={{x: 0.5, y: 0.25}}
                        end={{x: 0.0, y: 1.0}}
                    >
                        <Text style={styles.buttonTitle}>{this.buttonTitle(this.props.session.session_id)}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        );
    }
}

Session.propTypes = {
    session: PropTypes.object,
    speaker: PropTypes.object,
    favedIds: PropTypes.array,
};

export default Session;
