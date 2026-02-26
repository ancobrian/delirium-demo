let orders = [];
let selectedMesa = null;

function initDashboard() {
    loadOrders();
    renderFilters();
    renderOrders();

    // Check for new orders every 2 seconds
    setInterval(() => {
        loadOrders();
        renderFilters();
        renderOrders();
    }, 2000);
}

function loadOrders() {
    const saved = localStorage.getItem('delirium_orders');
    if (saved) {
        orders = JSON.parse(saved);
    } else {
        orders = [];
    }
}

function renderFilters() {
    const container = document.getElementById('mesa-filters');
    container.innerHTML = `
        <button class="btn-filter ${selectedMesa === null ? 'active' : ''}" onclick="filterMesa(null)">Todas</button>
    `;

    for (let i = 1; i <= 8; i++) {
        const btn = document.createElement('button');
        btn.className = `btn-filter ${selectedMesa === i ? 'active' : ''}`;
        btn.id = `filter-mesa-${i}`;
        btn.innerText = `Mesa ${i}`;
        btn.onclick = () => filterMesa(i);
        container.appendChild(btn);
    }
}

function filterMesa(mesa) {
    selectedMesa = mesa;
    renderFilters();
    renderOrders();
}

function renderOrders() {
    const container = document.getElementById('order-grid');
    container.innerHTML = '';

    const filtered = selectedMesa
        ? orders.filter(o => o.mesa === selectedMesa)
        : orders;

    if (filtered.length === 0) {
        container.innerHTML = '<p class="dim-text" style="text-align: center; grid-column: 1 / -1; padding: 2rem;">No hay pedidos pendientes.</p>';
        return;
    }

    filtered.sort((a, b) => b.time.localeCompare(a.time)).forEach(order => {
        const card = document.createElement('div');
        card.className = 'order-card';
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem;">
                <div>
                    <h3 class="gold-text" style="font-size: 1.4rem;">Mesa ${order.mesa}</h3>
                    <p class="dim-text" style="font-size: 0.8rem;">ID: ${order.id} • ${order.time}</p>
                </div>
                <span class="status-badge status-${order.status}">${order.status}</span>
            </div>
            
            <div style="margin-bottom: 1.5rem;">
                ${order.items.map(item => `
                    <div style="display: flex; flex-direction: column; margin-bottom: 0.5rem; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 0.3rem;">
                        <div style="display: flex; justify-content: space-between;">
                            <span>${item.qty}x ${item.name}</span>
                            <span>€${item.price.toFixed(2)}</span>
                        </div>
                        ${item.note ? `<span class="dim-text" style="font-size: 0.8rem; margin-top: 0.2rem; color: #ffb703;">Nota: ${item.note}</span>` : ''}
                    </div>
                `).join('')}
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                <span style="font-weight: 700; font-size: 1.1rem;">Total</span>
                <span class="gold-text" style="font-weight: 800; font-size: 1.3rem;">€${order.total.toFixed(2)}</span>
            </div>
            
            <div style="display: flex; gap: 0.5rem;">
                <button class="btn-filter" style="flex: 1; font-size: 0.7rem;" onclick="updateStatus('${order.id}', 'pendiente')">Pte.</button>
                <button class="btn-filter" style="flex: 1; font-size: 0.7rem;" onclick="updateStatus('${order.id}', 'preparacion')">En Prep.</button>
                <button class="btn-filter" style="flex: 1; font-size: 0.7rem;" onclick="updateStatus('${order.id}', 'entregado')">Entregado</button>
                <button class="btn-filter" style="flex: 0.5; font-size: 0.7rem; color: #ff4d4d;" onclick="deleteOrder('${order.id}')">🗑️</button>
            </div>
        `;
        container.appendChild(card);
    });
}

function updateStatus(orderId, status) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = status;
        localStorage.setItem('delirium_orders', JSON.stringify(orders));
        renderOrders();
    }
}

function deleteOrder(orderId) {
    if (confirm('¿Eliminar pedido?')) {
        orders = orders.filter(o => o.id !== orderId);
        localStorage.setItem('delirium_orders', JSON.stringify(orders));
        renderOrders();
    }
}

document.addEventListener('DOMContentLoaded', initDashboard);
