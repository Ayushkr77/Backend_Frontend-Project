import { getUserInfo } from '../localStorage';
import { parseRequestUrl } from '../util.js';

const Header = {
  render: async () => {
    const { name, isAdmin } = getUserInfo();
    const { value } = parseRequestUrl();
    return ` 
  <div class="brand">
    <a href="/#/">Let'SHOP</a>
  </div>
  <div class="search">
  <form class="search-form"  id="search-form">
    <input type="text" name="q" id="q" value="${value || ''}" /> 
    <button type="submit"><i class="fa fa-search"></i></button>
  </form>        
  </div>
  <div>
  ${
    name
      ? `<a href="/#/Profile">${name}</a>`
      : `<a href="/#/Sign-in">Sign-In</a>`
  }    
    <a href="/#/cart">Cart</a>
    ${isAdmin ? `<a href="/#/dashboard">Dashboard</a>` : ''}
  </div>`;
  },
  after_render: () => {
    document
      .getElementById('search-form')
      .addEventListener('submit', async (e) => {
        e.preventDefault();
        const searchKeyword = document.getElementById('q').value;
        document.location.hash = `/?q=${searchKeyword}`;
      });
  },
};
export default Header;