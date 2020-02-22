import { Link } from "gatsby";
import styled from "styled-components";
import React from "react";
import Title from '../components/Title/Title';

const SectionColor = styled.section`
  background-color: #27211E;
  padding: 50px 0;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "Area1 Area2" "Area3 Area4";


  @media all and (max-width: 768px){
	&{
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: "Area1" "Area2" "Area4" "Area3";
	}
}

    .Area1 { grid-area: Area1; }

    .Area2 { grid-area: Area2; }

    .Area3 { grid-area: Area3; }

    .Area4 { grid-area: Area4; }
`;


const Paragraph = styled.p`
  color: white;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
`;

const TextDiv = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  padding: 10px 50px;
  color: #66615F;
  font-weight: 300;
`;


const ImageDiv = styled.div`
    background-image: url('https://images.adsttc.com/media/images/5012/9a7f/28ba/0d67/1700/0893/newsletter/stringio.jpg?1414494789');
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
    max-height: 50vh;
`;

const ImageDiv2 = styled.div`
    background-image: url('https://images.adsttc.com/media/images/5012/9a7f/28ba/0d67/1700/0893/newsletter/stringio.jpg?1414494789');
    background-repeat: no-repeat;
    background-size: cover;
    height: 700px;
    max-height: 50vh;
`;

const TextH2 = styled.h2`
  color: #7D8260;
  margin: 30px 0;
  font-size: 1.2rem;
  font-weight: 400;
`;

const TextH3 = styled.h3`
  color: rgb(39,33,30);
  margin: 30px 0;
  font-size: 1.0rem;
  font-weight: 400;
`;



const AboutUs = () => (
    <>
        <SectionColor>
            <div className="container">
                <Title name="Profesjonalne usługi" />
                <Paragraph>
                    Ekspert w zasięgu ręki
            </Paragraph>
            </div>
        </SectionColor>
        <section>
            <div className="jumbotron-fluid">
                <GridContainer>
                    <ImageDiv className="Area1">

                    </ImageDiv>
                    <TextDiv className="Area2">
                        <TextH2>Badania Wzroku</TextH2>
                        <TextH3>Najmniejsze szczegóły robią największą różnicę</TextH3>

                        Skorzystaj z moich usług, a przekonasz się, że możesz otrzymać wysoką jakość stosunkowo niewielkim kosztem! Od lat świadczę profesjonalne Usługi optyczne, a nabyte przeze mnie doświadczenie i posiadana wiedza pozwalają mi zapewniać najlepsze rozwiązania w najlepszej cenie. W porównaniu z konkurencyjnymi usługodawcami wyróżniamy się wyjątkową dbałością o szczegóły i zdolnością dostosowania swoich usług do indywidualnych potrzeb każdego klienta. Badania przeprowadzania są przez najbardziej doświadczonych Optometrystów.
                    </TextDiv>
                    <TextDiv className="Area3">
                        <TextH2>Gwarancja</TextH2>
                        <TextH3>Gwarantujemy najlepszą jakoś widzenia...</TextH3>

                        Procedura przeprowadzania refrakcji, choć wydaję się skomplikowana i dokłada, powinna być również dopasowana do problemu wzrokowych pacjenta.  Opracowaliśmy własne procedury dla różnych typów okularów tak aby wyciągnąć z nich 100%
                        Dlatego nawet okulary progresywne nie będą stanowiły dla Ciebie żadnego kłopotu
                    </TextDiv>
                    <ImageDiv2 className="Area4">

                    </ImageDiv2>
                </GridContainer>
            </div>
        </section>
    </>
)


export default AboutUs
