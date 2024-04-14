import React, { useRef, useState } from "react";
import { firestore, storage } from "./Firebaseconfig";
import { collection, addDoc  } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
 

function PageOne() {
  const Companyref = useRef();
  const articleTitleref = useRef();
  const articlePararef = useRef();
  const articleLinkref = useRef();
  const articleTagref = useRef();
  const NewsOneTextRef = useRef();
  const NewsOneLinkRef = useRef();
  const NewsTwoLinkRef = useRef();
  const NewsTwoTextRef = useRef();
  const NewsThreeTextRef = useRef();
  const NewsThreeLinkRef = useRef();
  const MoreNewsURLRef = useRef();
  const CardOneTitleRef = useRef();
  const CardTwoTitleRef = useRef();
  const CardOneParaRef = useRef();
  const CardTwoParaRef = useRef();
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const blogDataSectionOne = collection(firestore, "Blog-Home-S1");
  const blogDataSectionTwo = collection(firestore, "Blog-Home-S2");
  const blogDataSectionThree = collection(firestore, "Blog-Home-S3");
  const {logout,user} = useAuth0()
 

  const SectionOneSubmit = async (e) => {
    e.preventDefault();
     

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
      await addDoc(blogDataSectionOne, data);
      alert('Fields Data is Saved')
    } catch (e) {
      console.log("error found", e);
    }

    e.target.reset();
  };

   

  // --------------------------------------------------------------------------------------------------------------------------------------------------
  const SectionTwoSubmit = async (e) => {
    e.preventDefault();

    let dataTwo = {
      NewsOneText: NewsOneTextRef.current.value,
      NewsOneLink: NewsOneLinkRef.current.value,
      NewsTwoText: NewsTwoTextRef.current.value,
      NewsTwoLink: NewsTwoLinkRef.current.value,
      NewsThreeText: NewsThreeTextRef.current.value,
      NewsThreeLinkt: NewsThreeLinkRef.current.value,
      NewsURL: MoreNewsURLRef.current.value,
    };

    try {
      await addDoc(blogDataSectionTwo, dataTwo);
      console.log("Section-2 data is saved");
      alert('Fields Data is Saved')
    } catch (e) {
      console.log("error found", e);
    }

    e.target.reset();
  };

  // ---------------------------------------------------------------------------------------------------------------------------------------

  const SectionThreeSubmit = async (e) => {
    e.preventDefault();

    let data3 = {
      CardOneTitle: CardOneTitleRef.current.value,
      CardTwoTitle: CardTwoTitleRef.current.value,
      CardOnePara: CardOneParaRef.current.value,
      CardTwoPara: CardTwoParaRef.current.value,
    };

    if (file2) {
      // Upload file to Firebase Storage
      const storageRef = ref(storage, "blog-files/" + file2.name);
      await uploadBytes(storageRef, file2);
      // Get file download URL
      const downloadURL = await getDownloadURL(storageRef);
      data3 = { ...data3, fileURL1: downloadURL };
    }
    if (file3) {
      // Upload file to Firebase Storage
      const storageRef = ref(storage, "blog-files/" + file3.name);
      await uploadBytes(storageRef, file3);
      // Get file download URL
      const downloadURL = await getDownloadURL(storageRef);
      data3 = { ...data3, fileURL2: downloadURL };
    }

    try {
      await addDoc(blogDataSectionThree, data3);
      console.log("section3 data saved");
      alert('Fields Data is Saved')
    } catch (e) {
      console.log("error found", e);
    }

    e.target.reset();
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };
  const CardOneImage = (e) => {
    const uploadedFile1 = e.target.files[0];
    setFile2(uploadedFile1);
  };
  const CardTwoImage = (e) => {
    const uploadedFile2 = e.target.files[0];
    setFile3(uploadedFile2);
  };

  // firebase database connection End 
  // firebase database connection End 
  // firebase database connection End 
  // firebase database connection End 
  // firebase database connection End 


  



  return (
    <div>
      <section className="bg-light py-3 py-md-5">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">Blog Home - Fields</h2>
               
              <p className="text-secondary  text-center">
                Orci varius natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Pellentesque et neque id ligula mattis
                commodo.
              </p>
              <div class="container mt-5">
  <div class="card">
     <img src={user.picture} class="card-img-top rounded-circle mx-auto mt-3" alt="Profile" style={{height:'60px' , width:'60px'}}/>
    <div class="card-body text-center">
       <h5 class="card-title">hello,{user.name}</h5>
       <p class="card-text">{user.email}</p>
       <a  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} class="btn btn-primary">Logout</a>
    </div>
  </div>
</div>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="container p-3 mb-3 mt-3">
        <div
          class="row justify-content-center align-items-center"
          style={{height: "100vh;"}}
        >
          <div class="col-md-12 text-center">
            <a href="#form1">
            <button type="button" class="btn btn-primary mx-2">
              Secion One
            </button>
            </a>
            <a href="#form2">
            <button type="button" class="btn btn-primary mx-2">
              Secion Two
            </button>
            </a>
            <a href="#form3">
            <button type="button" class="btn btn-primary mx-2">
              Secion Three
            </button>
            </a>
            <Link className='btn btn-primary' style={{marginLeft:"5rem"}} to='/Section-Two'>Next Page &#8594;</Link>

             
          </div>
        </div>
        </div>


        <div className="container">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form onSubmit={SectionOneSubmit} id="form1">
                  <div className="h3 p-3">
                    Form1: section One of <span>Blog-Home</span>
                  </div>
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
                        onChange={handleFileChange}
                      />
                    </div>
                    <div className="col-12 col-md-4 ">
                      <div className="d-grid">
                        <button
                          className="btn btn-success btn-lg"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                     
                  </div>
                </form>
                <div className="row">

                <div className="col-12 col-md-4  mb-2 px-4 py-4">
                      <div className="d-grid">
                        <button
                          className="btn btn-primary btn-lg"
                          type="submit"
                        >
                          Preview
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-md-4 mb-2 px-4 py-4">
                      <div className="d-grid">
                        <Link
                          className="btn btn-dark btn-lg"
                          type="submit"
                          to='/update'
                          
                          >
                          update
                        </Link>
                      </div>
                    </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
        <hr />

        {/* <-----------------------------------------------------Section 2 -------------------------------------------------------------------------------------> */}

        <div className="container mt-3">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form onSubmit={SectionTwoSubmit} id="form2">
                  <div className="h3 p-3">
                    Form2: section two of <span>Blog-Home</span>
                  </div>
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12 col-md-6">
                      <label htmlFor="company-title" className="form-label">
                        News1-Text<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="news1-text"
                        name="news1-text"
                        ref={NewsOneTextRef}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="article-title" className="form-label">
                        News1-Link<span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="url"
                          className="form-control"
                          id="news1-link"
                          name="news1-link"
                          ref={NewsOneLinkRef}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="article-paragraph" className="form-label">
                        News2-Text
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="news2-text"
                          name="news2-text"
                          ref={NewsTwoTextRef}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <label htmlFor="article-link" className="form-label">
                        News2-Link
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="news2-link"
                        name="news2-link"
                        ref={NewsTwoLinkRef}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="article-tag" className="form-label">
                        News3-Text<span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="news3-text"
                        name="news3-text"
                        ref={NewsThreeTextRef}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="article-tag" className="form-label">
                        News3-Link<span className="text-danger">*</span>
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="news3-link"
                        name="news3-link"
                        ref={NewsThreeLinkRef}
                        required
                      />
                    </div>
                    <div className="col-12">
                      <label htmlFor="article-tag" className="form-label">
                        More News URL<span className="text-danger">*</span>
                      </label>
                      <input
                        type="url"
                        className="form-control"
                        id="news-link"
                        name="news-link"
                        ref={MoreNewsURLRef}
                        required
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
        <hr />

        {/* <-----------------------------------------------------Section 3 -------------------------------------------------------------------------------------> */}

        <div className="container mt-3">
          <div className="row justify-content-lg-center">
            <div className="col-12 col-lg-9">
              <div className="bg-white border rounded shadow-sm overflow-hidden">
                <form onSubmit={SectionThreeSubmit} id="form3">
                  <div className="h3 p-3">
                    Form3: section Three of <span>Blog-Home</span>
                  </div>
                  <div className="row gy-4 gy-xl-5 p-4 p-xl-5">
                    <div className="col-12 col-md-6">
                      <label htmlFor="company-title" className="form-label">
                        card1-image<span className="text-danger">*</span>
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="card1-image"
                        id="card1-image"
                        onChange={CardOneImage}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="article-title" className="form-label">
                        card2-image<span className="text-danger">*</span>
                      </label>
                      <div className="input-group">
                        <input
                          type="file"
                          className="form-control"
                          name="card1-image"
                          id="card1-image"
                          onChange={CardTwoImage}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="article-paragraph" className="form-label">
                        Card1-Title
                      </label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          id="card1-title"
                          name="card1-title"
                          ref={CardOneTitleRef}
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="article-link" className="form-label">
                        Card2-Title
                        <span className="text-danger">*</span>
                      </label>
                      <input
                        type="Text"
                        className="form-control"
                        id="card2-title"
                        name="card2-title"
                        ref={CardTwoTitleRef}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="article-tag" className="form-label">
                        card1-Paragraph<span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="card1-para"
                        name="card1-para"
                        ref={CardOneParaRef}
                        required
                      />
                    </div>
                    <div className="col-12 col-md-6">
                      <label htmlFor="article-tag" className="form-label">
                        card2-Paragraph<span className="text-danger">*</span>
                      </label>
                      <textarea
                        className="form-control"
                        id="card2-para"
                        name="card2-para"
                        ref={CardTwoParaRef}
                        required
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
