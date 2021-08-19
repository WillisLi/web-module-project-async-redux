import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getWaifu, fetchFail  } from '../actions/waifuActions';
import styled from 'styled-components'
import './Waifu.css';
const WaifuSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ButtonSection = styled.div`
    width: 20vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0% 0% 3%;
`

const Waifu = props => {
    const { url, isFetching, error } = props;

    useEffect(()=> {
        props.getWaifu();
      }, []);

    if (error) {
        return <h2>We got an error: {error}</h2>;
    }
    
      if (isFetching) {
        return <h2>Fetching person for ya!</h2>;
    }

    const handleClick = ()=> {
        props.getWaifu();
    }

    return (
        <WaifuSection>
            <h2>Hiya!~</h2>
            <img src={url} alt = "waifu" />
            <ButtonSection>
                <button onClick={handleClick}>Find a new Waifu!</button>
                <button onClick={()=> {
                    props.fetchFail("Pressed the Error button!!!");
                }}> Error Button</button>
            </ButtonSection>
        </WaifuSection>
    )
}

const mapStateToProps = state => {
    return ({
        url: state.url,
        isFetching: state.isFetching,
        error: state.error
    })
}

export default connect(mapStateToProps, { getWaifu, fetchFail})(Waifu);