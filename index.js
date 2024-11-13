// Seleciona o botão de alternância e o corpo da página
const toggleButton = document.getElementById('toggleDarkMode');
const body = document.body;

// Verifica a preferência do usuário no localStorage ou utiliza o modo claro por padrão
const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
  body.classList.add('dark-mode');
}

// Função para alternar o modo escuro
function toggleDarkMode() {
  body.classList.toggle('dark-mode');
  
  // Salva a preferência do usuário no localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Adiciona um ouvinte de evento no botão para alternar o modo
toggleButton.addEventListener('click', toggleDarkMode);