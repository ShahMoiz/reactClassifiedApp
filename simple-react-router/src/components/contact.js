import React from 'react';
import PropTypes from 'prop-types';


class ContactComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
        
    }

    render() {
        return (
            <div>
                <h1>Contact Component</h1>
            </div>            
        );
    }
}

ContactComponent.defaultProps = {
    
};

ContactComponent.propTypes = {
    
};

export default ContactComponent;
