
const Preloader = () => {
    return(
        <>
         {/*  Preloader Area Start  */}
   
         {/* prabhu Preloader */}
         <div id="prabhu-preloader" className="prabhu-preloader" >
             {/* Preloader Animation */}
            <div className="preloader-animation">
                 {/* Spinner */}
                <div className="spinner"></div>
                 {/* Loader */}
                <div className="loader">
                    <span data-text-preloader="D" className="animated-letters">D</span>
                    <span data-text-preloader="I" className="animated-letters">I</span>
                    <span data-text-preloader="G" className="animated-letters">G</span>
                    <span data-text-preloader="I" className="animated-letters">I</span>
                    <span data-text-preloader="T" className="animated-letters">T</span>
                    <span data-text-preloader="A" className="animated-letters">A</span>
                    <span data-text-preloader="L" className="animated-letters">L</span>
                    <span>  </span>
                    <span data-text-preloader="P" className="animated-letters">P</span>
                    <span data-text-preloader="R" className="animated-letters">R</span>
                    <span data-text-preloader="A" className="animated-letters">A</span>
                    <span data-text-preloader="B" className="animated-letters">B</span>
                    <span data-text-preloader="H" className="animated-letters">H</span>
                    <span data-text-preloader="U" className="animated-letters">U</span>
                    
                </div>
                <p className="fw-5 text-center text-uppercase">Loading</p>
            </div>
             {/* Loader Animation */}
            <div className="loader-animation">
                <div className="row h-100">
                     {/* Single Loader */}
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                     {/* Single Loader */}
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                     {/* Single Loader */}
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                     {/* Single Loader */}
                    <div className="col-3 single-loader p-0">
                        <div className="loader-bg"></div>
                    </div>
                </div>
            </div>
        </div>
   
     {/* Preloader Area End  */}

        </>
    )
}

export default Preloader;