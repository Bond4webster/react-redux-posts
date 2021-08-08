import React from 'react'
import {connect} from "react-redux";
import {createPost, showAlert} from "../redux/actions";
import {Alert} from "./Alert";

class PostForm extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            title:'',
            body:''
        }
    }

    submitHandler = event=>{
        event.preventDefault()

        const {title,body} = this.state
        if(!title.trim() || !body.trim()){
            return this.props.showAlert('Поля поста не могут быть пустыми')
        }
        const newPost ={
            title,body, id: Date.now().toString()
        }
        this.props.createPost(newPost)
        this.setState({title:'',body:''})
    }

    changeInputHandler = event=>{
        this.setState(prev=>({...prev,...{
                [event.target.name]:event.target.value
            }}))
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>

                {this.props.alert ? <Alert text={this.props.alert} />:null}

                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        name="title"
                        value={this.state.title}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="title">Cодержание поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="body"
                        name="body"
                        value={this.state.body}
                        onChange={this.changeInputHandler}
                    />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        )
    }
}

const mapDispatchToProps ={
    createPost, showAlert
}

const mapStateToProps = state =>({
    alert: state.app.alert
})

export default connect(mapStateToProps,mapDispatchToProps)(PostForm)