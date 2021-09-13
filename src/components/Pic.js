import pic from "../images/vitali.jpeg";


function Pic(){
    return(
        <div className="mx-28 my-4">
            <img className="rounded-full h-24 w-24" alt="" src={pic} />
        </div>
    );
}
export default Pic;