import React, { Component } from 'react'
//import { Feed } from '@material-ui/core'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

function Cart(props){
  return(


    <Card>
      <Card.Event>
        <Card.Label image={props.img} />
        <CardContent>
          <Card.Date content={props.name} />
          <Card.Summary>
            $ {props.total} ({props.order} productos)
          </Card.Summary>
        </CardContent>
      </Card.Event>
    </Card>
  )
}

export default Cart;
