"use strict"

import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card.js"

class Content extends React.Component {
    render() {
        const header = "头部";
        const footer = "底部";
        const listGroup = ["list11111", "list22222", "list3333"];
        const img = "https://gss1.bdstatic.com/9vo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=d1677662fdf2b211e42e8248f2bb0205/d833c895d143ad4b104c56d184025aafa40f0644.jpg"
        const cardBodys = [
            {
                title: "Card title",
                subtitle: "Card subtitle",
                text: "Some quick example text",
                links: [
                    {
                        linkurl: "http://www.baidu.com",
                        linkname: "百度"
                    },
                    {
                        linkurl: "http://getbootstrap.com",
                        linkname:"bootstrip4"
                    }
                ]
            }
        ];
        const content = {
            cardBodys,
            header,
            footer,
            listGroup,
            img
        };

        return <Card content={content} name="name"/>
    }
}

ReactDOM.render(
    <Content />,
    document.getElementById("root")
)