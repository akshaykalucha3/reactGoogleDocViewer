import { light as lightTheme, mapping } from '@eva-design/eva'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ApplicationProvider } from 'react-native-ui-kitten'

export const wrapRootElement = ({ element }) => {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <PaperProvider>{element}</PaperProvider>
    </ApplicationProvider>
  )
}



// Config

module.exports = {
    plugins: [
      `gatsby-plugin-react-native-web`,
      {
        resolve: 'gatsby-plugin-webpack-bundle-analyzer',
        options: {
          production: true,
          openAnalyzer: false,
          analyzerMode: 'static',
        },
      },
    ],
  }