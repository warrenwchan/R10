import React, { Component } from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import queryFaves from './../../configs/models';
import { createFaves } from './../../configs/models';

import {
    Text,
    View,
    Image,
    Button,
    Platform,
} from 'react-native';

class Session extends Component {
    constructor() {
        super();

        this.state = {
            faved: false
        }
    }

    favedCheck (favedId) {
        this.setState({
            faved: !this.state.faved
        })
        console.log(favedId)
    }

    toggleFave () {
        if (this.state.faved) {
            return <Icon style={styles.heart} name={Platform.OS === 'ios'? 'ios-heart': 'md-heart'} size={14} />
        }
    }

    render() {
        return (
            <View style={styles.sessionContain}>
                <View style={styles.sessionHeading}>
                    <Text style={styles.sessionGreyText}>{this.props.session.location}</Text>
                    {this.toggleFave()}
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
                <Button
                    style={styles.favButton}
                    onPress={() => (this.favedCheck(this.props.session.session_id))}
                    title="Add to favorites"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

            </View>
        );
    }
}

Session.propTypes = {
    session: PropTypes.object,
    speaker: PropTypes.object,
};

export default Session;
