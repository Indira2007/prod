import React from 'react';
import Navbar from '../components/Navbar';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const dummyOrders = [
    { id: 'ORD-001', name: 'John Doe', amount: 499, status: 'Paid', date: 'Oct 2, 2026' },
    { id: 'ORD-002', name: 'Priya K.', amount: 299, status: 'Pending', date: 'Oct 2, 2026' },
    { id: 'ORD-003', name: 'Amit Sharma', amount: 998, status: 'Shipped', date: 'Oct 1, 2026' },
  ];

  return (
    <div className="admin-layout">
      <Navbar />
      <div className="admin-container">
        <aside className="admin-sidebar">
          <h2>Admin Panel</h2>
          <ul>
            <li className="active">Dashboard</li>
            <li>Orders</li>
            <li>Products</li>
            <li>Content Management</li>
            <li>Settings</li>
          </ul>
        </aside>
        
        <main className="admin-main bg-off-white">
          <h1 className="admin-title">Dashboard Overview</h1>
          
          <div className="stats-grid">
            <div className="stat-card">
              <h3>Total Revenue</h3>
              <div className="stat-value">₹1,796</div>
            </div>
            <div className="stat-card">
              <h3>Total Orders</h3>
              <div className="stat-value">3</div>
            </div>
            <div className="stat-card">
              <h3>Pending Orders</h3>
              <div className="stat-value">1</div>
            </div>
          </div>

          <div className="admin-card">
            <h3>Recent Orders</h3>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {dummyOrders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.name}</td>
                    <td>{order.date}</td>
                    <td>₹{order.amount}</td>
                    <td><span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span></td>
                    <td><button className="btn-small">View</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
