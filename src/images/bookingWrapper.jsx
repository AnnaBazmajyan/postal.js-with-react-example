import React from 'react';
import Radium from 'radium';
import {FormattedMessage} from 'react-intl';

const BookingWrapper = React.createClass({
    render() {
        const booking = this.props.booking;
        const printCreditsLeft = (
            <span className="text-small light-grey">
              {booking.creditsLeft} pass left
            </span>
        );
        return(
            <li>
                <div className="row">
                    <div className="col-xs-8">
                        Use {booking.name}
                    </div>
                    <div className="col-xs-8">
                        <p className="text-small light-grey">
                          {booking.description}
                        </p>
                        {booking.type === "ProductCreditpass" ? printCreditsLeft : null}
                    </div>
                    <div className="col-xs-4 text-center">
                        <a onClick={this.props.onClick} className="btn btn-sm no-radius" style={this.props.styles.btnBrandRevers}>
                            <FormattedMessage id='detail.BookNow' defaultMessage='Jetzt Buchen' />
                        </a>
                    </div>
                </div>
            </li>
        );
    }
});
module.exports = Radium(BookingWrapper);
