import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()
let css
if (process.env.NODE_ENV === 'production') {
  css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
}

const Html = ({ body }) =>
  <html lang='en'>
    <head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
      <link rel='icon' type='image/x-icon' href={prefixLink('/favicon/favicon.ico')} />
      {Helmet.rewind().meta.toComponent()}
      {Helmet.rewind().title.toComponent()}
      {css}
    </head>
    <body>
      <div id='react-mount' dangerouslySetInnerHTML={{ __html: body }} />
      <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
    </body>
  </html>

Html.propTypes = {
  body: PropTypes.string
}

export default Html
