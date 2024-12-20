import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column">
                <Link to="/admin/allOrders" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text mt-3 border-bottom p-2 mx-auto text-center">
                        Manage Orders
                    </div>
                </Link>
                <Link to="/admin/allProducts" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Manage Products
                    </div>
                </Link>
                <Link to="/admin/addBrand" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Brand
                    </div>
                </Link>

                <Link to="/admin/addCategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Category
                    </div>
                </Link>

                <Link to="/admin/addSubcategory" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Subcategory
                    </div>
                </Link>
                <Link to="/admin/addProduct" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Product
                    </div>
                </Link>
                <Link to="/admin/addCoupon" style={{ textDecoration: 'none' }}>
                    <div className="admin-side-text my-1 border-bottom p-2 mx-auto text-center">
                        Add Coupon
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default AdminSideBar
