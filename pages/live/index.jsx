import { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Chart from '../../components/Chart'
import { parseJson } from '../../utils/chart-utils'
import { Container, Subscribe, Unsubscribe } from './styles';

class LivePage extends Component {
  static async getInitialProps ({ req }) {
    const response = await fetch('http://kaboom.rksv.net/api/historical?interval=1')
    const data = await response.json()
    return { data }
	}
	constructor(props){
		super(props);
		this.state = {
			liveData: props.data,
			subscribed: false,
			subscribe: true,
		}
	}

  componentDidMount () {
    this.subscribe()
	}
	
	componentDidUpdate(prevProps, prevState) {
		this.subscribe();
	}
	

		componentWillUnmount () {
			this.props.socket.emit('unsub', {state: false})
		}
		
		subscribe = () => {
			const { socket } = this.props;
			const { liveData, subscribe, subscribed } = this.state;
			if(socket && subscribe && !subscribed){
				socket.emit('sub', { state: true });
				socket.on('data', (data, callback) => {
					console.log(data, typeof data);
					this.setState(({ liveData }) => ({ liveData: [ ...liveData, data] }));
					callback(1);
				});
				this.setState({
					subscribed: true,
					subscribe: false,
				})
			}
	}
	
		unsubscribe = () => {
			const { socket } = this.props;
			socket.emit('unsub', { state: false });
			this.setState({
				subscribed: false,
				subscribe: false,
			})
		}

  render () {
		const { liveData, subscribed } = this.state;
    return (
      <Container>
				<div>
					<Subscribe onClick={() => this.setState({ subscribe: true})}>SUBSCRIBE</Subscribe>
					<Unsubscribe onClick={this.unsubscribe}>UNSUBSCRIBE</Unsubscribe>
					<div style={{display: 'inline-block'}}>{subscribed ? 'Subscribed' : 'Unsubscribed'}</div>
				</div>
					{liveData && liveData.length > 0 ? <Chart data={parseJson(liveData)} /> : null}
      </Container>
    )
  }
}

export default LivePage
