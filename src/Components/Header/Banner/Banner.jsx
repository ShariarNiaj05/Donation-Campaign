
import background from '../../../assets/images/Rectangle4288.png'


const styles = {
    header: {
      backgroundImage: `url(${background})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
  
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(255,255,255, 0.8)',
    }
}
  

const Banner = () => {
    return (
        <div style={styles.header}>
            <div style={styles.content}>
            banner
            </div>
        </div>
    
    
        // <div className=' h-[60vh]' style={{
        //     backgroundImage: `url(${background})`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover"
        // }}>
        //     banner
        // </div> 
    );
};

export default Banner;