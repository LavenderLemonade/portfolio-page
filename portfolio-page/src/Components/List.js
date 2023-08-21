import React from 'react'


export default function List(props) {

    const listItems = props.items.map((item) => <li> {item} </li>);

    return (
        <div>
            <ul> {listItems} </ul>
        </div>
    )
}




