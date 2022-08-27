import Navbar from './Navbar';
import Footer from './Footer';

export default function LayoutComponent(props) {
  return (
    <>
      <Navbar />
      <div style={{marginTop: '5rem' }}>
        {props.children}
      </div>
      <Footer />
    </>
  );
}
