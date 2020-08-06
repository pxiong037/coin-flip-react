import React, { Component } from 'react';
import Coin from './Coin';
import './CoinFlipper.css';
import headsImg from './images/heads.jpg'
import tailsImg from './images/tails.jpg'

class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            { side: "heads", imgSrc: headsImg },
            { side: "tails", imgSrc: tailsImg }
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
			flipping: false,
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        };
        this.handleClick = this.handleClick.bind(this);
		this.flipCoin = this.flipCoin.bind(this);
		this.flipping = this.flipping.bind(this);
    }

    choice(arr) {
        let randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    flipCoin() {
        const newCoin = this.choice(this.props.coins);
        this.setState(st => {
            return {
				flipping: true,
                currCoin: newCoin,
                nFlips: st.nFlips + 1,
                nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
                nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
            };
        });
		setTimeout(this.flipping, 1000);
    }

	flipping(){
		this.setState({flipping: false});
	}

    handleClick(e) {
        this.flipCoin();
    }

    render() {
		let flip = this.state.flipping 
		? 	<div className="CoinFlipper">
				<div className="heads face">
					<img src={headsImg} />
				</div>
				<div className="tails face">
					<img src={tailsImg} />
				</div>
			</div> 
		: 	<div>
				{this.state.currCoin && <Coin imgSrc={this.state.currCoin.imgSrc}/>}
				<button onClick={this.handleClick}>Flip Me!</button>
				{this.state.currCoin && <p><strong>**You flipped {this.state.currCoin.side}**</strong></p>}
                <p>
					Out of {this.state.nFlips} flips, there have been {this.state.nHeads}{" "}
				  	heads and {this.state.nTails} tails.
				</p>
			</div>
		
        return (
            <div className='CoinContainer'>
                <h2>Let's Flip A Coin!</h2>
                {flip}
            </div>
        );
    }
}

export default CoinFlipper;