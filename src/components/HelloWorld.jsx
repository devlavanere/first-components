import Banner from '../assets/banner-natureza.jpg'
import "./HelloWorld.css"

function HelloWorld({props}) {
    return (
        <div className="container">
            <div className='container-frases'>
                <h1>{props.saudacao}</h1>
                <p>{props.frase}</p>
            </div>
        </div>
    )
}

export default HelloWorld