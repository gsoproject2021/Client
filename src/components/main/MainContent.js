
import Room from "../rooms/Room";
import { StylesProvider } from "@material-ui/styles";

import Members from "../rooms/Members";
import Rooms from "../rooms/Rooms";
import Events from "../events/Events";
import Chat from "../Chat";
function MainContent(){
    return(
        <div className="grid grid-cols-12 border-2  shadow-2xl mx-3 py-3">
            <div className="col-start-1 col-end-4  grid grid-rows-2 h-full ">
                <Rooms type="Public"/>
                <Rooms type="My Groups"/>
            </div>
            <div className="col-start-4 col-end-10 bg-green-400 px-4 pt-4 pb-8 rounded-2xl mx-2 my-4">
                <Chat/>
            </div>
            <div className="col-start-10 col-end-13 ">
                <div className="col-start-1 col-end-4  grid grid-rows-2 h-full">
                    <Members/> 
                    <Events/>
                </div>
            </div>
        </div>
    );
}
export default MainContent;