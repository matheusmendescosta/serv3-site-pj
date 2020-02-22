import React from 'react';
import { Column, Row } from 'simple-flexbox';
import download from '../../../../Assets/download.png';
import { 
  Container, 
  ContainerText, 
  Text,
  ContainerContentText,
  ContentText,
  ContainerImage,
  Image ,
  ContentButton,
  Button
} from './styles';
import colors from '../../../../Config/colors';

export default function GetDownload() {
  return (
    <Container>
      <Column flexGrow={1}>
        <Row vertical='center'>
          <Column flexGrow={1} horizontal='center'>
            <ContainerText>
              <Text>Download</Text>
                <ContainerContentText>
                  <ContentText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                  Cras tempor ante id enim aliquam porttitor. Sed imperdiet, <br />
                  tristique varius augue pellentesque quis.<br />
                  </ContentText>
                </ContainerContentText>
                
                <ContentButton>    
                  <Button background={(colors.SecondaryColor)} >Download Apple Store</Button>
                  <Button >Download PlayStore</Button>
                </ContentButton>
            
            </ContainerText>
            </Column>

            <Column flexGrow={1} horizontal='center'>
              <ContainerImage>
                <Image src={download}/>
              </ContainerImage>
            </Column>
          </Row>  
        </Column>      
    </Container>
  );
}
