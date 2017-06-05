import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { _fetchFaves } from './../../redux/modules/faves';

import Faves from './Faves';

import {
  ActivityIndicator,
  ListView
} from 'react-native';

class FavesContainer extends Component {

    static route = {
        navigationBar: {
        title: 'Faves',
        }
    }

    componentDidMount () {
        this.props.fetchFaves()
    }

    render () {
        if (this.props.isLoading) {
            return (
                <ActivityIndicator animating={true} size="small" color="black" />
            );
            } else {
            return (
                <Faves
                    faves={this.props.dataSource}
                />
            );
        }
    }
}

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2
});

function mapStateToProps(state) {
    return {
        dataSource: ds.cloneWithRowsAndSections(
            state.faves.favesData.dataBlob,
            state.faves.favesData.sectionIds,
            state.faves.favesData.rowIds
        ),
        isLoading: state.faves.isloading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchFaves () {

            dispatch(_fetchFaves())
        }
    }
}

FavesContainer.propTypes = {
    dataSource: PropTypes.object,
    fetchFaves: PropTypes.func,
    isLoading: PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(FavesContainer);
