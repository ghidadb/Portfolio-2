export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© {year} Ghida Diab • All rights reserved</p>
        <div className="footer-links">
          <a href="https://github.com/ghidadb" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:ghidadb98@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
