
import { StylesProvider } from "@material-ui/styles";
import {Card,CardContent,CardActions,Typography,ListItem} from "@material-ui/core";


function TestEvent(){
    return(
        <StylesProvider injectFirst>
            <ListItem button >
                <Card className="bg-gradient-to-r from-green-400 to-blue-500 ">
                    <CardActions>
                        <CardContent className="h-32 overflow-auto " >
                            <Typography gutterBottom variant="h6">bla bla bla</Typography>
                            <Typography gutterBottom variant="subtitle1">01/01/22 22:00</Typography>
                            <Typography variant="subtitle2">nfkjsdf kjsdfhkjsdfh ubdsfuisbdfdfgdfgdfg  nfkjsdf kjsdfhkjsdfh ubdsfuisbdfdfgdfgdfg dukfhuifsuidfsuid ubuisdbfuisbdfdukfhuifsuidfsuid ubuisdbfuisbdf</Typography>
                        </CardContent>
                    </CardActions>
                </Card>
            </ListItem>
                
        </StylesProvider>
    );
}

export default TestEvent;