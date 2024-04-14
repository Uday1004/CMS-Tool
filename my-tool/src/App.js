 
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import PageOne from './Components/PageOne';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import PageTwo from './Components/PageTwo';
import Update from './Components/Update';
  
 
function App() {
  const {user, loginWithRedirect,isAuthenticated ,isLoading } = useAuth0();
   
   console.log('create user',user)

   if(isLoading){
    return  <div>
    <header class=" py-5"   >
             <div class="container px-5 rounded"  >
                 <div className='text-center display-3'>
                     <div style={{marginTop:'15rem',marginBottom:'15rem'}}>Loading, Please wait..</div>
                 </div>
             </div>
         </header>
 </div>
   }
   
   

  return (
    <div>
      
    {isAuthenticated ? (
       <BrowserRouter>
       <Routes>
        <Route exact index path='/' element={<PageOne/>}/>
        <Route exact index path='/Section-Two' element={<PageTwo/>}/>
        <Route exact index path='/update' element={<Update/>}/>
       </Routes>
       </BrowserRouter>
        
    ) : (
      <div>
      <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
    <h1 class="display-5 fw-bold">CRUDify</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4" style={{whiteSpace:'nowrap'}}>quick CMS tool for you product without any tech experience , better way to run your Bussiness businees <br/> <span className='text-center fw-bold text-decoration-underline'>No More CODE &#60;&#8725;&#62;</span> </p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="btn btn-primary btn-lg px-4 gap-3" onClick={()=>loginWithRedirect()}>Login</button>
        <button type="button" class="btn btn-outline-secondary btn-lg px-4" onClick={() => loginWithRedirect({ screen_hint: 'signup' })}>Register</button>
      </div>
    </div>
  </div>
   </div>
    )}
  </div>
  );
}

export default App;
