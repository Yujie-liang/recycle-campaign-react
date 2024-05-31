import Header from '../components/Header'
import Campaign from '../components/Campaign';
import Recycle from '../components/Recycle';

export default function HomePage(){
    return(
        <>
            <Header />
            <Campaign />
            <Recycle />
            <section id="more-info"></section>
        </>
    )
}