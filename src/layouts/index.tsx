import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import { StylesProvider, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';
import styled from 'styled-components';

import Topbar from './Topbar';

import { themeLight, themeDark } from '../theme';

interface Props {
    children?: any;
    isOpen: any;
    setOpen: any;
    account: any;
    login: any;
    logout: any;
}

const Layout: React.FC<Props> = ({ children, isOpen, setOpen, account, login, logout }: any) => {
    const [light, setTheme] = useState(false);
    const [omitted, setOmitted] = useState(false);

    return (
        <StylesProvider injectFirst>
            <MuiThemeProvider theme={light ? themeLight : themeDark}>
                <ThemeProvider theme={light ? themeLight : themeDark}>
                    <StyledContainer>
                        <Topbar
                            open={isOpen} setOpen={setOpen}
                            omitted={omitted} setOmitted={setOmitted}
                            account={account} login={login} logout={logout}
                        />
                        <StyledWrapper omitted={omitted ? 1 : 0}>
                            <Body omitted={omitted ? 1 : 0} theme={light ? themeLight : themeDark}>
                                {children}
                            </Body>
                        </StyledWrapper>
                    </StyledContainer>
                </ThemeProvider>
            </MuiThemeProvider>
        </StylesProvider>
    );
}

const StyledContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 100%;
    * {
        font-family: Poppins;
        font-weight: 400;
    }
`;

const StyledWrapper = styled(Box)<{ omitted:any; }>`
    margin-top: 80px;
    transition: .5s;
    // margin-left: ${({ omitted }) => !omitted ? '246px' : '84px'};
    flex: 1;
    display: flex;
    height: 100%;
    overflow: hidden;
`;

const Body = styled(Box) <{ omitted: any; theme: any; }>`
    background-color: ${({ theme }) => theme.palette.topbarbg.main};
    flex: 1;
    padding-top: 10px;
    padding-left: ${({ omitted }) => !omitted ? '42px' : '81px'};
    padding-right: 42px;
    height: 100%;
    overflow-y: auto;
`;

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout;