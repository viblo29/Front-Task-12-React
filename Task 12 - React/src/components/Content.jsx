function Content() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', margin: '20px 0', border: '1px solid #ccc' }}>
      <h2>კომპონენტების შექმნა</h2>
      <p>
       ეს React აპლიკაცია შედგება 3 კომპონენტისგან:
      </p>
      <ul>
        <li>Header,</li>
        <li>Content,</li>
        <li>Footer.</li>
      </ul>
    </main>
  );
}

export default Content;