import React from 'react'

const PageTitle = (props) =>{
    const { title, subTitle } = props
    return(
        <div>
            <p>
                <span className="pageTitle">{title}</span>
            </p>
            <p>
                <span className="pageSubTitle">{subTitle}</span>
            </p>
        </div>

    )
}

export default PageTitle