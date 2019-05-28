import App, { Container } from 'next/app'
import React from 'react'
import io from 'socket.io-client'
import Header from '../components/Header'

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
	}
	
  state = {
    socket: null
	}

  componentDidMount () {
		const clientSocket = io.connect('http://kaboom.rksv.net:80/watch');
    this.setState({ socket: clientSocket });
  }

  componentWillUnmount () {
    this.state.socket.close()
	}
	
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
				<div style={{paddingTop: 60, fontFamily: 'sans-serif'}}>
				<Header />
        <Component {...pageProps} socket={this.state.socket} />
				</div>
      </Container>
    )
  }
}

export default MyApp
