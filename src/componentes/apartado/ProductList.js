import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product.js'


function ProductList(props) {
  return (
      <Grid>
        <Grid.Row columns={4}>
          {props.products.map(p => {
            return (
              <Grid.Column>
                <Product
                  key={p.id}
                  name={p.name}
                  picture={p.picture}
                  price={p.price}
                  marca={p.marca}
                  status={p.status}
                  onSaveProduct={() => props.onSaveProduct(p.id)}
                  onIncrementProduct={() => props.onIncrementProduct(p.id)}
                  onRemoveProduct={() => props.onRemoveProduct(p.id)}
                />
              </Grid.Column>
            )
          })}
        </Grid.Row>
      </Grid>
  )
}

export default ProductList