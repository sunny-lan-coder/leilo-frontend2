import React from 'react'
import loadingWrapper from "../util/loadingWrapper";
import View from "react-flexbox";

export default function (props) {
    return <div style={props.style}>{loadingWrapper(props.children ? (props.children.length === 0 ? [{
        key: "empty",
        content: "Empty list"
    }] : props.children).map((item, index) => {
        return <View auto key={item.key} row style={{
            paddingTop: index === 0 ? "0" : props.spacing ? props.spacing:"10px",
        }}>
            {item.content}
        </View>
    }) : undefined)}</div>
}