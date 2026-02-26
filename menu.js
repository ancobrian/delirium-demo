const MENU_DATA = {
    copas: {
        title: "Bebidas — Copas",
        image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800",
        items: [
            { id: "c1", name: "Ron (Brugal, Barceló)", price: 8.00, desc: "Combinado clásico con tu refresco favorito." },
            { id: "c2", name: "Ron Premium (Havana 7 años, Barceló Imperial)", price: 10.00, desc: "Ron añejo de calidad superior." },
            { id: "c3", name: "Ginebra (Puerto de Indias, Larios, Tanqueray)", price: 8.00, desc: "Gin tonic con botánicos seleccionados." },
            { id: "c4", name: "Ginebra Premium (Martin Miller's)", price: 10.00, desc: "Ginebra destilada en Islandia, pureza máxima." },
            { id: "c5", name: "Vodka (Absolut, Smirnoff)", price: 8.00, desc: "Vodka neutro y suave." },
            { id: "c6", name: "Whiskey (Ballantine's, J.W Red Label)", price: 8.00, desc: "Whiskey escocés de mezcla tradicional." },
            { id: "c7", name: "Whiskey Premium (J.W Black Label, Jack Daniel's, Chivas 12)", price: 10.00, desc: "Selección de rones premium." },
            { id: "c8", name: "Jaggermeister", price: 8.00, desc: "Licor de hierbas alemán." },
            { id: "c9", name: "Crema de orujo / Licor de hierbas", price: 4.00, desc: "Digestivos tradicionales." },
            { id: "c10", name: "Baileys", price: 5.00, desc: "Crema de licor irlandesa." }
        ]
    },
    cervezas: {
        title: "Bebidas — Cervezas",
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&q=80&w=800",
        items: [
            { id: "ce1", name: "Cerveza de Grifo Doble", price: 3.50, desc: "Cerveza fría de barril." },
            { id: "ce2", name: "Cerveza de Grifo Jarra", price: 5.00, desc: "Jarra de cerveza de 500ml." },
            { id: "ce3", name: "Tercio", price: 3.50, desc: "Mahou, 0.0 tostada, Corona, Radler, Desperados." }
        ]
    },
    vinos: {
        title: "Bebidas — Vinos",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800",
        items: [
            { id: "v1", name: "Tinto de verano", price: 5.00, desc: "Vino tinto con gaseosa o limón." },
            { id: "v2", name: "Copa Tinto / Blanco", price: 4.00, desc: "Selección de la casa." },
            { id: "v3", name: "Botella", price: 15.00, desc: "Botella de vino tinto o blanco (750ml)." }
        ]
    },
    refrescos: {
        title: "Bebidas — Refrescos",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800",
        items: [
            { id: "r1", name: "Coca Cola, Fanta, Sprite, Aquarius, Zumo", price: 3.00, desc: "Variedad de refrescos y zumos." },
            { id: "r2", name: "Red Bull, Monster", price: 4.00, desc: "Bebidas energéticas." },
            { id: "r3", name: "Agua", price: 2.00, desc: "Agua mineral (500ml)." }
        ]
    },
    cocteles_clasicos: {
        title: "Cócteles Clásicos",
        image: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&q=80&w=800",
        items: [
            { id: "cc1", name: "Mojito", price: 9.00, desc: "Ron blanco, soda, hierba buena, lima, azúcar. Sabores: limón, fresa, maracuyá, frutos del bosque." },
            { id: "cc1sa", name: "Mojito Sin Alcohol", price: 8.00, desc: "Todo el sabor del mojito sin alcohol." },
            { id: "cc2", name: "Sex on the Beach", price: 9.00, desc: "Vodka, licor de melocotón, zumo de naranja, arándanos." },
            { id: "cc2sa", name: "Sex on the Beach Sin Alcohol", price: 8.00, desc: "Versión refrescante sin alcohol." },
            { id: "cc3", name: "Cosmopolitan", price: 9.00, desc: "Vodka, triple sec, zumo de limón, granadina." },
            { id: "cc3sa", name: "Cosmopolitan Sin Alcohol", price: 8.00, desc: "Versión ligera sin alcohol." },
            { id: "cc4", name: "Orange Long Island", price: 12.00, desc: "Ron, tequila, gin, vodka, triple sec, zumo de limón, soda naranja." },
            { id: "cc5", name: "Piña Colada", price: 9.00, desc: "Ron blanco, crema de coco, zumo de piña." },
            { id: "cc6", name: "Margarita", price: 9.00, desc: "Tequila, triple sec, zumo de limón, azúcar." },
            { id: "cc7", name: "Daiquiri", price: 9.00, desc: "Ron, puré de maracuyá, zumo de limón." }
        ]
    },
    cocteles_autor: {
        title: "Cócteles de Autor",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=800",
        items: [
            { id: "ca1", name: "Shark Attack", price: 10.00, desc: "Ron, blue curazao, limón, granadina y sprite." },
            { id: "ca2", name: "Dragon Glow", price: 10.00, desc: "Puerto de Indias, Red Bull Dragon Fruit y limón." },
            { id: "ca3", name: "Atardecer", price: 10.00, desc: "Whiskey, zumo de naranja, zumo de limón y granadina." },
            { id: "ca4", name: "Piña Tentación", price: 10.00, desc: "Vodka, zumo de piña, triple sec y zumo de limón." },
            { id: "ca5", name: "Ocean Water", price: 10.00, desc: "Tequila, zumo de limón, blue curazao y agua con gas." }
        ]
    },
    snacks: {
        title: "Para Picar — Snacks",
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7bb7445?auto=format&fit=crop&q=80&w=800",
        items: [
            { id: "s1", name: "Salchipapa", price: 8.50, desc: "Patatas con hot-dog." },
            { id: "s2", name: "Patatas Bravas", price: 7.00, desc: "Patatas con salsa brava picante." },
            { id: "s3", name: "Patatas Mixtas", price: 8.00, desc: "Mix de salsas." },
            { id: "s4", name: "Nuggets", price: 8.00, desc: "Crujientes bocados de pollo." },
            { id: "s5", name: "Lágrimas de pollo", price: 9.00, desc: "Tiras de pollo empanadas." },
            { id: "s6", name: "Aros de cebolla", price: 6.50, desc: "Aros crujientes." },
            { id: "s7", name: "Dedos de queso", price: 7.50, desc: "Queso fundido empanado." }
        ]
    },
    shishas: {
        title: "Shishas",
        image: "https://images.unsplash.com/photo-1552590635-27c2c2128b15?auto=format&fit=crop&q=80&w=800",
        items: [
            { id: "sh1", name: "Love 66", price: 14.00, desc: "Maracuyá, melón dulce, sandía y menta." },
            { id: "sh2", name: "Hawaii", price: 14.00, desc: "Mango, piña, mentol." },
            { id: "sh3", name: "Lkill", price: 14.00, desc: "Melocoton, mango, menta, hielo." },
            { id: "sh4", name: "Big Bagman", price: 14.00, desc: "Mora, uva, grosella refrescante." },
            { id: "sh5", name: "GipsyKings", price: 14.00, desc: "Sandía, melón, durazno, limón." },
            { id: "sh6", name: "Galleta", price: 14.00, desc: "Galleta Lotus." }
        ]
    }
};

let cart = [];

function initMenu() {
    const menuContainer = document.getElementById('menu-container');
    const navTabs = document.getElementById('nav-tabs');

    for (const key in MENU_DATA) {
        const section = MENU_DATA[key];

        // Create Nav Tab
        const tab = document.createElement('a');
        tab.href = `#${key}`;
        tab.className = 'nav-tab';
        tab.innerText = section.title.split(' — ')[1] || section.title;
        tab.addEventListener('click', (e) => {
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
        });
        navTabs.appendChild(tab);

        // Create Section
        const sectionEl = document.createElement('section');
        sectionEl.id = key;
        sectionEl.innerHTML = `<h2 class="section-title gold-text">${section.title}</h2>`;

        const grid = document.createElement('div');
        grid.className = 'menu-grid';

        section.items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'menu-card';
            card.innerHTML = `
                <div class="card-img" style="background-image: url('${section.image}')"></div>
                <div class="card-content">
                    <h3 class="item-name">${item.name}</h3>
                    <p class="item-desc">${item.desc}</p>
                    <div class="card-footer">
                        <span class="item-price gold-text">€${item.price.toFixed(2)}</span>
                        <div class="qty-controls" id="controls-${item.id}">
                            <button class="btn-accent" onclick="addToCart('${item.id}')">+ Añadir</button>
                        </div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        sectionEl.appendChild(grid);
        menuContainer.appendChild(sectionEl);
    }
}

function addToCart(itemId) {
    let itemData;
    for (const key in MENU_DATA) {
        const found = MENU_DATA[key].items.find(i => i.id === itemId);
        if (found) {
            itemData = found;
            break;
        }
    }

    const cartItem = cart.find(i => i.id === itemId);
    if (cartItem) {
        cartItem.qty++;
    } else {
        cart.push({ ...itemData, qty: 1, note: '' });
    }
    updateQtyControls(itemId);
    updateCartFloating();
}

function removeFromCart(itemId) {
    const index = cart.findIndex(i => i.id === itemId);
    if (index !== -1) {
        cart[index].qty--;
        if (cart[index].qty <= 0) {
            cart.splice(index, 1);
        }
    }
    updateQtyControls(itemId);
    updateCartFloating();
    renderCartDrawer();
}

function updateQtyControls(itemId) {
    const container = document.getElementById(`controls-${itemId}`);
    if (!container) return;

    const cartItem = cart.find(i => i.id === itemId);
    if (cartItem && cartItem.qty > 0) {
        container.innerHTML = `
            <button class="btn-qty" onclick="removeFromCart('${itemId}')">-</button>
            <span class="qty-val">${cartItem.qty}</span>
            <button class="btn-qty" onclick="addToCart('${itemId}')">+</button>
        `;
    } else {
        container.innerHTML = `<button class="btn-accent" onclick="addToCart('${itemId}')">+ Añadir</button>`;
    }
}

function updateCartFloating() {
    const fab = document.getElementById('cart-floating');
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    if (totalItems > 0) {
        fab.style.display = 'flex';
        document.getElementById('cart-count').innerText = `${totalItems} items`;
        document.getElementById('cart-total').innerText = `€${totalPrice.toFixed(2)}`;
    } else {
        fab.style.display = 'none';
    }
}

function toggleCart() {
    const overlay = document.getElementById('modal-overlay');
    const drawer = document.getElementById('cart-drawer');
    overlay.classList.toggle('active');
    drawer.classList.toggle('active');
    if (drawer.classList.contains('active')) {
        renderCartDrawer();
    }
}

function renderCartDrawer() {
    const list = document.getElementById('cart-items-list');
    list.innerHTML = '';

    cart.forEach(item => {
        const el = document.createElement('div');
        el.className = 'cart-item';
        el.innerHTML = `
            <div style="flex-grow: 1">
                <div style="display: flex; justify-content: space-between">
                    <span style="font-weight: 700">${item.name}</span>
                    <span class="gold-text">€${(item.price * item.qty).toFixed(2)}</span>
                </div>
                <div class="qty-controls" style="margin-top: 0.5rem">
                    <button class="btn-qty" onclick="removeFromCart('${item.id}')">-</button>
                    <span class="qty-val">${item.qty}</span>
                    <button class="btn-qty" onclick="addToCart('${item.id}')">+</button>
                </div>
                <textarea class="item-note-input" placeholder="Nota (ej. sin hielo, poco azúcar...)" onchange="updateNote('${item.id}', this.value)">${item.note}</textarea>
            </div>
        `;
        list.appendChild(el);
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    document.getElementById('drawer-total').innerText = `€${total.toFixed(2)}`;
}

function updateNote(itemId, note) {
    const item = cart.find(i => i.id === itemId);
    if (item) item.note = note;
}

function sendOrder() {
    if (cart.length === 0) return;

    const saved = localStorage.getItem('delirium_orders');
    const orders = saved ? JSON.parse(saved) : [];

    const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tableNum = document.body.getAttribute('data-mesa') || 1;
    const newOrder = {
        id: "ord-" + Math.floor(Math.random() * 10000),
        mesa: parseInt(tableNum),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        status: "pendiente",
        items: cart.map(item => ({
            name: item.name,
            qty: item.qty,
            price: item.price,
            note: item.note
        })),
        total: total
    };

    orders.push(newOrder);
    localStorage.setItem('delirium_orders', JSON.stringify(orders));

    alert(`¡Pedido enviado con éxito! Mesa ${tableNum}`);
    cart = [];
    updateCartFloating();
    toggleCart();

    // In a real app, this would refresh the UI controls too
    location.reload();
}

// Start
document.addEventListener('DOMContentLoaded', initMenu);
