import React from 'react'
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';
import styled from 'styled-components';
import ContentContainer from 'components/ContentContainer';

const Container = styled.div`
    display: grid;
    grid-template-columns: 20% auto; 
    width: 100vw;
`;

const MainPage = () => {
    return (
        <div className="h-screen">
            <Header />
            <Container className="pt-20">
                <Sidebar />
                <ContentContainer/>
            </Container>
        </div>
    )
}
export default MainPage;
