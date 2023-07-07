import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { useContract, useContractWrite } from '@thirdweb-dev/react'
import { useState } from 'react'

const WriteNote: NextPage = () => {
  const contractAddress = '0x7E237aF1E235F76265FE5834422bb9709986367b'
  const { contract } = useContract(contractAddress)
  const {
    mutate: write,
    isLoading,
    error,
  } = useContractWrite(contract, 'writeNote')

  const [id, setId] = useState('')
  const [note, setNote] = useState('')

  return (
    <div className={styles.container}>
      <h1> WriteNote</h1>
      <section className={styles.info}>
        <p> ID: </p>
        <input
          type="text"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </section>
    </div>
  )
}

export default WriteNote
