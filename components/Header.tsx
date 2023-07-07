import { ConnectWallet } from '@thirdweb-dev/react'
import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <div>
      <div className={styles.container}>
        <div>
          <Link
            className={router.pathname == '/' ? styles.active : styles.link}
            href={'/'}
          >
            Claim
          </Link>
          <Link
            className={router.pathname == '/nfts' ? styles.active : styles.link}
            href={'/nfts'}
          >
            Nfts
          </Link>
          <Link
            className={
              router.pathname == '/my-nfts' ? styles.active : styles.link
            }
            href={'/my-nfts'}
          >
            My Nfts
          </Link>
          <Link
            className={
              router.pathname == '/write-note' ? styles.active : styles.link
            }
            href={'/write-note'}
          >
            WriteNote
          </Link>
        </div>
        <ConnectWallet />
      </div>
    </div>
  )
}
export default Header
