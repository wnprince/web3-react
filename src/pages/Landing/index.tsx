import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Box, Button } from '@material-ui/core'
import BigNumber from 'bignumber.js'
import axios from 'axios'

import BridgeEth from '../../build/contracts/BridgeEth.json'
import BridgeBsc from '../../build/contracts/BridgeBsc.json'
import TokenEth from '../../build/contracts/TokenEth.json'
import TokenBsc from '../../build/contracts/TokenBsc.json'
import Web3 from 'web3'

const decimalNumber = new BigNumber("1000000000000000000")
const bscNetworkId = 97
const ethNetworkId = 3
const feeAmount = 2
const apiEndpoint = 'http://13.58.253.172:3000'

declare let window: any

interface Props {
    account: any;
}

const Landing: React.FC<Props> = ({ account }) => {
    const [balance, setBalance] = useState(0)
    const [addressValue, setAddressValue] = useState('')

    useEffect(() => {
        if (account) {
            fetchBalance()
            setAddressValue(account)
        }
    }, [account])

    const fetchBalance = async () => {
        let value
        const tokenBscInstance = await new window.web3.eth.Contract(TokenBsc.abi, TokenBsc.networks[bscNetworkId    ].address)
        value = await tokenBscInstance.methods.balanceOf(account).call()
        setBalance(parseInt(new BigNumber(value).dividedBy(decimalNumber).decimalPlaces(2).toJSON()))
    }

    const onBridgeBSC = async () => {
        const chainId = await window.web3.eth.getChainId();

        const amount = new BigNumber(0.000000000000001).multipliedBy(decimalNumber).toJSON()
        const amountToApprove = (new BigNumber(0.000000000000001).plus(feeAmount)).multipliedBy(decimalNumber).toJSON()

        // A nonce is an abbreviation for "number only used once," which is a number added to a hashed—or encrypted—block in a blockchain that, when rehashed, meets the difficulty level restrictions
        const nonce = 1;

        // soliditySha3()   = Will calculate the sha3 of given input parameters in the same way solidity would. This means arguments will be ABI converted and tightly packed before being hashed.
        // t = type
        // v = value
        const message = window.web3.utils.soliditySha3(
            { t: 'address', v: account },
            { t: 'address', v: addressValue },
            { t: 'uint256', v: amount },
            { t: 'uint256', v: nonce },
        ).toString('hex')

        // sign()   = If you have the original message and the signed message, you can discover the signing account address using web3.eth.personal.ecRecover. See example below.
        // message  = Data to sign. If String it will be converted using web3.utils.utf8ToHex.
        // account  = Address to sign data with.
        const signature = await window.web3.eth.personal.sign(
            message,
            account
        );

        const bridgeEthAddress = BridgeEth.networks[ethNetworkId].address;
        // Contract()   = Creates a new contract instance with all its methods and events defined in its json interface object.
        // abi          = Object: The json interface for the contract to instantiate
        // address      = String (optional): The address of the smart contract to call.
        const tokenEthInstance = await new window.web3.eth.Contract(TokenEth.abi, TokenEth.networks[ethNetworkId].address);
        const bridgeEthInstance = await new window.web3.eth.Contract(BridgeEth.abi, bridgeEthAddress);

        // Approve() = 0.0002 = An approve function would set how much ether the contract is allowed to transfer from the origin address.
        // burn()    = 0.0002 = Burn the coins in an attempt to increase the value of the coins that remain in circulation.
        await tokenEthInstance.methods.approve(bridgeEthAddress, amountToApprove).send({ from: account });
        await bridgeEthInstance.methods.burn(account, amount, nonce, signature).send({ from: account });

        await axios.post(`${apiEndpoint}/ethbridge`, {
            from: account,
            to: addressValue,
            amount,
            nonce,
            signature
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    return (
        <StyledContainer>
            {account &&
                <>
                    <Box color='white'>Address: {account}</Box>
                    <Box color='white'>Balance: {balance}</Box>
                    <Box mt={3}>
                        <Button variant='contained' onClick={onBridgeBSC}>Wrap</Button>
                    </Box>
                </>
            }
        </StyledContainer>
    )
}

const StyledContainer = styled(Box)`
`

export default Landing