import React, { Component } from "react";
import Card from './CardUi'
import "./card-style.css"

function Cards() {
    return (
        <div className="container-fluid d-flex justify-content-center">
        <div className="row">
            <div className="col-md-4">
                <Card />
            </div>
            <div className="col-md-4">
                <Card />
            </div>
            <div className="col-md-4">
                <Card />
            </div>
        </div>
    </div>
    )
}

export default Cards
