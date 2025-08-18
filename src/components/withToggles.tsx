import { useState, type ComponentType } from 'react'

export default function withToggles<T>(
  WrappedComponent: ComponentType<{ title: string; items: T[] }>
) {
  return function ListWithToggles(props: { title: string; items: T[] }) {
    const [isOpen, setIsOpen] = useState<boolean>(true)
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

    const displayItems = isCollapsed ? props.items.slice(0, 3) : props.items

    function toggleOpen() {
      setIsOpen((v) => !v)
      setIsCollapsed(false)
    }

    return (
      <div className="list-container">
        <div className="heading">
          <h2>{props.title}</h2>
          <button onClick={toggleOpen}>{isOpen ? <span>&or;</span> : <span>&and;</span>}</button>
        </div>

        {isOpen && <WrappedComponent {...props} items={displayItems} />}

        <button onClick={() => setIsCollapsed((c) => !c)}>
          {isCollapsed ? `Show all ${props.items.length}` : 'Show less'}
        </button>
      </div>
    )
  }
}
