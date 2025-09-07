import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

const GlobalNotFound = () => {
  return (
    <html lang="en">
      <body>
        <h1>404 - Page Not Found</h1>
        <p>This page does not exist.</p>
      </body>
    </html>
  )
}

export default GlobalNotFound