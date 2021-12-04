import styled from 'styled-components'; 

export const LinkArea = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
background-color: ${props =>props.active ? '#2a9d8f' : 'transparent'};
border-radius: 10px;
margin-bottom: 10px;
`;

export const LinkIcon = styled.img`
width: 34px;
height: 34px;
`;