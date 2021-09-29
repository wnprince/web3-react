import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Box } from '@material-ui/core';

import ConnectRow from './ConnectRow';
import { Login } from "../../types";
import Web3 from 'web3';
import { connections, connectorLocalStorageKey } from "./entry";

declare let window: any;

interface Props {
    open: any;
    setOpen: any;
    login: Login;
}

const ConnectModal: React.FC<Props> = ({ open, setOpen, login }: any) => {
    const [id, setId] = useState(-1);
    const loadWeb3 = async () => {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum);
            window.ethereum.enable();
        }
    }
    const connectWallet = async () => {
        login(connections[id].connectorId);
        window.localStorage.setItem(connectorLocalStorageKey, connections[id].connectorId);
        await loadWeb3()
        setId(id)
        setOpen(false)
    }
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Container bgcolor='white' fontFamily='Poppins' color='white'>
                <Wrapper display='flex' flexDirection='column' justifyContent='center' alignItems='center' bgcolor='topbarbg.main'>
                    <Box color='cardtxt.contrastText' fontSize='24px' fontWeight='700' lineHeight='120%'>Connect to Wallet</Box>
                    <Box mt='30px' width='359px' display='flex' flexDirection='column'>
                        {connections.map((each: any, i: number) =>
                            <ConnectRow
                                key={i}
                                login={login}
                                walletConfig={each}
                                id={each.id}
                                focus={id === each.id}
                                name={each.name}
                                icon={each.icon}
                                setId={setId}
                                setOpen={setOpen}
                            />
                        )}
                    </Box>
                    <Box mt='50px' width='100%'>
                        <Box component='button'
                            onClick={connectWallet}
                        >
                            Connect
                        </Box>
                    </Box>
                </Wrapper>
            </Container>
        </Modal>
    );
}

const Container = styled(Box)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    background: transparent;
`;


const Wrapper = styled(Box)`
    border-radius: 16px;
    padding: 40px 26px 40px 25px;
    >div:nth-of-type(2) {
        >div+div {
            margin-top: 10px;
        }
    }
    >div:last-of-type >button{
        width: 100%;
        height: 44px;
    }
`;

export default ConnectModal;