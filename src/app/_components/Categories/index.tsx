import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

import classes from './index.module.scss'

const Categories = ({ categories }: { categories: Category[] }) => {
  const reverseCategories = categories.reverse()
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h2>Shop by Categories</h2>
        <Link href="/products">Show All</Link>
      </div>

      <div className={classes.list}>
        {reverseCategories.map(category => {
          return <CategoryCard key={category.id} category={category} />
        })}
      </div>
    </section>
  )
}

export default Categories
