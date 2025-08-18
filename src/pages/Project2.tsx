import { useState, type ReactNode } from 'react'
import { faker } from '@faker-js/faker'
import withToggles from '../components/withToggles'
import '../styles/project2.css' 

/*Types*/
type Product = {
  id: string
  title: string
  category: string
  summary: string
  featureCount: number
}

type Maker = {
  id: string
  name: string
  nationality: string
  bio: string
}


const categories = ['Electronics', 'Furniture', 'Appliances', 'Clothing', 'Sports', 'Automotive']

const products: Product[] = Array.from({ length: 12 }, () => ({
  id: faker.string.uuid(),
  title: faker.commerce.productName(),            
  category: faker.helpers.arrayElement(categories),
  summary: faker.commerce.productDescription(),   
  featureCount: faker.number.int({ min: 3, max: 12 }),
}))

const makers: Maker[] = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  name: faker.company.name(),                    
  nationality: faker.location.country(),
  bio: faker.company.catchPhrase(),               
}))

/* Item Components */
function ProductItem({ product }: { product: Product }) {
  return (
    <li className="book">
      <p className="book-title">{product.title}</p>
      <p className="book-meta">
        <strong>{product.category}</strong> · {product.featureCount} features
      </p>
      <p className="book-summary">{product.summary}</p>
    </li>
  )
}

function MakerItem({
  maker,
  defaultVisibility = false,
}: {
  maker: Maker
  defaultVisibility?: boolean
}) {
  const [isVisible, setIsVisible] = useState<boolean>(defaultVisibility)

  return (
    <li
      className="author"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <p className="author-name">{maker.name}</p>
      <p className="author-nationality">{maker.nationality}</p>
      {isVisible && (
        <p className="author-bio">
          <strong>About:</strong> {maker.bio}
        </p>
      )}
    </li>
  )
}


function List<T>({
  title,
  items,
  render,
}: {
  title: string
  items: T[]
  render: (item: T) => ReactNode
}) {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  const displayItems = isCollapsed ? items.slice(0, 3) : items

  function toggleOpen() {
    setIsOpen((v) => !v)
    setIsCollapsed(false)
  }

  return (
    <div className="list-container">
      <div className="heading">
        <h2>{title}</h2>
        <button onClick={toggleOpen}>{isOpen ? <span>&or;</span> : <span>&and;</span>}</button>
      </div>

      {isOpen && <ul className="list">{displayItems.map(render)}</ul>}

      <button onClick={() => setIsCollapsed((c) => !c)}>
        {isCollapsed ? `Show all ${items.length}` : 'Show less'}
      </button>
    </div>
  )
}


function MakerList({
  title,
  items,
}: {
  title: string
  items: Maker[]
}) {
  return (
    <ul className="list" aria-label={title}>
      {items.map((maker) => (
        <MakerItem key={maker.id} maker={maker} />
      ))}
    </ul>
  )
}

const MakerListWithToggles = withToggles<Maker>(MakerList)

/* Page */
export default function Project2() {
  return (
    <div className="container page">
      <h1>Render Props & HOC — Products & Makers</h1>

      <div className="col-2">
        {/* Products */}
        <List<Product>
          title="Products"
          items={products}
          render={(product) => <ProductItem key={product.id} product={product} />}
        />

        {/* Makers */}
        <MakerListWithToggles title="Makers" items={makers} />
      </div>
    </div>
  )
}
