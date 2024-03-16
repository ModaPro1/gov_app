export default function MainTitle({classes, color, children}) {
  return (
    <h2 className={`main-title ${classes}`} style={{color}}>{children}</h2>
  )
}