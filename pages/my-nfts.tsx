import { NextPage } from 'next'
import styles from '../styles/Nfts.module.css'
import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useNFTs,
} from '@thirdweb-dev/react'

const Nfts: NextPage = () => {
  const contractAddress = '0x7E237aF1E235F76265FE5834422bb9709986367b'
  const { contract } = useContract(contractAddress)
  const { data: nfts, isLoading, error } = useNFTs(contract)
  const address = useAddress()

  return (
    <div className={styles.container}>
      <section className={styles.info}>
        {isLoading ? (
          <div>Loding...</div>
        ) : (
          nfts
            ?.filter((nft) => nft.owner === address)
            .map((nft) => {
              return (
                <div key={nft.metadata.id}>
                  <ThirdwebNftMedia
                    metadata={nft.metadata}
                    height="200"
                    style={{ borderRadius: '10px' }}
                  />
                  <p>{nft.metadata.name} </p>
                </div>
              )
            })
        )}
      </section>
    </div>
  )
}

export default Nfts
