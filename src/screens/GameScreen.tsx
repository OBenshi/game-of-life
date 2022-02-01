import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

type Props = {}

const numRows = 35
const numCols = 35
const GameScreen = (props: Props) => {
  const [grid, setGrid] = useState(() => {
    const rows = []
    for (let i = 0; i < numRows; i++) {
      rows.push(Array.from(Array(numCols), () => 0))
    }
    return rows
  })
  return (
    <View>
      <Text>GameScreen</Text>
      <View>
        <FlatList
          horizontal
          data={grid}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index: i }) => {
            return (
              <FlatList
                data={item}
                keyExtractor={(item2, index3) => index3.toString()}
                renderItem={({ item, index: k }) => {
                  console.log(item, grid[i][k])
                  return (
                    <View
                      key={`${i},${k}`}
                      style={{
                        width: 10,
                        height: 10,
                        borderWidth: 1,
                        borderColor: 'black',
                        backgroundColor: grid[i][k] ? 'pink' : 'white',
                      }}
                    />
                  )
                }}
              />
            )
          }}
        />
      </View>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({})
