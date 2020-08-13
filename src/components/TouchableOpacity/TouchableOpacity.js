import React from 'react';
import style from './TouchableOpacity.module.css';
 
class TouchableOpacity extends React.Component {
    state = {
      touched: false
    }
    
    toggleTouched = () => {
      this.setState( prevState => ({
        touched: !prevState.touched
      }));
    }
    
    handleMouseUp = () => {
      // Handle smooth animation when clicking without holding
      setTimeout( () => {
        this.setState({ touched: false });
      }, 150);
    }
    
    render () {
      const { touched } = this.state;
      const className = touched ? style.btnTouched : style.btn;
      return (
          <div
            className={className}
            onMouseDown={this.toggleTouched}
            onMouseUp={this.handleMouseUp}
          >
           {this.props.children}
          </div>
      )
    }
  }
  
export default TouchableOpacity;