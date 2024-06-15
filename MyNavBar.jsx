 
import './MyNavBar.css'

const MyNavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/fafb7cc35f3769a99ff6c0cf7e608bcd8bf60e4cec48373edbfc552a229aac94?"
          className="nav-logo"
          alt="Logo"
        />
        <div className="nav-title">STAR.PJM</div>
      </div>
      <div className="nav-center">
        <div className="nav-item active">home</div>
        <div className="nav-item">CDs</div>
        <div className="nav-item">merch</div>
        <div className="nav-item">reviews</div>
        <div className="nav-item">subscribe</div>
      </div>
      <div className="nav-right">pagamento</div>
    </div>
  );
};

export default MyNavBar;
