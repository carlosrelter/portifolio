function copyText() {
    const text = document.getElementById('text').textContent;
    navigator.clipboard.writeText(text)
      .then(() => {
        alert('Email copiado com sucesso!');
      })
      .catch(err => {
        console.error('Erro ao copiar:', err);
      });
}

const toggleLightMode = () => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');

      if (currentTheme === 'light') {
        html.removeAttribute('data-theme');
      } else {
        html.setAttribute('data-theme', 'light');
      }
};

const button = document.querySelector('#lightModeToggle');
    button.addEventListener('click', toggleLightMode);