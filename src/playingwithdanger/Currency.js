import React from 'react'

class Currency extends React.Component {
    render(){
        const money = new Intl
            .NumberFormat(this.props.locale,
                {
                    style: 'currency',
                    currency: this.props.currency
                })
            .format(this.props.value)

            return (
                <div>
                    {money}
                </div>
            )
    }
}

export default Currency