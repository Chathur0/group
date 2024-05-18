import imag from '../../public/vite.svg';

function Hi1(prop){
    return(
        <div>
            <img src={prop.image} alt="" />
            <h1>{prop.title}</h1>
            <h1>{prop.children}</h1>
        </div>
    )
}



export default Hi1;