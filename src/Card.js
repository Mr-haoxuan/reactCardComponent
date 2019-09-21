"use strict"

import React from "react";
import "./bootstrap.min.css"

export default class Card extends React.Component{
    render(){
        const content = this.props.content;
        let bodys = [];
        let listGroup = [];
        console.log(content.cardBodys)
        content.cardBodys.forEach((element,index) => {
            let aGroup = [];
            element.links.forEach((e,i) =>{
                let a = <a className="btn btn-warning " key={i} href={e.linkurl}>{e.linkname}</a>
                aGroup.push(a)
                return aGroup
            })
            console.log(element);
            let body = <div className="card-body text-white bg-info" key={index}>
                <h4 className="card-title">{element.title}</h4>
                <h6 className="card-subtitle">{element.subtitle}</h6>
                <p className="card-text">{element.text}</p>
                <p>
                    {aGroup}
                </p> 
            </div>;
            bodys[index] = body;
            return bodys
        });
        content.listGroup.forEach((element,index) => {
            let list = <li className="list-group-item" key={index}>
                {element}
            </li> 
            listGroup.push(list)
            return <ul>{listGroup}</ul>
        });
        console.log(bodys)
        return (<div className="card text-center" style={{width: 18+"rem"}}>
            <div className="card-header">{content.header}</div>
            <img className="card-img-top" src={content.img}/>
            {bodys}
            <ul className="list-group list-group-flush">{listGroup}</ul>
            <p className="card-footer">{content.footer}</p>
        </div>)
    }
}