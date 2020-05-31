import React from 'react'

import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api/index'
class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const modifiedData = await fetchData()

    this.setState({
      data: modifiedData,
    })
  }
  handleCountryChange = async (country) => {
    const modifiedData = await fetchData(country)
    this.setState({
      data: modifiedData,
      country: country,
    })

    console.log(modifiedData)
  }
  render() {
    const { data, country } = this.state
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App
