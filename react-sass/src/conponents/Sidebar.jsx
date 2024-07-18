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
<a  href='https://drive.google.com/file/d/1Mhq7NpSxkGcad5enm1quCaAn6HI5SZ1t/view?usp=sharing' className="btn">dowload curriculo</a>
  </aside>
}

export default Sidebar
