export default function Header() {
  const header = document.createElement('header')
  header.innerHTML = `
    <img src="./src/assets/img/logo.svg" alt="Logo of Tech Posters" />
    <p>Sair</p>
  `
  return header
}
