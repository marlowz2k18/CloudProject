/*import React from 'react'
import { Grid, LineChart, XAxis, YAxis } from 'react-native-svg-charts'
import { View } from 'react-native'

class ChartScreen extends React.PureComponent {

  render() {
    const data = [50, 10, 30, 20, -10, -20, 0, 25, -5, 10]
    const dataRTL = [...data].reverse()
    const xLabel = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    const xLabelRTL = [...xLabel].reverse()

    return (
      <View>
        <View style={{ height: 300, flexDirection: 'row' }}>
          <LineChart
            style={{ flex: 1, marginLeft: 10 }}
            data={dataRTL}
            svg={{ stroke: 'rgb(134, 65, 244)' }}
            contentInset={{ top: 20, bottom: 20 }}
          >
            <Grid />
          </LineChart>
          <YAxis
            data={dataRTL}
            contentInset={{ top: 20, bottom: 20 }}
            svg={{ fill: 'black', fontSize: 12 }}
            numberOfTicks={8}
            formatLabel={(value) => `${value}ºC`}
          />
        </View>
        <View>
          <XAxis
            style={{ marginHorizontal: 10 }}
            data={dataRTL}
            formatLabel={(value, index) => xLabelRTL[index]}
            contentInset={{ left: 0, right: 22 }}
            svg={{ fontSize: 12, fill: 'black' }}
          />
        </View>
      </View>
    )

  }
}

export default ChartScreen*/