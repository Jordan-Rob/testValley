import { Shortcut } from "./Shortcut";
import style from './shortcuts.module.css'

const getShortcuts = async () => {
  const response = await fetch('https://api.testvalley.kr/main-shortcut/all')

  if(!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

  return response.json();
}

export const Shortcuts = async () => {

  const shortcuts = await getShortcuts()

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        {shortcuts.map(
          shortcut => (
            <Shortcut 
              key={shortcut.mainShortcutId}
              shortcut={shortcut}
            />
          )
        )}
      </div>
    </div>
  )
}
