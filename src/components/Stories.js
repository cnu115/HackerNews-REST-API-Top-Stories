// import axios from 'axios';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStories } from '../redux/actions/index';
import Storie from './Storie';

const Stories = (props) => {

    useEffect(() => {
        props.fetchStories()
    }, [])
    
    const getStories = () => {
        console.log(props.state.stories);
        // debugger;
        if (props.state.stories.length === 0) return false;
        return props.state.stories.map((storie, index) => {
            return <Storie key={index} id={storie}/>
        })
    }
    return (
        <div className="container">
           {getStories()}
        </div>
    )
}


const mapStateToProps = (state) => {
    // console.log(state)
    return {
        state: state
    }
}


const mapDisptchToProps = (disptch) => {
    return {
        fetchStories: () => disptch(fetchStories())
    }
}

export default connect(mapStateToProps, mapDisptchToProps)(Stories);