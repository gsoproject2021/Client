
function Login(){
    return(
        <div className="grid grid-cols-3 bg-gray-400 h-screen justify-items-center">

            <div className="col-start-1 col-end-2">
                left
            </div>
            <div className="col-start-2 col-end-3 justify-items-center grid grid-cols-2 bg-white my-48">
               <div className="col-start-1 col-end-2">
                   picture
               </div>
               <div className="col-start-2 col-end-3">
                    Login
               </div>
            </div>
            <div className="col-start-3 col-end-4">
                right
            </div>

        </div>
    );
}

export default Login;