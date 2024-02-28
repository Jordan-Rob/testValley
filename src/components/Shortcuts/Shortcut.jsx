import style from './shortcuts.module.css'
import Image from 'next/image';

export const Shortcut = ({ shortcut }) => {
  return (
    <div className={style.shortcut}>
      <div className={style.shortcutImage}>
        <Image src={`${shortcut.imageUrl}`} width={48} height={48} />
      </div>
      <div className={style.shortcutTitle}>{shortcut.title}</div>
    </div>
  )
}