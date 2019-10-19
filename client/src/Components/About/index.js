import React from "react";
import styled from "styled-components";
import Layout from "../../layout/";
import { Colors, Images, VAR } from "../../Assets";

const About = () => {
  return <Layout bgColor={Colors.LIGHT_GREEN} bgImage={Images.BaruBakgrunnur}>



  <Container>

  </Container>


  </Layout>;
};

export default About;


const Container = styled.div`

  height: 800px;
  width: 800px;
  ${VAR.BorderDarker};
  margin: 5px auto;

`;