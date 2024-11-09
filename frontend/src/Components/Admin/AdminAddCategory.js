import React from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import AddCategoryHook from '../../hook/category/add-category-hook'
import { ToastContainer } from 'react-toastify' // eslint-disable-line

const AdminAddCategory = () => {
    const [img, name, loading, isPress, handelSubmit, onImageChange, onChangeName] = AddCategoryHook()

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">اضافه تصنيف جديد</div> {/* eslint-disable-line spellcheck-disable */}
                <Col sm="8">
                    <div className="text-form pb-2">صوره التصنيف</div> {/* eslint-disable-line spellcheck-disable */}
                    <div>
                        <label htmlFor="upload-photo">
                            <img
                                src={img}
                                alt="تصنيف" // Updated alt text for accessibility eslint-disable-line spellcheck-disable
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
                        onChange={onChangeName}
                        value={name}
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="اسم التصنيف" // eslint-disable-line spellcheck-disable
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button> {/* eslint-disable-line spellcheck-disable */}
                </Col>
            </Row>

            {isPress ? (loading ? <Spinner animation="border" variant="primary" /> : <h4>تم الانتهاء</h4>) : null} {/* eslint-disable-line spellcheck-disable */}
            <ToastContainer />
        </div>
    )
}

export default AdminAddCategory

