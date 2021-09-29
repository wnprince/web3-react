import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

import { tokenData } from './entry';

const TokenDrop: React.FC = () => {
    const theme = useTheme();
    const [tokenId, setToken] = useState(0);
    const [isDetailed, setDetailed] = useState(false);

    return (
        <StyledContainer
            bgcolor={isDetailed ? 'topbarbg.light' : 'topbarbg.contrastText'}
            border='1px solid'
            borderColor={isDetailed ? 'transparent' : 'topbarbg.dark'}
            borderRadius='29.63px'
            onClick={() => setDetailed(!isDetailed)}
        >
            <Box display='flex' alignItems='center'>
                <img src={tokenData[tokenId].icon} alt='' />
                <Box color='landfilthelp.dark' ml='14.59px' fontSize='12px'>{tokenData[tokenId].name}</Box>
            </Box>
            <Box display='flex' alignItems='center'>
                <DetailIcon theme={theme} isDetailed={isDetailed} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66699 6.33398L8.00033 10.6673L12.3337 6.33398" stroke="#0F1030" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </DetailIcon>
            </Box>
            {isDetailed &&
                <Details
                    bgcolor='topbarbg.contrastText'
                    borderRadius='10px'
                    boxShadow='0px 10px 24px rgba(22, 50, 66, 0.1)'
                    padding='15px 0'
                    position='absolute'
                    top='calc(100% + 15px)'
                    left='0'
                    zIndex='1'
                    width='100%'
                >
                    {tokenData.map((each: any, i: number) =>
                        <TokenRow 
                            key={i}
                            theme={theme}
                            display='flex'
                            justifyContent='space-between'
                            padding='5px 0 5px 10px'
                            onClick={() => setToken(i)}
                        >
                            <Box display='flex'>
                                <img src={each.icon} alt='' />
                                <Box color='topbarname.main' ml='14.59px'>{each.name}</Box>
                            </Box>
                            <YellowRight width='2px' height='23px' borderRadius='33px' />
                        </TokenRow>
                    )}
                </Details>
            }
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
    transition: .3s;
    position: relative;
    cursor: pointer;
    width: 122.95px;
    padding: 6.41px 10px 6.59px 6.41px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    * {
        font-family: Poppins;
        font-weight: 500 !important;
    }
`;

const DetailIcon = styled.svg<{ theme: any; isDetailed:boolean; }>`
    transition: .3s;
    transform: ${({ isDetailed }) => isDetailed ? 'rotate(-180deg)' : 'rotate(0deg)'};
    * {
        stroke: ${({ theme }) => theme.palette.landfilthelp.dark};
    }
`;

const Details = styled(Box)`
    >div+div {
        margin-top: 10px;
    }
`;

const YellowRight = styled(Box)`
`;

const TokenRow = styled(Box)<{ theme:any; }>`
    transition: .3s;
    &:hover {
        background: ${({ theme }) => theme.palette.topbaricon.contrastText};
        >${YellowRight} {
            background: ${({ theme }) => theme.palette.cardtxt.main};
        }
    }
`;


export default TokenDrop;