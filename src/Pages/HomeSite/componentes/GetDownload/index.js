import React from 'react';
import download from '../../../../Assets/download.png';
import { 
  Container, 
  ContainerText, 
  Text,
  ContainerContentText,
  ContentText,
  ContainerImage,
  Image 
} from './styles';

export default function GetDownload() {
  return (
    <Container>
      <ContainerText>
        <Text>Download</Text>
          <ContainerContentText>
            <ContentText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Cras tempor ante id enim aliquam porttitor. Sed imperdiet, <br />
            tristique varius augue pellentesque quis.<br />
            </ContentText>
            <Image src={download}/>
          </ContainerContentText>
      </ContainerText>
    
          
     
    </Container>
  );
}
