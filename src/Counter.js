import React, {Component} from 'react'
import {Button} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as action from './actions'


const mapStateToProps = state => {
    return { count2: state.count2, count3:state.count3}
}


class Counter extends Component {
   

    static mapDispatchToProps = (dispatch) => {
        // return bindActionCreators({increaseCount,decreaseCount},dispatch)
    
        return {
            increaseCount2: ()=> dispatch(action.increaseCount()),
            decreaseCount2: () => dispatch(action.decreaseCount()),
            multiply2:()=>dispatch(action.multiply())
        }
    }

    render() {
    const { increaseCount2, decreaseCount2,multiply2 } = this.props
        return(
        <div>
        <Button onClick={increaseCount2} >+</Button>
                <p>{this.props.count2}</p>
                <p>{this.props.count3}</p>
                <Button onClick={decreaseCount2}>-</Button>
                <Button onClick={multiply2}>*</Button>
        </div>
        )
        }
    }
export default connect(mapStateToProps,Counter.mapDispatchToProps)(Counter)