import React from 'react'

function Footer() {
  return (
    <div>
      <footer class="bg-dark py-4 mt-auto">
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; My-Blog 2024</div></div>
                    <div class="col-auto">
                        <a class="link-light small" href="#!">Github</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">LikedIn</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="#!">X</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
