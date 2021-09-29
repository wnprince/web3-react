import React from 'react';
import { Box, Button } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import styled from 'styled-components';

import TokenDrop from '../components/TokenDrop';
import AvartarIcon from '../assets/images/layout/avatar.png';

import { Login } from "../types";
import { connectorLocalStorageKey } from "../components/ConnectModal/entry";
import CopyToClipboard from '../components/CopyToClipboard';

interface Props {
    open: any;
    setOpen: any;
    omitted: any;
    setOmitted: any;

    account?: string | null;
    login: Login;
    logout: () => void;
}

const Topbar: React.FC<Props> = ({ account, login, logout, omitted, setOmitted, open, setOpen }: any) => {
    const theme = useTheme();
    const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
    return (
        <StyledContainer theme={theme}>
            <Box>
                <Box>
                    <Box display='flex'>
                        <img src={AvartarIcon} alt='' />
                    </Box>
                    <AvatarText ml='8px' theme={theme}>
                        <span>Rich</span> Quack
                    </AvatarText>
                </Box>
            </Box>
            <TopActions account={account}>
                {account ?
                    <>
                        <TokenDrop />
                        <Button variant='contained' color='secondary'
                            onClick={() => {
                                logout()
                                window.localStorage.removeItem(connectorLocalStorageKey)
                            }}
                        >
                            <Box mr='5px'>{accountEllipsis !== null ? accountEllipsis : 'Error'}</Box>
                            <CopyToClipboard toCopy={account}>
                                <ClipboardIcon theme={theme} width="24" height="24" viewBox="0 0 24 24" fill='white' xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14 8V6C14 5.44772 13.5523 5 13 5H7C6.44772 5 6 5.44772 6 6V14C6 14.5523 6.44771 15 7 15H7.77778" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    <rect x="10" y="10" width="8" height="10" rx="1" stroke="black" strokeLinejoin="round" />
                                </ClipboardIcon>
                            </CopyToClipboard>
                        </Button>
                    </>
                    :
                    <Button variant='contained' color='primary' onClick={() => setOpen(true)}>
                        Connect wallet
                    </Button>
                }
            </TopActions>
        </StyledContainer>
    );
}

const StyledContainer = styled(Box) <{ theme: any; }>`
    z-index: 3;
    position: fixed;
    width: -webkit-fill-available;
    transition: .5s;
    background-color: #0F1030;
    height: 40px;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    >div:first-of-type {
        display: flex;
        >div:first-of-type {
            display: flex;
            align-items: center;
            >svg:first-of-type path{
                stroke: #0F1030;
            }
        }
    }
    >div:last-of-type {
        display: flex;
        align-items: center;
        >button:first-of-type {
            font-weight: 500;
        }
    }
`;

const AvatarText = styled(Box) <{ theme: any; }>`
    font-family: Roboto;
    font-weight: 400;
    font-size: 14px;
    color: #FCFCFC;
    >span {
        font-weight: 700;
        color: #FCFCFC;
    }
`;

const TopActions = styled(Box) <{ account: any; }>`
    ${({ account }) => {
        if (account) return '>button:first-of-type { display:flex; align-items: center; padding: 8px 10px 6px 15px; height: 38px;}';
    }}
    >*+* {
        margin-left: 20px;
    }
`;

const ClipboardIcon = styled.svg<{ theme: any; }>`
    * {
        stroke: ${({ theme }) => theme.palette.buttonbg.light};
    }
`;

export default Topbar;