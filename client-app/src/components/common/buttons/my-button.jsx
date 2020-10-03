import React from 'react';

const MyButton = (props) => {
    return (
    <button type="button" class="btn btn-danger"><a href={props.url}>{props.title}</a></button>
    )
}
export default MyButton;