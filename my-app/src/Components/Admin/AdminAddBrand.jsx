import React from 'react'
import { Row, Col, Spinner } from 'react-bootstrap'
import { ToastContainer } from 'react-toastify';
// import avatar from '../../images/avatar.png'
import AddBrandHook from './../../hook/brand/add-brand-hook';
const AdminAddBrand = () => {

    const [img, name, loading, isPress, handleSubmit, onImageChange, onChangeName] = AddBrandHook();
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add New Brand</div>
                <Col sm="8">
                    <div className="text-form pb-2">Brand Image</div>
                    <div>
                        <label htmlFor="upload-photo">
                            <img
                                src={img}
                                alt="brand"
                                height="100px"
                                width="120px"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input
                            type="file"
                            name="photo"
                            onChange={onImageChange}
                            id="upload-photo"
                        />
                    </div>
                    <input
                        type="text"
                        value={name}
                        className="input-form d-block mt-3 px-3"
                        placeholder="Brand Name"
                        onChange={onChangeName}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">Save Changes</button>
                </Col>
            </Row>

            {
                isPress ? loading ? <Spinner animation="border" variant="primary" /> : <h4>Completed</h4> : null
            }
            <ToastContainer />
        </div>
    )
}

export default AdminAddBrand
