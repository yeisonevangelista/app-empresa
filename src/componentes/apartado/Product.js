import React from 'react'
import Format from './numberFormat.js'
import { Card, Img, Label, Button } from '@material-ui/core'

function Product(props) {
  return(
    <Card style={{ marginTop: 15 }}>
      <img size="small" src={props.picture}  />
      <Card.Content>
        <Card.Header style={{fontSize: 15}}>{props.name}</Card.Header>
        <Card.Meta>
          <Format number={props.price}/>
        </Card.Meta>
        <Card.Description>
          <h2>{props.marca}</h2>
          <h2>{props.status} en stock</h2>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          basic
          compact
          color='blue'
          floated='right'
          onClick={props.onSaveProduct}
        >
          Agregar al carrito
        </Button>
      </Card.Content>
      <Card.Content extra>
        <Button.Group floated='right'>
          <Button
            compact
            onClick={props.onIncrementProduct}
            >+</Button>
          <Button
            compact
            onClick={props.onRemoveProduct}
            >-</Button>
        </Button.Group>
      </Card.Content>
    </Card>
  )
}

export default Product