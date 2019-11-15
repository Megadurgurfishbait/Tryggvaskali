import React from 'react';
import styled from 'styled-components';
import Layout from '../../layout/';
import { Colors } from '../../Assets';
import MobileControl from '../Reusables/MobileControl/MobileControl';



const MobileControlObj = {
    LeftArrow: {
      Link: "/",
      Title: "Forsíða"
    },
    RightArrow: {
      Link: "/Whatwedo",
      Title: "Þjónusta"
    }
  };


const Menu = () => {
    return (
        <Layout bgColor={Colors.GREEN}>
            <MContainer>
                <MobileControl ControlObject={MobileControlObj} />
            </MContainer>
        </Layout>
    )
}

export default Menu;


const MContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;

`;