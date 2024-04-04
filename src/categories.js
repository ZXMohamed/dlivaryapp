import React, { Fragment, useState } from 'react'

import veg from "./photos/veg.jpg"
import bread from "./photos/bread.jpg"
import dre from "./photos/DRE.jpg"
import fru from "./photos/fru.jpg"
import swe from "./photos/SWE.jpg"
import pas from "./photos/PAS.jpg"


export default function Categories() {
    return (
        <Fragment>
            <section className="itemview">
                <Cat bg={ veg } name={ "Vegetables" } amount={ "43" } />
                <Cat bg={ fru } name={ "Fruits" } amount={ "32" } />
                <Cat bg={ bread } name={ "Bread" } amount={ "22" } />
                <Cat bg={ swe } name={ "Sweets" } amount={ "56" } />
                <Cat bg={ pas } name={ "Pasta" } amount={ "43" } />
                <Cat bg={ dre } name={ "Drinks" } amount={ "43" } />
                <Cat bg={ dre } name={ "Drinks" } amount={ "43" } />
            </section>
        </Fragment>
    )
}




function Cat(props) {
  return (
      <div className="card item">
          <div className="card-img-top itembg" style={ { backgroundImage: `url(${props.bg})` } }></div>
          <div className="card-body">
              <h5 className="card-title itemtitle">{props.name}</h5>
              <p className="card-text">({ props.amount })</p>
          </div>
      </div>
  )
}
