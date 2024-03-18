import React, { useRef, useState } from "react";
import { firestore, storage } from "./Firebaseconfig";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

function PageOne() {
  const Companyref = useRef();
  const articleTitleref = useRef();
  const articlePararef = useRef();
  const articleLinkref = useRef();
  const articleTagref = useRef();
  // const fileInputRef = useRef();
  const [file, setFile] = useState(null);

  const blogDataRef = collection(firestore, "blog-data");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      " your data is saved which is:  ",
      " this is name: ",Companyref.current.value,
      ", article :",articleTitleref.current.value,
      ", Paragraph: ",articlePararef.current.value,
      ", article Link: ",articleLinkref.current.value,
      ", article Tag: ",articleTagref.current.value
    );

    let data = {
      CompanyTitle: Companyref.current.value,
      ArticleTitle: articleTitleref.current.value,
      ArticleParagraph: articlePararef.current.value,
      ArticleLink: articleLinkref.current.value,
      ArticleTag: articleTagref.current.value,
    };

    if (file) {
      // Upload file to Firebase Storage
      const storageRef = ref(storage, "blog-files/" + file.name);
      await uploadBytes(storageRef, file);
      // Get file download URL
      const downloadURL = await getDownloadURL(storageRef);
      data = { ...data, fileURL: downloadURL };
    }

    try {
      await addDoc(blogDataRef, data);
    } catch (e) {
      console.log("error found", e);
    }

    e.target.reset();
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  return (
    <div>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Blog - Fields</h2>
              <p className="text-secondary mb-5 text-center">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Pellentesque et neque id ligula mattis
                commodo.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form onSubmit={handleSubmit}>
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
                    <div className="col-12">
                      <label htmlFor="article-img" className="form-label">
                        Upload Article Image
                        <span className="text-danger">*</span>
                      </label>
                      <br />
                      <input
                        type="file"
                        name="article-img"
                        id="article-img"
                        // ref={fileInputRef}
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PageOne;
