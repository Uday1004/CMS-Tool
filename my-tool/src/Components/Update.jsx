import React, { useState, useRef } from 'react';
import { firestore } from '../Components/Firebaseconfig';
import { updateDoc, doc } from 'firebase/firestore'; // Import the updateDoc function correctly

function Update() {
    const Companyref = useRef();
    const articleTitleref = useRef();
    const articlePararef = useRef();
    const articleLinkref = useRef();
    const articleTagref = useRef();

    const handleUpdate = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        const data = {
            CompanyTitle: Companyref.current.value,
            ArticleTitle: articleTitleref.current.value,
            ArticleParagraph: articlePararef.current.value,
            ArticleLink: articleLinkref.current.value,
            ArticleTag: articleTagref.current.value,
        };
        const docRef = doc(firestore, 'Blog-Home-S1', 'QXM6IMpNdzRYhKbtgAdO'); // Get the reference to the document
        try {
            await updateDoc(docRef, data); // Update the document with the new data
            alert('Data has been updated successfully');
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-lg-center">
                    <div className="col-12 col-lg-9">
                        <div className="bg-white border rounded shadow-sm overflow-hidden">
                            <form onSubmit={handleUpdate}> {/* Use handleUpdate for form submission */}
                                <div className="h3 p-3">Form1: section One of <span>Blog-Home</span></div>
                                <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                                <div className="col-12 col-md-6">
                      <label htmlFor="company-title" className="form-label">
                        Company Name Title<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company-title"
                        name="companyTitle"
                        ref={Companyref}
                       
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="article-title" className="form-label">
                        Article Title<span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="article-title"
                          name="articleTitle"
                          ref={articleTitleref}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="article-paragraph" className="form-label">
                        Article Paragraph
                      </label>
                      <div className="input-group">
                        <textarea
                          className="form-control"
                          id="article-paragraph"
                          name="articleParagraph"
                          ref={articlePararef}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="article-link" className="form-label">
                        Redirect link of Article
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="article-link"
                        name="articleLink"
                        ref={articleLinkref}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="article-tag" className="form-label">
                        Tag of Article<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="article-tag"
                        name="articleTag"
                        ref={articleTagref}
                        required
                      />
                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-12 col-md-4 mb-2 px-4 py-4">
                                    <div className="d-grid">
                                        <button className="btn btn-primary btn-lg" type="submit" form="form1">Submit</button>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-2 px-4 py-4">
                                    <div className="d-grid">
                                        <button className="btn btn-dark btn-lg" type="submit" onClick={handleUpdate}>Update</button> {/* Use onClick for update button */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Update;
