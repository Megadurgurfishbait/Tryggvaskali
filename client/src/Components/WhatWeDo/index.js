import React from 'react';
import styled from 'styled-components';

import {SplitScreen} from '../Reusables/';
import MegaButton from './MegaButton';

const WhatWeDo = () => {




    return (
        <WWDContainer>
            <SplitScreen compJc={"space-evenly"} compAi={"center"} compWidth={"100"}>
            <FakeContainers>           </FakeContainers>
            <FakeContainers>           </FakeContainers>
            <FakeContainers>           </FakeContainers>
            </SplitScreen>
            <SplitScreen>

            </SplitScreen>
            <SplitScreen compBg={"blue"}compJc={"center"} compAi={"center"}  compWidth={"100"}>
                    <MegaButton />
            </SplitScreen>

        </WWDContainer>

    )
}


export default WhatWeDo;

const FakeContainers = styled.div`
    width: 300px;
    height: 400px;
    display: flex;
    background-color: green;
    margin-top: 150px;

`;
const WWDContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: red;
    display: flex;
    position: relative;
    flex-direction: column;
`;