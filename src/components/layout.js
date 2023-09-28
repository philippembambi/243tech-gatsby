import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout