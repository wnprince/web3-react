import React, { useState } from 'react';
import styled from 'styled-components';
import { Box, useTheme } from '@material-ui/core';

interface Props {
    toCopy: string;
}

const Tooltip = styled(Box)<{ istooltipshow:any; theme:any; }>`
    display: ${({ istooltipshow }) => (istooltipshow ? 'block' : 'none')};
    position: fixed;
    top: 90px;
    right: 20px;
    text-align: center;
    background-color: #244B57;
    color: #FAFAFA;
    border-radius: 50px;
    padding: 10px 20px;
    font-weight: 600;
`;

const CopyToClipboard: React.FC<Props> = ({ toCopy, children, ...props }) => {
    const [istooltipshow, setIsTooltipDisplayed] = useState(false);
    const theme = useTheme();

    return (
        <StyledButton
            onClick={(e) => {
                e.stopPropagation();
                if (navigator.clipboard) {
                    navigator.clipboard.writeText(toCopy);
                    setIsTooltipDisplayed(true);
                    setTimeout(() => {
                        setIsTooltipDisplayed(false);
                    }, 3000);
                }
            }}
            {...props}
        >
            {children}
            <Tooltip istooltipshow={istooltipshow ? 1 : 0} theme={theme}>Copied!</Tooltip>
        </StyledButton>
    );
};

const StyledButton = styled(Box)`
    display: flex;
`;

export default CopyToClipboard;