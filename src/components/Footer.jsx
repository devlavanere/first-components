import './Footer.css'

function Footer({props}) {
    return (
        <div className='container-footer'>
            <p className='paragraph'>{props.direitos}</p>
        </div>
    )
}

export default Footer