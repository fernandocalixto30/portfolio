import Avatar from '../img/fernando.jpg'
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks';
import InformationContainer  from './InformationContainer';
const Sidebar = () => {
  return <aside id="sidebar">
<img src={Avatar} alt="foto de fernando" />
<p className="title">Desenvolvedor</p>
<SocialNetworks/>
<InformationContainer/>
<a href="" className="btn">dowload curriculo</a>
  </aside>
}

export default Sidebar