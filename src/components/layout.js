import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ path, pageTitle, children }) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout