const getShortcuts = async () => {
  response = await fetch('https://api.testvalley.kr/main-shortcut/all')
}

export const Shortcuts = () => {
  return (
    <div>Shortcuts</div>
  )
}
