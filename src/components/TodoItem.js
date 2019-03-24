import React, { Component } from "react";

export default class TodoItem extends Component {
    render() {
        const { title, handleDelete, handleEdit } = this.props
        return (
            <li className="list-group-item text-capitalize d-flex my-2 ">
                <h6 className="p-2">{title}</h6>
                <span className="text-success ml-auto p-2" onClick={handleEdit} >
                    <i className="fas fa-pen"></i>
                </span>
                <span className="text-danger p-2" onClick={handleDelete} >
                    <i className="fas fa-trash"></i>
                </span>
            </li>

        )
    }
}