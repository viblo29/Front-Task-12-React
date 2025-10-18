function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ padding: '10px', background: '#f1f1f1', color: '#333', textAlign: 'center', fontSize: '14px' }}>
      <p>&copy; {currentYear} React Project. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;