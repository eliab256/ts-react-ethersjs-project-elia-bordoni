import { mainnet, sepolia } from "wagmi/chains";
import { DedicatedWalletConnector } from "@magiclabs/wagmi-connector";

// Configurazioni delle chain
const chains = [mainnet, sepolia];

// Impostazioni del Magic Wallet
const API_KEY = import.meta.env.VITE_MAGIC_API_KEY || "<YOUR_MAGIC_API_KEY>"; // Ottieni la chiave API dall'ambiente
const RPC_URL = "https://mainnet.infura.io/v3/<YOUR_INFURA_PROJECT_ID>"; // Cambia con il tuo RPC provider
const CHAIN_ID = mainnet.id;

// Connettore Magic
export const magicConnector = new DedicatedWalletConnector({
  chains,
  options: {
    apiKey: API_KEY,
    isDarkMode: true,
    oauthOptions: {
      providers: ["google", "facebook"], // Aggiungi OAuth se necessario
    },
    magicSdkConfiguration: {
      network: {
        rpcUrl: RPC_URL, // URL per la connessione RPC
        chainId: CHAIN_ID,
      },
    },
  },
});
