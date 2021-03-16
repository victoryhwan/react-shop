import React, { useState } from "react";
import {Button, Jumbotron} from 'react-bootstrap'
import Data from '../data.js';

let Detail = function Detail() {
    let [shoes] = useState(Data);

    return (
        <div>
            <Jumbotron className="background">
            <h1>20% Season OFF</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for calling
              extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          <div className="container">
            <div className="row">

              {
                shoes.map((item, idx) => {
                  return (
                      <Card shoes={item} key={idx} i={idx}></Card>
                    )
                })
              }
            </div>
          </div>
        </div>
    )
}

function Card (props) {
    return (
      <div className="col-md-4">
        <img src={"https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"} width="100%" alt=""></img>
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content} & {props.shoes.price}</p>
      </div>
    )
  }

export default Detail