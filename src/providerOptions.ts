import UAuthSPA from '@uauth/js'
import * as UAuthWeb3Modal from '@uauth/web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import {IProviderOptions} from 'web3modal'
import {
  REACT_APP_CLIENT_ID,
  REACT_APP_REDIRECT_URI,
  REACT_APP_INFURA_ID,
} from './config';

const uauthOptions: UAuthWeb3Modal.IUAuthOptions = {
  clientID: REACT_APP_CLIENT_ID!,
  redirectUri: REACT_APP_REDIRECT_URI!,
  scope: 'openid wallet email profile:optional social:optional',
}

const providerOptions: IProviderOptions = {
  'custom-uauth': {
    display: UAuthWeb3Modal.display,
    connector: UAuthWeb3Modal.connector,
    package: UAuthSPA,
    options: uauthOptions,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: REACT_APP_INFURA_ID,
    },
  },
}

export default providerOptions
