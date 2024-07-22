import { useEffect } from 'react';
import '../styles/globals.css'; // Sizning global CSS faylingiz

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css';
    link.rel = 'stylesheet';
    link.onload = () => {
      // Local storage ga saqlash
      fetch(link.href)
        .then(response => response.text())
        .then(css => {
          localStorage.setItem('bootstrap-css', css);
        });
    };
    document.head.appendChild(link);

    // Local storage dan CSSni olish va qo'shish
    const storedCSS = localStorage.getItem('bootstrap-css');
    if (storedCSS) {
      const style = document.createElement('style');
      style.innerHTML = storedCSS;
      document.head.appendChild(style);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;