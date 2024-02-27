import Image from 'next/image'
import hicon from './images/more.png'
import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firsthalf}>
        <div className={styles.logoarea}>
          <div className={styles.logoAreaItem}>
            <Image 
              src='https://www.testvalley.kr/logo/logo-new.svg'
              width={128.345}
              height={25.093}
            />
          </div>

          <div className={styles.iconArea}>
            카테고리
          </div>
        </div>

        <div className={styles.search}>
           { /*<Image src="https://www.testvalley.kr/common/search.svg" className={styles.searcIcon} width={20} height={20}/> */}
          <input type='search' className={styles.searchNav} placeholder="살까말까 고민된다면 검색해보세요!"></input>
        </div>
      </div>

      <div className={styles.secondhalf}>
        <button>
          <Image src="https://www.testvalley.kr/common/home-event.svg" width={28} height={28} />
        </button>
        <Image src="https://www.testvalley.kr/common/vertical-bar.svg" className={styles.bar} width={1} height={14}/>
        <button>로그인 / 회원가입</button>
      </div>
    </div>
  )
}
