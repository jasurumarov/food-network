import React, { Component } from 'react'
import axios from '../../api'
// IMAGES
import { IoStar } from "react-icons/io5";

export default class Menu extends Component {
    constructor() {
        super()
        this.state = {
            data: null
        }
    }
    componentDidMount(){
        axios
            .get("/products")
            .then(res => this.setState({data: res.data.products}))
            .catch(res => console.log(res))
    }
  render() {
    return (
      <div className='menu-section'>
        <div className="container">
            <div className="menu-section__content">
                <h5>MENU</h5>
                <h2>Food Full of treaty Love</h2>
                <p className="menu__desc">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </p>
                <div className="menu__cards">
                    {
                        this.state.data?.map(el => (
                            <div key={el.id} className="menu__card">
                                <img className='menu__card-img' src={el.images[0]} alt="card img" />
                                <div className="menu__card-title">
                                    <div>
                                        <h3 title={el.title}>{el.title}</h3>
                                        <h3>{Math.floor(el.price / 10)}$</h3>
                                    </div>
                                    <p title={`${el.description} Price is too cheap`}>{el.description} Price is too cheap</p>
                                    <article>
                                        <button>+</button>
                                        <span>
                                            {new Array(Math.round(el.rating)).fill(<IoStar/>)}
                                        </span>
                                    </article>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <button className="menu-section__btn">Learn More</button>
            </div>
        </div>
      </div>
    )
  }
}
