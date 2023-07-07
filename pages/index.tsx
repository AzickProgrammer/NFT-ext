import { ConnectWallet, Web3Button, useContract } from '@thirdweb-dev/react'
import styles from '../styles/Home.module.css'
import { NextPage } from 'next'

const Home: NextPage = () => {
  const contractAddress = '0x7E237aF1E235F76265FE5834422bb9709986367b'
  const { contract } = useContract(contractAddress)

  return (
    <main className={styles.main}>
      <section className={styles.info}>
        <h1>Claim NFT</h1>
        <p>ERC-721 NFT drop project using thirdweb.com</p>

        <Web3Button
          contractAddress={contractAddress}
          action={(contract) => {
            contract.erc721.claim(1)
          }}
        >
          Claim NFT
        </Web3Button>
      </section>
    </main>
  )
}

export default Home
