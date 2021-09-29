import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';

import { Login, Config } from "../../types";

interface Props {
    focus?: boolean;
    id: number;
    name: string;
    icon: any;
    setId: any;
    walletConfig: Config;
    login: Login;
    setOpen: () => void;
}

const ConnectRow: React.FC<Props> = ({ login, walletConfig, focus, id, name, icon, setId, setOpen } :any ) => {
    return (
        <StyledContainer width='calc(100% - 42px)' height='26px' 
            bgcolor={!focus ? 'connectmodal.main' : 'transparent'}
            border='1px solid'
            borderColor={focus ? 'cardtxt.main' : 'transparent'}
            borderRadius='40px'
            display='flex' justifyContent='space-between' alignItems='center'
            padding='19.75px 20px'
            onClick={() => {
                setId(id)
            }}
        >
            <Box display='flex' alignItems='center'>
                <ConnectBall width='26px' height='26px'
                    borderRadius='50%'
                    border={focus ? '1px solid' : '2px solid'}
                    borderColor={focus ? 'cardtxt.main' : '#BABBD3'}
                    position='relative'
                >
                    {focus &&
                        <Box width='13px' height='13px' borderRadius='50%' bgcolor='cardtxt.main' position='absolute' left='50%' top='50%' />
                    }
                </ConnectBall>
                <Box color='cardtxt.contrastText' ml='15px' fontFamily='Lato'>{name}</Box>
            </Box>
            <Box width='40px' height='40px' borderRadius='50%' bgcolor='#EEEEEE' display='flex' justifyContent='center' alignItems='center'>
                <img src={icon} alt='connection-icon' />
            </Box>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box)`
    cursor: pointer;
`;

const ConnectBall = styled(Box)`
    >div {
        transform: translate(-50%, -50%);
    }
`;

export default ConnectRow;