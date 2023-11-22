'use client';
import Header from './components/Header';
import Swap from './components/Swap';
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum, base, zora],
  [
    alchemyProvider({ apiKey: 'dSf4F4WefqOGVe_iGwvai-3Tg9k07-h6' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  chains
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
});

export default function Home() {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: '#7b4fe4',
          accentColorForeground: 'white',
          borderRadius: 'large',
          fontStack: 'system',
          overlayBlur: 'small'
        })}
      >
        <div>
          <Header />
          <div className="flex justify-center">
            <Swap />
          </div>
        </div>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
