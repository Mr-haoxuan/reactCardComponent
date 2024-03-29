"use strict"

import React from "react";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    showBodys() {
        const { content: { cardBodys = [] } } = this.props;

        return cardBodys.map((cardItem, index) => {
            let showLinks = cardItem.links.map((e, i) => {
                return <a className="btn btn-warning" key={i} href={e.linkurl}>{e.linkname}</a>
            })

            return (
                <div className="card-body text-white bg-info" key={index}>
                    <h4 className="card-title">{cardItem.title}</h4>
                    <h6 className="card-subtitle">{cardItem.subtitle}</h6>
                    <p className="card-text">{cardItem.text}</p>
                    <p>
                        {showLinks}
                    </p>
                </div>
            )
        })
    }

    showListGroup = () => {
        const { content: { listGroup = [] } } = this.props;

        return listGroup.map((listItem, index) => {
            return (
                <li className="list-group-item" key={index}>
                    {listItem}
                </li>
            )
        })
    }

    render() {
        const { content } = this.props;

        return (
            <div className="card text-center" style={{ width: 18 + "rem" }}>
                <div className="card-header">{content.header}</div>
                <img className="card-img-top" src={content.img} />
                {this.showBodys()}
                <ul className="list-group list-group-flush">{this.showListGroup()}</ul>
                <p className="card-footer">{content.footer}</p>
            </div>
        )
    }
}