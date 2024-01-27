import React, { useEffect, useState } from 'react';
import './styles/main.css';
import product1Image from './assets/product1.png';
import product2Image from './assets/product2.png';


// Компонент шапки сайта
const Header = () => (
  <div className="header">
    <span className="logo">Home</span>
    <input className="search-input" type="text" placeholder="Search" />
  </div>
);

// Компонент карточки товара
const ProductCard = ({ icon, label }) => (
  <div className="product-card">
    <div className="icon">{icon}</div>
    <div className="label">{label}</div>
  </div>
);

// Компонент основной секции с товарами
const MainSection = () => (
  <div className="main-section">
    <ProductCard icon="📱" label="Phone" />
    <ProductCard icon="🌐" label="Globe" />
    <ProductCard icon="🏠" label="House" />
    <ProductCard icon="📱" label="Phone" />
    <ProductCard icon="🌐" label="Globe" />
    <ProductCard icon="🏠" label="House" />
  </div>
);


const handleAddToCart = () => {};
const handleRemoveFromCart = () => {};

// Обновлённый компонент контента с блоками
const Content = ({ onAddToCart, onRemoveFromCart, cartItems }) => (
  <div className="content">
    <ContentBlock
      title="Смартфон X12"
      description="Откройте для себя мир высоких технологий с Смартфоном X12.
      Этот телефон предлагает передовой процессор,
      ультра-яркий экран и инновационную систему камер,
       которая позволяет делать потрясающие снимки.
       Батарея повышенной емкости обеспечивает длительное время работы,
        а элегантный дизайн делает его не просто устройством, а модным аксессуаром."
      id={1}
      price="$349"
      image={product1Image}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
      cartItems={cartItems}
    />
    <ContentBlock
      title="Элегантная Сумка Parisienne"
      description="Почувствуйте дух Парижа с Элегантной Сумкой Parisienne.
       Созданная из высококачественной кожи, эта сумка сочетает в себе классику и современные тенденции моды.
       Сумка оснащена просторным основным отделением и дополнительными карманами, что делает её идеальной для работы и путешествий."
      id={2}
      price="$450"
      image={product2Image}
      onAddToCart={onAddToCart}
      onRemoveFromCart={onRemoveFromCart}
      cartItems={cartItems}
    />
  </div>
);

// Компонент для отдельного блока контента
const ContentBlock = ({ id, title, description, price, image, onAddToCart, onRemoveFromCart, cartItems }) => {
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    if (cartItems) {
      const isItemInCart = cartItems.some(item => item.id === id);
      setInCart(isItemInCart);
    }
  }, [cartItems, id]);

  const addToCart = () => {
    onAddToCart({ id, title, price, image });
    setInCart(true);
  };

  const removeFromCart = () => {
    onRemoveFromCart(id);
    setInCart(false);
  };

  return (
    <div className="content-block">
      <div className="content-image-container">
        <img src={image} alt={title} className="content-image" />
      </div>
      <div className="content-text">
        <h3 className="content-title">{title}</h3>
        <p className="content-description">{description}</p>
        <p className="content-description">{price}</p>
        {inCart ? (
          <button onClick={removeFromCart} className="button remove">
            Remove from Cart
          </button>
        ) : (
          <button onClick={addToCart} className="button add">
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

const Cart = ({ cartItems, onRemoveFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.title}</h4>
              <p>${item.price}</p>
              <button onClick={() => onRemoveFromCart(item.id)} className="remove-item-button">
                Remove
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

// Компонент нижней навигационной панели
const NavBar = () => (
  <div className="navbar">
    <span className="nav-icon">🏠</span>
    <span className="nav-icon">🔍</span>
  </div>
);


function App() {
    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems(prevItems => [...prevItems, product]);
    };

    const handleRemoveFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    return (
        <div>
          <Header />
          <MainSection />
          <Content onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} cartItems={cartItems} />
          <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
          <NavBar />
        </div>
      );
}

export default App;
