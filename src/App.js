import React, {Component} from 'react';
import styles from './App.module.css';
import {fetchData} from './api'
import thtImage from './img/tht3.png'

import {Cards, Chart, CountryPicker} from './components'


class App extends Component {
  state= {
    data: {},
    country: ''
  }



  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({data: fetchedData})
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country)
    this.setState({data: fetchedData, country: country})
  }

  render() {
  
    const {data, country} = this.state

    return (
      <div className={styles.container}>
        <img
          className={styles.img}
          src={thtImage}
          alt="Training Heights logo" 
        />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart country={country} data={data} />
      </div>
    ); 
}
}

export default App;
